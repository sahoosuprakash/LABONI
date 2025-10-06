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
const audio = new Audio("audio/song.mp3");
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
// Confetti Effect (click on title)
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
// Auto Changing Messages (Every 2 Seconds)
// ======================
const messages = [
  "Happy Birthday Laboni! 💖",
  "You make every day magical ✨",
  "May your day be full of smiles 😘",
  "Love you forever ❤️",
  "You’re my sunshine ☀️",
  "You are my favorite reason to smile 🌸"
];

let index = 0;
const messageDiv = document.getElementById("touchMessage");

if (messageDiv) {
  messageDiv.innerText = messages[0];

  setInterval(() => {
    messageDiv.style.opacity = 0; // fade out
    setTimeout(() => {
      index = (index + 1) % messages.length;
      messageDiv.innerText = messages[index];
      messageDiv.style.opacity = 1; // fade in
    }, 500);
  }, 2000); // 2 seconds interval
}
