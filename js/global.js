function isLoggedIn() {
    return localStorage.getItem("userInfos") !== null;
}

document.addEventListener('DOMContentLoaded', () => {
  const footer = document.querySelector('.footer');
  const isLoginPage = window.location.pathname.includes('login.html');
  const profilePic = document.querySelector('.header img[alt="Perfil"]');
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

  const authStatus = document.getElementById('auth-status');
  if (authStatus) {
    if (isLoggedIn()) {
      const userInfos = JSON.parse(localStorage.getItem("userInfos"));
      authStatus.textContent = userInfos.login;
    } else {
      authStatus.textContent = 'Usuário não autenticado';
      profilePic.style.display = 'none';
    }
  }
});