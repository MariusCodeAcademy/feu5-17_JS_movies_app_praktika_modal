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

  makeOneMovieHtmlEl(newMovieDetails);
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

/* 
<li class="movie-element">
  <div class="movie-element__image">
    <img src="https://picsum.photos/id/1003/600/500" alt="element__image">
  </div>
  <div class="movie-element__info">
    <h2>Title</h2>
    <p>rating/5 stars</p>
  </div>
</li>
*/
function makeOneMovieHtmlEl(movieObj) {
  // sukurti li elementa su visom reiksmem ir patalpinti i ul
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

function crEl(el, parent = '', text = '', className = '') {
  const newEl = document.createElement(el);
  if (className) newEl.className = className;
  if (text) newEl.innerHTML = text;
  if (parent) parent.appendChild(newEl);
  return newEl;
}
