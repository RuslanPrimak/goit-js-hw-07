'use strict';

const sizeElement = document.querySelector('input#font-size-control');
const textElement = document.querySelector('span#text');

sizeElement.addEventListener('input', (event) => {
  textElement.style.fontSize = `${event.target.value}px`;
});
