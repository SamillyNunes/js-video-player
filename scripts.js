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

function handleProgress() {
  const currentPercent = (viewer.currentTime / viewer.duration) * 100;
  progressBar.style.flexBasis = `${currentPercent}%`;
}

function scrub(e){
  console.log(e);
  // e.offsetX eh onde parou com o click do mouse dentro da barra de progresso (quando arrasta p/ uma posicao especifica)
  // progress.offsetWidth eh a largura total da barra de progresso
  // dividir um pelo outro eh ter a informacao em relacao a largura
  // e multiplicar pela duracao eh ter a informacao da largura exata onde deve estar para caminhar com a duracao do video
  const scrubTime = (e.offsetX / progress.offsetWidth) * viewer.duration;
  viewer.currentTime = scrubTime;
}

// Adicioanr listeners
viewer.addEventListener('click', togglePlay);
viewer.addEventListener('play', updatePlayButton);
viewer.addEventListener('pause', updatePlayButton);
viewer.addEventListener('timeupdate', handleProgress);

playButton.addEventListener('click', togglePlay);

skipButtons.forEach(btn => btn.addEventListener('click', skip));

ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

progress.addEventListener('click', scrub);