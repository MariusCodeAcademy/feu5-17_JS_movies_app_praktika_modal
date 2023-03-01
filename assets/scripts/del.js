'use strict';
console.log('del.js file was loaded');

const del1 = document.querySelector('.del1');
const del2 = document.querySelector('.del2');

del1.addEventListener('click', deleteMe);
del2.addEventListener('click', deleteMe);

function deleteMe(event) {
  console.log('deleteMe');
  // veiksma iniciavo event.target
  console.log('veiksma iniciavo event.target ===', event.target);
  // istrinti veiksmo iniciatoriu
  event.target.remove();
}
