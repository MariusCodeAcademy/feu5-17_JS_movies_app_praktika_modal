'use strict';
console.log('app.js file was loaded');

// Taikomes

const els = {
  addMovieBtn: document.getElementById('addMovieBtn'),
  addMovieModal: document.getElementById('add-modal'),
  backdropEl: document.getElementById('backdrop'),
  cancelModalBtn: document.getElementById('cancelModalBtn'),
  addMovieForm: document.getElementById('addMovieForm'),
};
console.log('els ===', els);

// Event listeners
// paspaudimas ant Add Movie Btn
els.addMovieBtn.addEventListener('click', showAddMovieModal);

// uzdeti paspaudimo pasiklausyma ant backdrop
els.backdropEl.addEventListener('click', closeAddMovieModal);
// padaryti kad paspaudus candel mygtuka modale uzsidarytu modalas
els.cancelModalBtn.addEventListener('click', closeAddMovieModal);
// formos pateikimas
els.addMovieForm.addEventListener('submit', addMovieFormHandler);

// Functions

function addMovieFormHandler(event) {
  // sustabdyti nuo restart
  event.preventDefault();
  console.log('new movie handler');
  const newMovieDetails = {
    title: els.addMovieForm.elements.title.value.trim(),
    imageUrl: els.addMovieForm.elements['image-url'].value.trim(),
    rating: els.addMovieForm.elements.rating.value.trim(),
  };
  console.log('newMovieDetails ===', newMovieDetails);

  // validacija
  if (isThereEmptyValues(newMovieDetails)) {
    console.warn('visi laukai butini');
    return;
  }

  console.log('visi laukai uzpildyti');
}

function showAddMovieModal() {
  console.log('showAddMovieModal');
  // parodyti modala
  els.addMovieModal.classList.add('visible');
  // parodyti backdrop
  els.backdropEl.classList.add('visible');
}

function closeAddMovieModal() {
  // nuimti klases visible nuo backdrop ir modal
  // paslepti modala
  els.addMovieModal.classList.remove('visible');
  // paslepti backdrop
  els.backdropEl.classList.remove('visible');
}

// helper Functions

function isThereEmptyValues(obj) {
  // mini validacija
  // jei nors vienas laukas yra tuscias tai pranesti
  // Object.values(obj) - grazina reiksmiu masyva
  const valuesArr = Object.values(obj);
  // ar valuesArr yra nors vienas tuscia stringas?
  let isThereEmptyFields = valuesArr.some((str) => str === '');
  isThereEmptyFields = valuesArr.includes('');
  return isThereEmptyFields;
}
