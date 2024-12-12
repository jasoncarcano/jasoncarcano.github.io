document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-open-button');
  const menuCloseButton = document.getElementById('menu-close-button');
  const navMenu = document.querySelector('.nav-menu');

  menuToggle.addEventListener('click', () => {
    navMenu.classList.add('open');
  });

  menuCloseButton.addEventListener('click', () => {
    navMenu.classList.remove('open');
  });
  
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Thank you for supporting us, we will get back to you as soon as possible');
    form.reset();
  });
});
