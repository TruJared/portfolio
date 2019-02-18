const { $, $$ } = require('./lib/bling');

// change nav color on scroll
window.onscroll = function changeClass() {
  const scrollPosY = window.pageYOffset || 0;
  if (scrollPosY > 150) {
    $('.nav').classList.add('nav-change-color');
  } else if (scrollPosY <= 150) {
    $('.nav').classList.remove('nav-change-color');
  }
};
