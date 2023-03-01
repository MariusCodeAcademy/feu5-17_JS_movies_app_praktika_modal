'use strict';
console.log('app.js file was loaded');

// Taikomes

const els = {
  addMovieBtn: document.getElementById('addMovieBtn'),
  addMovieModal: document.getElementById('add-modal'),
  backdropEl: document.getElementById('backdrop'),
};
console.log('els ===', els);

// Event listeners
els.addMovieBtn.addEventListener('click', showAddMovieModal);

// Functions

function showAddMovieModal() {
  console.log('showAddMovieModal');
  els.addMovieModal.classList.add('visible');
  els.backdropEl.classList.add('visible');
}
