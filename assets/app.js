const allowedHost = "spew13.github.io";

  if (window.top !== window.self) {
    if (window.top.location.hostname !== allowedHost) {
      window.top.location = window.location; // Break out of iframe
    }
  }

    // Prevent embedding in an iframe
    if (window.top !== window.self) {
      // Break out of the iframe
      window.top.location = window.self.location;
    }

(() => {
  const binId = "68e8eb5bd0ea881f409c55e0";
  const popup = document.getElementById("announcementPopup");
  const STORAGE_KEY = "spew13_lastAnnouncement";
  let lastShown = localStorage.getItem(STORAGE_KEY) || "";

  async function checkAnnouncements() {
    try {
      const res = await fetch(`https://api.jsonbin.io/v3/b/${binId}/latest`);
      const json = await res.json();
      const messages = json.record || [];
      if (!messages.length) return;

      const newest = messages[messages.length - 1];
      const newestHash = JSON.stringify(newest);


      if (newestHash === lastShown) return;

      // Otherwise, show it once
      showPopup(newest.text);

      // Save that we’ve shown this one
      localStorage.setItem(STORAGE_KEY, newestHash);
    } catch (err) {
      console.error("Announcement fetch error:", err);
    }
  }

  function showPopup(message) {
    popup.innerHTML = `<div>${escapeHtml(message)}</div>`;
    popup.style.display = "block";
    requestAnimationFrame(() => popup.style.opacity = "1");

    // Hide after 8 seconds
    setTimeout(() => {
      popup.style.opacity = "0";
      setTimeout(() => (popup.style.display = "none"), 500);
    }, 8000);
  }

  function escapeHtml(s) {
    return ("" + s)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;");
  }

  //  Check announcements once on page load
  checkAnnouncements();
})();

      const canvas = document.getElementById("matrixCanvas");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

const fontSize = 18;
let columns = Math.floor(canvas.width / fontSize);
let drops = new Array(columns).fill(0);


const img = new Image();
img.src = "https://github.com/Spew13/Spew13.github.io/blob/main/image/tree.png?raw=true"; 

function draw() {
  ctx.fillStyle = "rgba(0,0,0,0.08)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < drops.length; i++) {

    ctx.drawImage(img, i * fontSize, drops[i] * fontSize, fontSize, fontSize);

    drops[i] += 1;
    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
  }
}

setInterval(draw, 80);

// Function to show popup
function showAntiCopyPopup() {
    if (document.getElementById('antiCopyPopup')) return; // prevent multiple popups

    const popup = document.createElement('div');
    popup.id = 'antiCopyPopup';
    popup.innerText = "denied...";
    document.body.appendChild(popup);

    // Remove popup after animation
    setTimeout(() => {
        if (popup) popup.remove();
    }, 1500); // match animation duration
}

// Disable right-click
document.addEventListener('contextmenu', e => {
    e.preventDefault();
    showAntiCopyPopup();
});

// Disable common shortcuts 
document.addEventListener('keydown', function(e) {
    if (e.key === 'F12' || 
        (e.ctrlKey && e.shiftKey && ['I','J','C'].includes(e.key.toUpperCase())) ||
        (e.ctrlKey && e.key.toUpperCase() === 'U')) {
        e.preventDefault();
        showAntiCopyPopup();
    }
});


const leafUrl = "https://github.com/Spew13/Spew13.github.io/blob/main/image/Snowfall.png?raw=true";
const bodyWidth = window.innerWidth;
const bodyHeight = window.innerHeight;

