function login(login, password) {
    if (login != null && password != null) {
        const userInfos = {
            login: login,
            isLoggedIn: true
        }
        localStorage.setItem("userInfos", JSON.stringify(userInfos));
        return true;
    }
    return false;
}

function onLoginSubmit(event) {
    event.preventDefault();

    const loginValue = document.getElementById('loginInput').value.trim();
    const passwordValue = document.getElementById('passwordInput').value.trim();

    if (!loginValue || !passwordValue) {
        alert('Preencha os campos de login e senha.');
        return false;
    }

    if (login(loginValue, passwordValue)) {
        window.location.href = 'home.html';
    } else {
        alert('Login ou senha inválidos!');
    }

    return false;
}