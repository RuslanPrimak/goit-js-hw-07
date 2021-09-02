'use strict';

class SpanCounter {
  constructor(span) {
    this._span = span;
    this._counter = Number(span.textContent);
  }

  updateSpanValue() {
    this._span.textContent = this._counter;
  }

  increment() {
    this._counter += 1;
    this.updateSpanValue();
  }

  decrement() {
    this._counter -= 1;
    this.updateSpanValue();
  }
}

const spanElement = document.querySelector('#counter #value');

const counter = new SpanCounter(spanElement);

const incrementBtn = document.querySelector(
  '#counter button[data-action="increment"]'
);

const decrementBtn = document.querySelector(
  '#counter button[data-action="decrement"]'
);

incrementBtn.addEventListener('click', counter.increment.bind(counter));
decrementBtn.addEventListener('click', counter.decrement.bind(counter));