function createLeaf() {
  const leaf = document.createElement('img');
  leaf.src = leafUrl;
  leaf.className = 'leaf';

  const size = 20 + Math.random() * 50;
  leaf.style.width = size + 'px';

  const startX = Math.random() * bodyWidth;
  leaf.style.left = startX + 'px';

  const swayAmplitude = 20 + Math.random() * 40;
  const swaySpeed = 0.5 + Math.random() * 1;
  const fallSpeed = 20 + Math.random() * 30;
  const spinSpeed = (Math.random() * 60 + 30) * (Math.random() < 0.5 ? 1 : -1);

  document.body.appendChild(leaf);

  let startTime = null;

  function animateLeaf(time) {
    if (!startTime) startTime = time;
    const elapsed = (time - startTime) / 1000;

    // vertical fall
    const y = elapsed * fallSpeed;
    leaf.style.top = y + 'px';

    // horizontal sway
    const x = startX + Math.sin(elapsed * swaySpeed) * swayAmplitude;

    // spin rotation
    const rotation = elapsed * spinSpeed;
    leaf.style.transform = `translateX(${x - startX}px) rotate(${rotation}deg)`;

    // opacity fades slower
    leaf.style.opacity = Math.max(0, 1 - elapsed / 8);

    // remove after it falls off screen
    if (y < bodyHeight + 100) {
      requestAnimationFrame(animateLeaf);
    } else {
      leaf.remove();
    }
  }

  requestAnimationFrame(animateLeaf);
}

// continuously spawn leaves
setInterval(() => {
  createLeaf();
  if (Math.random() < 0.3) createLeaf();
}, 700);

// optional: adjust for window resize
window.addEventListener('resize', () => {
  bodyWidth = window.innerWidth;
  bodyHeight = window.innerHeight;
});

const cutsceneTexts = [
  "There's a creepy room ahead...",
  "A chill runs down your spine...",
  "You enter the dark and mysterious room..."
];

const btn = document.getElementById('enterRoomBtn');
const container = document.getElementById('cutsceneContainer');

btn.addEventListener('click', () => {
  btn.style.display = 'none';


  const bodyChildren = Array.from(document.body.children);
  bodyChildren.forEach(el => {
    if(el.tagName.toLowerCase() !== 'header' && el.tagName.toLowerCase() !== 'footer' && el !== container) {
      el.remove();
    }
  });


  document.body.appendChild(container);
  container.style.display = 'block';

  let index = 0;
  function showNextText() {
    if(index < cutsceneTexts.length) {
      container.textContent = cutsceneTexts[index];
      index++;
      setTimeout(showNextText, 1000); 
    } else {

    window.location.href = "https://arstudios750.github.io/spew13gamble/";
    }
  }

  showNextText();
});

  window.addEventListener("message", (event) => {
    if(event.data?.type === "resizeVisitorIframe") {
      const iframe = document.getElementById("visitor-iframe");
      if(iframe) iframe.style.height = event.data.height + "px";
    }
  });

  // Auto-resize iframe height
  window.addEventListener("message", (event) => {
    if(event.data?.type === "resizeVisitorIframe") {
      const iframe = document.getElementById("visitor-iframe");
      if(iframe) iframe.style.height = event.data.height + "px";
    }
  });

  window.addEventListener("message", (event) => {
    if(event.data?.type === "resizeVisitorIframe") {
      const iframe = document.getElementById("visitor-iframe");
      iframe.style.height = event.data.height + "px";
    }
  });

  // Listen for iframe height messages
  window.addEventListener("message", (event) => {
    if(event.data?.type === "resizeVisitorIframe") {
      const iframe = document.getElementById("visitor-iframe");
      iframe.style.height = event.data.height + "px";
    }
  });
