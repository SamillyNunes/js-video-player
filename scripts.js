// Buscar os elementos
const player = document.querySelector('.player');
const viewer = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const play = player.querySelector('.play');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

// Construir as funcoes
function togglePlay() {
  const method = viewer.paused ? 'play' : 'pause';
  viewer[method]();
}

// Adicioanr listeners