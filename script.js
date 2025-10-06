// =====================
// 🎵 Background Music Control
// =====================
const playBtn = document.getElementById("playMusic");
let audio;

playBtn.addEventListener("click", () => {
  if (!audio) {
    audio = new Audio("audio/song.mp3"); // তোমার গানটা এখানে রাখবে
    audio.loop = true;
  }

  if (audio.paused) {
    audio.play();
    playBtn.innerText = "⏸️ Pause Music";
  } else {
    audio.pause();
    playBtn.innerText = "🎵 Play Music";
  }
});

// =====================
// 💬 Auto Changing Messages (Every 2 Seconds)
// =====================
const messages = [
  "Happy Birthday Laboni! 💖",
  "You make every day magical ✨",
  "May your day be full of smiles 😘",
  "Love you forever ❤️",
  "You’re my sunshine ☀️",
  "You are my favorite reason to smile 🌸",
  "You mean the world to me 💞",
  "You're my forever happiness 💐"
];

let index = 0;
const messageDiv = document.getElementById("touchMessage");

if (messageDiv) {
  messageDiv.innerText = messages[0];
  messageDiv.style.opacity = 1;

  setInterval(() => {
    messageDiv.style.opacity = 0; // fade out
    setTimeout(() => {
      index = (index + 1) % messages.length;
      messageDiv.innerText = messages[index];
      messageDiv.style.opacity = 1; // fade in
    }, 500);
  }, 2000); // প্রতি 2 সেকেন্ডে পরিবর্তন
}

// =====================
// 💖 Touch Animation (Click Anywhere)
// =====================
document.body.addEventListener("click", (e) => {
  const heart = document.createElement("span");
  heart.classList.add("heart");
  heart.innerHTML = "💖";
  heart.style.left = `${e.clientX}px`;
  heart.style.top = `${e.clientY}px`;
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 1500);
});
