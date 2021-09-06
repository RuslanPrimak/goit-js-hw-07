'use strict';

const classValid = 'valid';
const classInvalid = 'invalid';

const inputElement = document.querySelector('input#validation-input');

inputElement.addEventListener('focusout', (event) => {
  const length = event.target.dataset.length;
  if (String(event.target.value).length == length) {
    event.target.classList.remove(classInvalid);
    event.target.classList.add(classValid);
  } else {
    event.target.classList.remove(classValid);
    event.target.classList.add(classInvalid);
  }
});
