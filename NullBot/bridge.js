// NullBot bridge.js
const root = document.getElementById('nullbot-root');
const overlay = document.getElementById('activation-overlay');
const countdownEl = document.getElementById('countdown');

const wifiFrame = document.getElementById('wifi-frame');
const panelFrame = document.getElementById('panel-frame');
const popupFrame = document.getElementById('popup-frame');

function log(msg){ console.log('[NullBot]', msg); }

// random delay between 20–45 seconds
const minMs = 20000, maxMs = 45000;
const delayMs = minMs + Math.floor(Math.random() * (maxMs - minMs + 1));
let remaining = Math.ceil(delayMs / 1000);

overlay.classList.remove('hide');
countdownEl.textContent = remaining;

const countdown = setInterval(() => {
  remaining--;
  if (remaining <= 0) {
    clearInterval(countdown);
    overlay.classList.add('hide');
    activate();
  } else {
    countdownEl.textContent = remaining;
  }
}, 1000);

async function activate(){
  log('Activation: starting.');
  postToAll({ type: 'activate' });

  // attempt true fullscreen
  const ok = await attemptFullscreen(root);
  if (!ok) {
    root.classList.add('pseudo-fullscreen'); // fallback
    log('Fullscreen blocked; using pseudo-fullscreen.');
  } else {
    log('Entered real fullscreen.');
  }

  // optionally tell panel iframe to expand UI
  postToPanel({ type: 'open-panel' });
}

function postToAll(msg){
  [wifiFrame, panelFrame, popupFrame].forEach(f=>{
    try { f.contentWindow.postMessage(msg, window.location.origin); } catch(e){ console.warn(e); }
  });
}

function postToPanel(msg){
  try { panelFrame.contentWindow.postMessage(msg, window.location.origin); } catch(e){ console.warn(e); }
}

async function attemptFullscreen(elem){
  if(!elem) return false;
  try {
    if (elem.requestFullscreen) {
      await elem.requestFullscreen();
      return document.fullscreenElement === elem;
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
      return document.webkitFullscreenElement === elem;
    } else return false;
  } catch(err){
    return false;
  }
}

// expose for debugging
window.NullBotBridge = { delayMs, activate, postToAll };
