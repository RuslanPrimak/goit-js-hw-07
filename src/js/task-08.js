'use strict';

const size = 30;

function createBoxes(amount) {
  const boxElement = document.querySelector('div#boxes');
  if (!boxElement) exit;
  const childCount = boxElement.children.length;
  let divs = '';
  for (let index = 0; index < amount; index++) {
    const currentSize = size + 10 * (index + childCount);
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    divs += `<div style="background: rgb(${r},${g},${b}); width: ${currentSize}px; height: ${currentSize}px; "></div>`;
  }
  boxElement.insertAdjacentHTML('beforeend', divs);
}

function destroyBoxes() {
  const boxElement = document.querySelector('div#boxes');
  if (!boxElement) exit;
  boxElement.innerHTML = '';
}

const createBtn = document.querySelector(
  'div#controls button[data-action="render"]'
);
createBtn.addEventListener('click', (event) => {
  const inputElem = document.querySelector('div#controls input[type="number"]');
  createBoxes(inputElem.value);
});

const destroyBtn = document.querySelector(
  'div#controls button[data-action="destroy"]'
);
destroyBtn.addEventListener('click', (event) => {
  destroyBoxes();
});
