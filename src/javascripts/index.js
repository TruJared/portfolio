window.addEventListener('touchstart', () => {
  const landingPageLink = document.querySelectorAll('.landing-page__link');
  landingPageLink.forEach(e => (e.style.filter = 'blur(0)'));
});

// window.addEventListener('touchend', () => {
//   const landingPageLink = document.querySelectorAll('.landing-page__link');
//   landingPageLink.forEach(e => (e.style.filter = 'blur(1px)'));
// });