function openWebBlock() {
    // Disable scrolling behind iframe
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    document.documentElement.style.margin = '0';
    document.body.style.margin = '0';
    document.documentElement.style.padding = '0';
    document.body.style.padding = '0';

    // Create fullscreen iframe
    const iframe = document.createElement('iframe');
    iframe.src = "https://spew13.github.io/WebBlock/";
    iframe.style.position = "fixed";
    iframe.style.top = "0";
    iframe.style.left = "0";
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.border = "none";
    iframe.style.zIndex = "9999";
    iframe.style.backgroundColor = "#000"; // prevents background showing through
    iframe.id = "webBlockIframe";

    // Close button
    const closeBtn = document.createElement('button');
    closeBtn.innerText = "×";
    closeBtn.style.position = "fixed";
    closeBtn.style.top = "0";
    closeBtn.style.right = "0";
    closeBtn.style.fontSize = "48px";
    closeBtn.style.color = "white";
    closeBtn.style.background = "transparent";
    closeBtn.style.border = "none";
    closeBtn.style.cursor = "pointer";
    closeBtn.style.zIndex = "10000";
    closeBtn.id = "webBlockClose";

    closeBtn.onclick = () => {
        document.body.removeChild(iframe);
        document.body.removeChild(closeBtn);
        document.documentElement.style.overflow = '';
        document.body.style.overflow = '';
        document.documentElement.style.margin = '';
        document.body.style.margin = '';
        document.documentElement.style.padding = '';
        document.body.style.padding = '';
    };

    // Append to body last so it covers everything
    document.body.appendChild(iframe);
    document.body.appendChild(closeBtn);
}


