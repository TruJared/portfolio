const { $ } = require('./lib/bling');

// change nav color on scroll
window.onscroll = function changeClass() {
  const scrollPosY = window.pageYOffset || 0;
  if (scrollPosY > 150) {
    $('.nav').classList.add('nav-change-color');
  } else if (scrollPosY <= 150) {
    $('.nav').classList.remove('nav-change-color');
  }
};

// mobile nav animations
// todo refactor //
$('.mobile-nav__toggler').on('click', () => {
  $('.mobile-nav').style.width = $('.mobile-nav').style.width === '100vw' ? 0 : '100vw';

  $('.mobile-nav__toggler--icon').style.transform = $('.mobile-nav__toggler--icon').style.transform === 'rotate(-360deg)'
    ? 'rotate(0)'
    : 'rotate(-360deg)';

  $('.mobile-nav__image').style.marginRight = $('.mobile-nav__image').style.marginRight === '0px' || 0 ? '-200px' : '0px';

  $('.mobile-nav__list').style.marginRight = $('.mobile-nav__list').style.marginRight === '0px' || 0 ? '-200px' : '0px';
});
