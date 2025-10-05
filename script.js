// Floating hearts animation
for (let i = 0; i < 30; i++) {
  let heart = document.createElement('div');
  heart.className = 'heart';
  heart.style.left = Math.random() * window.innerWidth + 'px';
  heart.style.animationDuration = 4 + Math.random() * 3 + 's';
  heart.style.width = heart.style.height = 10 + Math.random() * 20 + 'px';
  document.body.appendChild(heart);
}

// Optional: Background music
/*
const audio = new Audio('audio/song.mp3'); // Path to your music file
audio.loop = true;
audio.play();
*/
