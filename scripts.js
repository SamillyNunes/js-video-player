// Buscar os elementos
const player = document.querySelector('.player');
const viewer = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const playButton = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

// Construir as funcoes
function togglePlay() {
  const method = viewer.paused ? 'play' : 'pause';
  viewer[method]();
}

function updatePlayButton() {
  const icon = this.paused ? '▶' : '▐▐';
  playButton.textContent = icon;
}

function skip() {
  console.log(this.dataset);
  viewer.currentTime += parseFloat(this.dataset.skip);
}

// Adicioanr listeners
viewer.addEventListener('click', togglePlay);
viewer.addEventListener('play', updatePlayButton);
viewer.addEventListener('pause', updatePlayButton);

playButton.addEventListener('click', togglePlay);
skipButtons.forEach(btn => btn.addEventListener('click', skip));