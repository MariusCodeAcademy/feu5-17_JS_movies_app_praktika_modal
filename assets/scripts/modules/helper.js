// cia atkelti ir iseksportuoti visas pagalbines funkcijas
export function generateId() {
  return Math.random().toFixed(8).slice(2);
}

export function crEl(el, parent = '', text = '', className = '') {
  const newEl = document.createElement(el);
  if (className) newEl.className = className;
  if (text) newEl.innerHTML = text;
  if (parent) parent.appendChild(newEl);
  return newEl;
}
