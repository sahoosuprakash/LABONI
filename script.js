// 🎵 Music Play Button
const playButton = document.getElementById('playMusic');
let music;

playButton.addEventListener('click', () => {
  if (!music) {
    music = new Audio('music.mp3');
    music.loop = true;
  }
  music.play();
  playButton.textContent = '🎶 Music Playing...';
  playButton.disabled = true;
});

// 💬 Auto Changing Floating Message
const messages = [
  "You are my everything 💖",
  "Your smile makes my world brighter 😊",
  "My heart beats only for you 💓",
  "Forever yours, Laboni 💞",
  "Every moment with you is magical ✨",
  "You’re my sunshine ☀️"
];

let msgIndex = 0;
const messageDiv = document.getElementById('touchMessage');

function changeMessage() {
  messageDiv.textContent = messages[msgIndex];
  messageDiv.classList.add('show');
  setTimeout(() => messageDiv.classList.remove('show'), 1500);
  msgIndex = (msgIndex + 1) % messages.length;
}

setInterval(changeMessage, 2000);

// 💖 Create falling glowing LOVE effect
function createLove() {
  const love = document.createElement('div');
  love.classList.add('love');

  // Random text between LOVE and LABONI
  const loveTexts = ['💖 LOVE 💖', '💞 LABONI 💞', '❤️ LOVE ❤️', '💘 MY LOVE 💘'];
  love.textContent = loveTexts[Math.floor(Math.random() * loveTexts.length)];

  love.style.left = Math.random() * 100 + 'vw';
  love.style.animationDuration = (2 + Math.random() * 3) + 's';
  love.style.fontSize = (20 + Math.random() * 15) + 'px';
  document.getElementById('love-container').appendChild(love);

  setTimeout(() => {
    love.remove();
  }, 5000);
}

// প্রতি 700ms পর পর নতুন LOVE পড়বে
setInterval(createLove, 700);
