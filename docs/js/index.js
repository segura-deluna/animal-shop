/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/modules/test.js
var sum = function sum(a, b) {
  return a * b;
};
;// CONCATENATED MODULE: ./src/js/index.js

console.log(sum(20, 10));
var buttons = document.querySelectorAll('.store__category-button');
var changeActiveBtn = function changeActiveBtn(event) {
  var target = event.target;
  buttons.forEach(function (button) {
    button.classList.remove('store__category-button_active');
  });
  target.classList.add('store__category-button_active');
};
buttons.forEach(function (button) {
  button.addEventListener('click', changeActiveBtn);
});
/******/ })()
;