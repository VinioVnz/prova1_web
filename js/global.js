document.addEventListener('DOMContentLoaded', () => {
  const footer = document.querySelector('.footer');
  const isLoginPage = window.location.pathname.includes('login.html');
  if (isLoginPage || document.body.scrollHeight <= window.innerHeight) {
    footer.classList.add('visible');
  } else {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        footer.classList.add('visible');
      } else {
        footer.classList.remove('visible');
      }
    });
  }
});