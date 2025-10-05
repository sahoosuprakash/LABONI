
// ======================
// Floating Hearts
// ======================
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 3 + Math.random() * 2 + "s";
  heart.innerText = "💖";
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}
setInterval(createHeart, 400);

// ======================
// Background Music
// ======================
const playBtn = document.getElementById("playMusic");
const audio = new Audio("audio/song.mp3"); // আপনার music file path
if (playBtn) {
  playBtn.addEventListener("click", () => {
    if (audio.paused) {
      audio.play();
      playBtn.innerText = "⏸ Pause Music";
    } else {
      audio.pause();
      playBtn.innerText = "🎵 Play Music";
    }
  });
}

// ======================
// Confetti Effect
// ======================
const title = document.querySelector("h1");
if (title) {
  title.addEventListener("click", () => {
    for (let i = 0; i < 80; i++) {
      const confetti = document.createElement("div");
      confetti.classList.add("confetti");
      confetti.style.left = Math.random() * 100 + "vw";
      confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;
      confetti.style.animationDuration = 2 + Math.random() * 3 + "s";
      document.body.appendChild(confetti);
      setTimeout(() => confetti.remove(), 4000);
    }
  });
}

// ======================
// Touch/Click Messages
// ======================
const messages = [
  "Happy Birthday Laboni! 💖",
  "You make every day magical ✨",
  "May your day be full of smiles 😘",
  "Love you forever ❤️",
  "You’re my sunshine ☀️"
];

let index = 0;
const messageDiv = document.getElementById("touchMessage");

// Initialize first message
if(messageDiv) messageDiv.innerText = messages[0];

function changeMessage() {
  messageDiv.style.opacity = 0; // fade out
  setTimeout(() => {
    messageDiv.innerText = messages[index];
    index = (index + 1) % messages.length;
    messageDiv.style.opacity = 1; // fade in
  }, 300);
}

if(messageDiv) {
  messageDiv.addEventListener("click", changeMessage);
  messageDiv.addEventListener("touchstart", changeMessage);
}
