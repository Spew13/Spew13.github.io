// NullBot bridge.js — cyclical activation
const root = document.getElementById('nullbot-root');
const overlay = document.getElementById('activation-overlay');
const countdownEl = document.getElementById('countdown');

const wifiFrame = document.getElementById('wifi-frame');
const panelFrame = document.getElementById('panel-frame');
const popupFrame = document.getElementById('popup-frame');

function log(msg){ console.log('[NullBot]', msg); }

function postTo(frame, msg){
  try { frame.contentWindow.postMessage(msg, window.location.origin); }
  catch(e){ console.warn(e); }
}

function postToAll(msg){
  [wifiFrame, panelFrame, popupFrame].forEach(f => postTo(f, msg));
}

function activatePanel(){
  log('Activating NullBot panel...');
  postTo(panelFrame, { type: 'activate' });
  postToPanel({ type: 'open-panel' });

  // fullscreen attempt
  attemptFullscreen(root).then(ok=>{
    if(!ok) root.classList.add('pseudo-fullscreen');
  });

  // schedule WiFi hack after 3–5 minutes
  const wifiDelay = 3*60*1000 + Math.floor(Math.random()*2*60*1000); // 3–5 min
  setTimeout(activateWiFi, wifiDelay);
}

function activateWiFi(){
  log('Activating WiFi simulation...');
  postTo(wifiFrame, { type: 'activate' });

  // schedule popups after 2–3 minutes
  const popupDelay = 2*60*1000 + Math.floor(Math.random()*1*60*1000); // 2–3 min
  setTimeout(activatePopups, popupDelay);
}

function activatePopups(){
  log('Activating popups...');
  postTo(popupFrame, { type: 'activate' });

  // schedule next panel in 8 min from this activation
  setTimeout(activatePanel, 8*60*1000);
}

// initial surprise activation between 20–45 seconds
const initialDelay = 20*1000 + Math.floor(Math.random()*25*1000);
overlay.classList.remove('hide');
countdownEl.textContent = Math.ceil(initialDelay/1000);

let remaining = Math.ceil(initialDelay/1000);
const countdownTimer = setInterval(()=>{
  remaining--;
  countdownEl.textContent = remaining;
  if(remaining<=0){
    clearInterval(countdownTimer);
    overlay.classList.add('hide');
    activatePanel();
  }
}, 1000);

// Fullscreen helper
async function attemptFullscreen(elem){
  if(!elem) return false;
  try{
    if(elem.requestFullscreen){ await elem.requestFullscreen(); return document.fullscreenElement===elem; }
    else if(elem.webkitRequestFullscreen){ elem.webkitRequestFullscreen(); return document.webkitFullscreenElement===elem; }
    else return false;
  }catch(e){ return false; }
}

// Expose for debugging
window.NullBotBridge = { activatePanel, activateWiFi, activatePopups };
