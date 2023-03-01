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
// paspaudimas ant Add Movie Btn
els.addMovieBtn.addEventListener('click', showAddMovieModal);

// uzdeti paspaudimo pasiklausyma ant backdrop

// Functions

function showAddMovieModal() {
  console.log('showAddMovieModal');
  // parodyti modala
  els.addMovieModal.classList.add('visible');
  // parodyti backdrop
  els.backdropEl.classList.add('visible');
}

function closeAddMovieModal() {
  // nuimti klases visible nuo backdrop ir modal
}
