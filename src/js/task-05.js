'use strict';

class InputToSpanTranslator {
  constructor(input, span) {
    this._input = input;
    this._span = span;
  }

  InputListener() {
    const inputText = this._input.value;
    if (inputText && inputText != '') {
      this._span.textContent = inputText;
    } else {
      this._span.textContent = 'незнакомец';
    }
  }
}

const inputElement = document.querySelector('input#name-input');
const spanElement = document.querySelector('span#name-output');

const translator = new InputToSpanTranslator(inputElement, spanElement);
inputElement.addEventListener(
  'input',
  translator.InputListener.bind(translator)
);
