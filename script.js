// 🌸 Floating hearts animation
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

// 🎵 Optional: Background Music
const playBtn = document.getElementById("playMusic");
const audio = new Audio("audio/song.mp3"); // তোমার গান/voice note path দাও

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

// 🎁 Confetti effect when clicking on 'Happy Birthday' text
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

// ❤️ Smooth scroll effect
const links = document.querySelectorAll('a[href^="#"]');
for (let link of links) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
}
