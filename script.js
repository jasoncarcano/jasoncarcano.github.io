document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Thank you for supporting us, we will get back to you as soon as possible');
    form.reset();
  });
});
