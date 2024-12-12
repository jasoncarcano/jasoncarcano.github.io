document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.querySelector('.nav-menu');

  menuToggle.addEventLister('click', () => {
    navMenu.classList.toggle('open');
  });
  
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Thank you for supporting us, we will get back to you as soon as possible');
    contactForm.reset();
  });
});
