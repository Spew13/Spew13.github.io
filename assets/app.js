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
      <p>Special Thanks to Jayce Rich for Steal A Fluff!</p>
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
    neon: '#FFA500',
    ocean: '#FFAC1C',
    retro: '#CC5500'
  };

  // Set selected theme for all elements
  function setTheme(theme) {
    document.body.dataset.theme = theme;
  }

  // Random flicker function
  function randomColorFlicker() {
    const elements = document.querySelectorAll('header, footer, .game-box, #spew-clock, .click-btn');
    const theme = document.body.dataset.theme || 'orange';

    elements.forEach(el => {
      setTimeout(() => {
        let color;
        if (theme === 'orange') {
          // Random lime variations
          const shades = ['#FFA500','#FFAC1C','#CC5500','#F4BB44'];
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

  // Loop the random flicker continuously
  setInterval(randomColorFlicker, 500); // every 0.5s, pick some random changes
