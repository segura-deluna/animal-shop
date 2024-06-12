import { sum } from './modules/test.js';

console.log(sum(20, 10));

const buttons = document.querySelectorAll('.store__category-button');
const changeActiveBtn = (event) => {
  const target = event.target;

  buttons.forEach((button) => {
    button.classList.remove('store__category-button_active');
  });
  target.classList.add('store__category-button_active');
};

buttons.forEach((button) => {
  button.addEventListener('click', changeActiveBtn);
});