function openContact() {
    // Remove all existing elements
    document.body.innerHTML = "";
    document.body.style.background = "#121212"; // dark greenish for help
    document.body.style.height = "100vh";
    document.body.style.display = "flex";
    document.body.style.flexDirection = "column";
    document.body.style.alignItems = "center";
    document.body.style.justifyContent = "center";

    // Create heading
    const heading = document.createElement("h2");
    heading.textContent = "Write Your Review";
    heading.style.marginBottom = "20px";
    heading.style.color = "white";
    heading.style.textShadow = "0 0 10px limegreen, 0 0 20px limegreen";
    document.body.appendChild(heading);

    // Create textarea
    const textarea = document.createElement("textarea");
    textarea.id = "reviewText";
    textarea.placeholder = "Write your review here...";
    textarea.style.width = "80%";
    textarea.style.maxWidth = "600px";
    textarea.style.height = "150px";
    textarea.style.padding = "10px";
    textarea.style.borderRadius = "8px";
    textarea.style.border = "2px solid limegreen";
    textarea.style.background = "#003300";
    textarea.style.color = "white";
    textarea.style.fontSize = "16px";
    textarea.style.marginBottom = "20px";
    textarea.style.outline = "none";
    textarea.style.boxShadow = "0 0 10px limegreen, 0 0 20px limegreen";
    document.body.appendChild(textarea);

    // Create Send button
    const sendBtn = document.createElement("button");
    sendBtn.textContent = "Send";
    sendBtn.className = "contact-button";
    sendBtn.style.padding = "12px 24px";
    sendBtn.style.fontSize = "18px";
    sendBtn.style.background = "limegreen";
    sendBtn.style.border = "none";
    sendBtn.style.borderRadius = "8px";
    sendBtn.style.color = "white";
    sendBtn.style.cursor = "pointer";
    sendBtn.style.textShadow = "0 0 10px #00ff88, 0 0 20px #00ff88";
    sendBtn.style.transition = "0.3s";
    sendBtn.onmouseover = () => {
      sendBtn.style.background = "#121212";
      sendBtn.style.textShadow = "0 0 15px #00ff88, 0 0 25px #00ff88";
    };
    sendBtn.onmouseout = () => {
      sendBtn.style.background = "limegreen";
      sendBtn.style.textShadow = "0 0 10px #00ff88, 0 0 20px #00ff88";
    };
    sendBtn.onclick = sendReview;
    document.body.appendChild(sendBtn);
  }

  function sendReview() {
    const review = document.getElementById("reviewText").value.trim();
    if (!review) {
      alert("Please write something first!");
      return;
    }

    const subject = encodeURIComponent("Website Review");
    const body = encodeURIComponent(review);

    // Open Gmail compose in a new tab
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=carmstrong31@ecsd.us&su=${subject}&body=${body}`,
      "_blank"
    );
  }

  // Open Help Section
  function openHelp() {
    // Remove all existing elements
    document.body.innerHTML = "";
    document.body.style.background = "#121212"; // dark greenish for help
    document.body.style.height = "100vh";
    document.body.style.display = "flex";
    document.body.style.flexDirection = "column";
    document.body.style.alignItems = "center";
    document.body.style.justifyContent = "center";

    // Create heading
    const heading = document.createElement("h2");
    heading.textContent = "Help";
    heading.style.marginBottom = "20px";
    heading.style.color = "white";
    heading.style.textShadow = "0 0 10px cyan, 0 0 20px cyan"; // neon-style
    document.body.appendChild(heading);

    // Create help text
    const helpText = document.createElement("p");
    helpText.textContent = "Welcome to Spew13, the ultimate place for quick, fun, and addicting browser games! If you’re stuck, confused, or just want to know how things work, you’re in the right spot. All the games are loaded directly in the site using iframes, which means you don’t need to download anything — just click the Load button under the game you want, and it’ll open right inside the page. Some games may take a few moments to appear, depending on your internet speed, so don’t worry if you see a blank box for a bit.If a game doesn’t load, first try refreshing the page. Still not working? Check your WiFi or try using a different browser (we recommend Chrome). Some games may also need fullscreen for the best experience — look for the Fullscreen button to make the game fill your screen.Navigation is easy! Use the neon buttons at the top to jump to sections like the Gallery, About, or Contact. The site is always being updated with new games and features, so check back often to see what’s new. If you have a favorite game you’d like to see added, or if you find a bug, head over to the Contact section and let us know — your feedback helps make Spew13 even better.And most importantly: have fun! Spew13 is all about quick entertainment, glowing neon vibes, and giving you a place to relax and game without the boring stuff in the way. ENJOY THE NEW GAMES, HAVE FUN!!!";
    helpText.style.color = "white";
    helpText.style.textAlign = "center";
    helpText.style.marginBottom = "30px";
    helpText.style.fontSize = "18px";
    helpText.style.textShadow = "0 0 5px cyan, 0 0 10px cyan";
    document.body.appendChild(helpText);

    // Create Back button
    const backBtn = document.createElement("button");
    backBtn.textContent = "Back";
    backBtn.className = "back-button";
    styleSpewBackButton(backBtn);
    backBtn.onclick = backToPage;
    document.body.appendChild(backBtn);
  }

  // Style for the Spew13 Back Button
  function styleSpewBackButton(button) {
    button.style.padding = "12px 24px";
    button.style.fontSize = "18px";
    button.style.background = "limegreen";
    button.style.border = "none";
    button.style.borderRadius = "8px";
    button.style.color = "white";
    button.style.cursor = "pointer";
    button.style.textShadow = "0 0 10px #ff00ff, 0 0 20px #ff00ff";
    button.style.transition = "0.3s";
    button.onmouseover = () => {
      button.style.background = "limegreen";
      button.style.textShadow = "0 0 15px #ff00ff, 0 0 25px #ff00ff";
    };
    button.onmouseout = () => {
      button.style.background = "darkgreen";
      button.style.textShadow = "0 0 10px #ff00ff, 0 0 20px #ff00ff";
    };
  }

  // Go Back to original page
  function backToPage() {
    location.reload(); 
  }

  // Open Gallery Section
  function openGallery() {
    // Remove all existing elements
    document.body.innerHTML = "";
    document.body.style.background = "#121212"; // dark greenish for help
    document.body.style.height = "100vh";
    document.body.style.display = "flex";
    document.body.style.flexDirection = "column";
    document.body.style.alignItems = "center";
    document.body.style.justifyContent = "center";

    // Create heading
    const heading = document.createElement("h2");
    heading.textContent = "Gallery";
    heading.style.marginBottom = "20px";
    heading.style.color = "white";
    heading.style.textShadow = "0 0 10px #ffffff, 0 0 20px #cccccc"; // subtle neon-white
    document.body.appendChild(heading);

    // Create gallery placeholder text
    const galleryText = document.createElement("p");
    galleryText.textContent = "Gallery images or content would go here.";
    galleryText.style.color = "white";
    galleryText.style.textAlign = "center";
    galleryText.style.marginBottom = "30px";
    galleryText.style.fontSize = "18px";
    galleryText.style.textShadow = "0 0 5px #ffffff, 0 0 10px #cccccc";
    document.body.appendChild(galleryText);

    // Create Back button
    const backBtn = document.createElement("button");
    backBtn.textContent = "Back";
    backBtn.className = "back-button";
    styleSpewBackButton(backBtn);
    backBtn.onclick = backToPage;
    document.body.appendChild(backBtn);
  }

  // Reuse the Back button styling from Help
  function styleSpewBackButton(button) {
    button.style.padding = "12px 24px";
    button.style.fontSize = "18px";
    button.style.background = "purple";
    button.style.border = "none";
    button.style.borderRadius = "8px";
    button.style.color = "white";
    button.style.cursor = "pointer";
    button.style.textShadow = "0 0 10px #ff00ff, 0 0 20px #ff00ff";
    button.style.transition = "0.3s";
    button.onmouseover = () => {
      button.style.background = "#cc00cc";
      button.style.textShadow = "0 0 15px #ff00ff, 0 0 25px #ff00ff";
    };
    button.onmouseout = () => {
      button.style.background = "purple";
      button.style.textShadow = "0 0 10px #ff00ff, 0 0 20px #ff00ff";
    };
  }

  // Go Back to original page
  function backToPage() {
    location.reload(); 
  }

  function openAbout() {
    // Remove all existing elements
    document.body.innerHTML = "";
    document.body.style.background = "#121212"; // black background
    document.body.style.height = "100vh";
    document.body.style.display = "flex";
    document.body.style.flexDirection = "column";
    document.body.style.alignItems = "center";
    document.body.style.justifyContent = "center";

    // Create heading
    const heading = document.createElement("h2");
    heading.textContent = "About Spew13";
    heading.style.marginBottom = "20px";
    heading.style.color = "limegreen";
    heading.style.textShadow = "0 0 10px limegreen, 0 0 20px limegreen";
    document.body.appendChild(heading);

    // Create larger gray rectangle container with glowing lime border
    const aboutBox = document.createElement("div");
    aboutBox.style.background = "#888888"; // gray rectangle
    aboutBox.style.padding = "30px";
    aboutBox.style.borderRadius = "12px";
    aboutBox.style.width = "90%";
    aboutBox.style.maxWidth = "800px";
    aboutBox.style.color = "#000000"; // black text
    aboutBox.style.textAlign = "left";
    aboutBox.style.fontSize = "16px";
    aboutBox.style.lineHeight = "1.5";
    aboutBox.style.boxShadow = "0 0 20px lime, 0 0 40px lime"; // glowing lime effect
    aboutBox.style.border = "2px solid lime"; // lime border
    aboutBox.innerHTML = `
      <p>Spew13 is an innovative and fun gaming portal designed to bring together a collection of mini-games and interactive experiences in one neon-themed interface. Our goal is to make gaming accessible, fast, and visually exciting for users of all ages.</p>
      <p>Each section in Spew13 is carefully crafted to offer a unique experience: the Contact page allows players to send feedback directly to the creators, the Help page provides guidance and instructions, and the Gallery showcases highlights and achievements within the games.</p>
      <p>Spew13 embraces a vibrant neon aesthetic, emphasizing glowing elements, dynamic buttons, and interactive design features that engage users visually while remaining intuitive and easy to navigate.</p>
      <p>Whether you are here to explore, play, or provide feedback, Spew13 is committed to delivering a smooth, enjoyable, and memorable gaming experience.</p>
      <p>Thank you for being part of the Spew13 community!</p>
      <p>ENJOY THE NEW GAMES MORE COMING!!!!!</p>
    `;
    document.body.appendChild(aboutBox);
  }

  function openFluffBox() {
    // Clear the whole page
    document.body.innerHTML = "";
    document.body.style.background = "#121212";
    document.body.style.height = "100vh";
    document.body.style.display = "flex";
    document.body.style.flexDirection = "column";
    document.body.style.alignItems = "center";
    document.body.style.justifyContent = "flex-start";
    document.body.style.padding = "20px";

    // Heading
    const heading = document.createElement("h2");
    heading.textContent = "Put Your Link In Here!";
    heading.style.marginBottom = "20px";
    heading.style.color = "white";
    heading.style.textShadow = "0 0 10px limegreen, 0 0 20px limegreen";
    document.body.appendChild(heading);

    // Input + buttons container (all in one row)
    const inputRow = document.createElement("div");
    inputRow.style.display = "flex";
    inputRow.style.alignItems = "center";
    inputRow.style.gap = "10px";
    inputRow.style.marginBottom = "20px";
    inputRow.style.width = "90%";
    inputRow.style.maxWidth = "800px";
    document.body.appendChild(inputRow);

    // Input
    const input = document.createElement("input");
    input.type = "text";
    input.id = "urlInput";
    input.placeholder = "Enter full URL (https://...)";
    input.style.flex = "1";
    input.style.padding = "12px";
    input.style.borderRadius = "8px";
    input.style.border = "2px solid limegreen";
    input.style.background = "#003300";
    input.style.color = "white";
    input.style.fontSize = "18px";
    input.style.outline = "none";
    input.style.boxShadow = "0 0 10px limegreen, 0 0 20px limegreen";
    inputRow.appendChild(input);

    // Open Site button
    const loadBtn = document.createElement("button");
    loadBtn.textContent = "Open Site";
    styleBtn(loadBtn);
    loadBtn.onclick = () => {
      const url = document.getElementById("urlInput").value;
      if (url.startsWith("http://") || url.startsWith("https://")) {
        iframe.src = url;
      } else {
        alert("Please enter a valid HTTP or HTTPS URL.");
      }
    };
    inputRow.appendChild(loadBtn);

    // Back button
    const backBtn = document.createElement("button");
    backBtn.textContent = "Back";
    styleBtn(backBtn);
    backBtn.onclick = () => {
      location.reload(); // reloads page to bring back all divs
    };
    inputRow.appendChild(backBtn);

    // Iframe (large viewer)
    const iframe = document.createElement("iframe");
    iframe.id = "viewer";
    iframe.src = "black";
    iframe.style.width = "95%";
    iframe.style.height = "80vh";
    iframe.style.border = "3px solid limegreen";
    iframe.style.borderRadius = "16px";
    iframe.style.boxShadow = "0 0 25px limegreen, 0 0 50px limegreen";
    document.body.appendChild(iframe);

    // Styling function for buttons
    function styleBtn(btn) {
      btn.style.padding = "12px 20px";
      btn.style.fontSize = "16px";
      btn.style.background = "limegreen";
      btn.style.border = "none";
      btn.style.borderRadius = "8px";
      btn.style.color = "#1f1f1f";
      btn.style.cursor = "pointer";
      btn.style.textShadow = "0 0 10px #00ff88, 0 0 20px #00ff88";
      btn.style.transition = "0.3s";
      btn.onmouseover = () => {
        btn.style.background = "#1f1f1f";
        btn.style.textShadow = "0 0 15px #00ff88, 0 0 25px #00ff88";
      };
      btn.onmouseout = () => {
        btn.style.background = "limegreen";
        btn.style.textShadow = "0 0 10px #00ff88, 0 0 20px #00ff88";
      };
    }
  }

  const buttons = document.querySelectorAll('.neon-btn');

  function randomNeonColor() {
    const shades = ['#00ff88', '#33ff99', '#66ffaa', '#00cc77', '#00eeaa'];
    return shades[Math.floor(Math.random() * shades.length)];
  }

  function flickerButton(button) {
    const color = randomNeonColor();
    button.style.borderColor = color;
    button.style.boxShadow = `0 0 10px ${color}, 0 0 20px ${color}, 0 0 30px ${color}`;
    const interval = Math.random() * 1000 + 500;
    setTimeout(() => flickerButton(button), interval);
  }

  function openContact() {
    // Remove all existing elements
    document.body.innerHTML = "";
    document.body.style.background = "darkgreen";
    document.body.style.height = "100vh";
    document.body.style.display = "flex";
    document.body.style.flexDirection = "column";
    document.body.style.alignItems = "center";
    document.body.style.justifyContent = "center";

    // Create heading
    const heading = document.createElement("h2");
    heading.textContent = "Write Your Review";
    heading.style.marginBottom = "20px";
    heading.style.color = "white";
    heading.style.textShadow = "0 0 10px limegreen, 0 0 20px limegreen";
    document.body.appendChild(heading);

    // Create textarea
    const textarea = document.createElement("textarea");
    textarea.id = "reviewText";
    textarea.placeholder = "Write your review here...";
    textarea.style.width = "80%";
    textarea.style.maxWidth = "600px";
    textarea.style.height = "150px";
    textarea.style.padding = "10px";
    textarea.style.borderRadius = "8px";
    textarea.style.border = "2px solid limegreen";
    textarea.style.background = "#003300";
    textarea.style.color = "white";
    textarea.style.fontSize = "16px";
    textarea.style.marginBottom = "20px";
    textarea.style.outline = "none";
    textarea.style.boxShadow = "0 0 10px limegreen, 0 0 20px limegreen";
    document.body.appendChild(textarea);

    // Create Send button
    const sendBtn = document.createElement("button");
    sendBtn.textContent = "Send";
    sendBtn.className = "contact-button";
    sendBtn.style.padding = "12px 24px";
    sendBtn.style.fontSize = "18px";
    sendBtn.style.background = "limegreen";
    sendBtn.style.border = "none";
    sendBtn.style.borderRadius = "8px";
    sendBtn.style.color = "white";
    sendBtn.style.cursor = "pointer";
    sendBtn.style.textShadow = "0 0 10px #00ff88, 0 0 20px #00ff88";
    sendBtn.style.transition = "0.3s";
    sendBtn.onmouseover = () => {
      sendBtn.style.background = "#00cc66";
      sendBtn.style.textShadow = "0 0 15px #00ff88, 0 0 25px #00ff88";
    };
    sendBtn.onmouseout = () => {
      sendBtn.style.background = "limegreen";
      sendBtn.style.textShadow = "0 0 10px #00ff88, 0 0 20px #00ff88";
    };
    sendBtn.onclick = sendReview;
    document.body.appendChild(sendBtn);
  }

  function sendReview() {
    const review = document.getElementById("reviewText").value.trim();
    if (!review) {
      alert("Please write something first!");
      return;
    }

    const subject = encodeURIComponent("Website Review");
    const body = encodeURIComponent(review);

    // Open Gmail compose in a new tab
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=carmstrong31@ecsd.us&su=${subject}&body=${body}`,
      "_blank"
    );
  }

