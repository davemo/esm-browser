import {count, increment, decrement} from './deps/counter.js';

let message = document.querySelector('#message');
let incButton = document.querySelector('#increment');
let decButton = document.querySelector('#decrement');

const updateUi = function(newCount) {
  message.innerHTML = `
    The count is ${newCount}
  `;
}

incButton.addEventListener('click', function(e) {
  increment();
  updateUi(count);
  console.log('increment', count);
})

decButton.addEventListener('click', function(e) {
  decrement();
  updateUi(count);
  console.log('decrement', count);
})

updateUi(count);





