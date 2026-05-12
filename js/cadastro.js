function onCadastroSubmit(event) {
    event.preventDefault();

    const nome = document.getElementById('nomeInput').value.trim();
    const email = document.getElementById('emailInput').value.trim();
    const dataNascimento = document.getElementById('dataNascimentoInput').value;
    const genero = document.querySelector('input[name="genero"]:checked');
    const pais = document.getElementById('paisSelect').value;

    if (!nome || !email || !dataNascimento || !genero || !pais) {
        alert('Preencha todos os campos obrigatórios.');
        return false;
    }

    const interesses = [];
    document.querySelectorAll('input[name="interesses"]:checked').forEach(checkbox => {
        interesses.push(checkbox.value);
    });

    const cadastroInfos = {
        nome: nome,
        email: email,
        dataNascimento: dataNascimento,
        genero: genero.value,
        interesses: interesses,
        pais: pais,
        dataCadastro: new Date().toLocaleDateString('pt-BR')
    };

    localStorage.setItem("cadastroInfos", JSON.stringify(cadastroInfos));
    alert('Cadastro realizado com sucesso!');
    
    return false;
}

document.addEventListener('DOMContentLoaded', () => {
    const themeSelect = document.getElementById('themeSelect');
    const body = document.body;

    const savedTheme = localStorage.getItem('selectedTheme') || 'default';
    themeSelect.value = savedTheme;
    
    if (savedTheme === 'custom') {
        body.classList.add('custom-theme');
    } else {
        body.classList.remove('custom-theme');
    }

    themeSelect.addEventListener('change', (event) => {
        const selectedTheme = event.target.value;
        localStorage.setItem('selectedTheme', selectedTheme);

        if (selectedTheme === 'custom') {
            body.classList.add('custom-theme');
        } else {
            body.classList.remove('custom-theme');
        }
    });
});