function loadGalleryWalk() {
  // Hide all game boxes
  document.querySelectorAll('.game-box').forEach(box => {
    box.style.display = 'none';
  });

  // Show restore button
  document.getElementById('restoreButtonWrapper').style.display = 'block';
}

function restoreGames() {
  // Show all game boxes again
  document.querySelectorAll('.game-box').forEach(box => {
    box.style.display = 'block';
  });

  // Hide restore button again if you want
  document.getElementById('restoreButtonWrapper').style.display = 'none';
}

    function toggleGame(path, button) {
      const container = document.getElementById(path);
      const loaded = container.querySelector('iframe');

      if (loaded) {
        // Unload game
        container.innerHTML = '';
        button.textContent = "Click to Load";
      } else {
        // Load game
        const iframe = document.createElement('iframe');
        iframe.src = `https://spew45.github.io/game-assets/${path}/`;
        container.appendChild(iframe);
        button.textContent = "Click to Unload";
      }
    }

    function toggleEagler(fullscreen, button) {
      const container = document.getElementById('eagler-container');
      const loaded = container.querySelector('iframe');

      if (loaded && !fullscreen) {
        container.innerHTML = '';
        button.textContent = "Click to Load";
      } else if (loaded && fullscreen) {
        container.classList.add('fullscreen');
        container.innerHTML = `
          <button class="exit-fullscreen" onclick="exitFullscreen()">Exit Fullscreen</button>
          <iframe src="https://eaglercraft.com/mc/1.8.8/" allowfullscreen sandbox="allow-scripts allow-same-origin allow-pointer-lock allow-forms"></iframe>
        `;
      } else {
        container.innerHTML = `
          <iframe src="https://eaglercraft.com/mc/1.8.8/" allowfullscreen sandbox="allow-scripts allow-same-origin allow-pointer-lock allow-forms"></iframe>
        `;
        button.textContent = "Click to Unload";
        container.classList.remove('fullscreen');
      }
    }

    function exitFullscreen() {
      const container = document.getElementById('eagler-container');
      container.classList.remove('fullscreen');
      container.innerHTML = '';
      // Reset button text for Eaglercraft Load button
      const loadBtn = container.parentElement.querySelector('button[onclick^="toggleEagler(false"]');
      if (loadBtn) loadBtn.textContent = "Click to Load";
    }

        function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12; // '0' should be '12'
    const timeString = `${String(hours).padStart(2, '0')}:${minutes}:${seconds} ${ampm}`;

    document.getElementById('clock').textContent = timeString;
  }

  setInterval(updateClock, 1000);
  updateClock(); // Initial load

  // Set load for custom 
  function toggleCustomIframe(button, boxId, url) {
  const box = document.getElementById(boxId);
  const iframeContainer = box.querySelector('.iframe-container');
  const loadedIframe = iframeContainer.querySelector('iframe');

  if (loadedIframe) {
    // Unload iframe
    iframeContainer.innerHTML = '';
    button.textContent = "Click to Load";
  } else {
    // Load iframe
    const iframe = document.createElement('iframe');
    iframe.src = url;
    iframe.allowFullscreen = true;
    iframeContainer.appendChild(iframe);
    button.textContent = "Click to Unload";

    // Scroll to box smoothly
    box.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

  // Theme colors
  const themes = {
    neon: '#729ACF',
    ocean: '#50A3C6',
    retro: '#00E4FF'
  };

  // Set selected theme for all elements
  function setTheme(theme) {
    document.body.dataset.theme = theme;
  }

  // Random flicker function
  function randomColorFlicker() {
    const elements = document.querySelectorAll('footer, .game-box, .click-btn');
    const theme = document.body.dataset.theme || 'lime';

    elements.forEach(el => {
      setTimeout(() => {
        let color;
        if (theme === 'lime') {
          const shades = ['#2377A4','#50A3C6','#79C0D7','#729ACF','#004D4D','#00E4FF'];
          color = shades[Math.floor(Math.random()*shades.length)];
        } else {
          color = themes[theme];
        }

        el.style.borderColor = color;
        el.style.boxShadow = `0 0 20px ${color}`;
        el.style.color = color;
      }, Math.random() * 3500); // random delay between 0-2s
    });
  }
  setInterval(randomColorFlicker, 525);
