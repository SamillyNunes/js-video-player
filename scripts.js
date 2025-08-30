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

function handleRangeUpdate() {
  // vai ser o equivalente a video['volume'] = 1.5 e assim vai
  viewer[this.name] = this.value;
}

// Adicioanr listeners
viewer.addEventListener('click', togglePlay);
viewer.addEventListener('play', updatePlayButton);
viewer.addEventListener('pause', updatePlayButton);

playButton.addEventListener('click', togglePlay);

skipButtons.forEach(btn => btn.addEventListener('click', skip));

ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));