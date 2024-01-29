function validacaoEmail(email) {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email);
}
  
function validarTamanhoCampo(campo, min, max) {
    const tamanho = campo.length;
    return tamanho >= min && tamanho <= max;
}
function validarFormulario() {
    const email = document.forms["form"]["email"].value;
    const senha = document.getElementById('senha').value;
    const usuario = document.getElementById('ipt-user').value;

    if (!validacaoEmail(email)) {
        alert('Por favor, insira um endereço de e-mail válido.');
        return false;
    }
    if (!validarTamanhoCampo(senha, 1, 9)) {
        alert('A senha deve ter entre 1 e 8 caracteres.');
        return false;
    }
    if (!validarTamanhoCampo(usuario, 1, 16)) {
        alert('O usuário deve ter entre 1 e 15 caracteres.');
        document.getElementById('ipt-user').value = "";
    }

    return true; 
}

async function criarConta() {
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const user = document.getElementById('ipt-user').value;

    const requestBody = {
        email: email,
        password: senha,
        username: user,
        photo: null
        
    };
   
    try {
        if (validarFormulario()){
        const response = await fetch('http://localhost:8080/perfil/cadastro', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        });
        if (response.ok) {
            console.log('Conta criada com sucesso!');
        } else {
            const errorMessage = await response.text();
            alert('Erro ao criar conta: ' + errorMessage);
        }

    } }catch (error) {
        console.error('Erro na requisição:', error);
    }
}

