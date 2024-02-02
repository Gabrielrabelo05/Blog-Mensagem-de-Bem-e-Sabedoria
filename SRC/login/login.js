function fazerLogin(username, password) {
    const apiUrl = 'http://localhost:8080/perfil/login';

    const dados = {
        username: username,
        password: password
    };

    const configuracao = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    };

    fetch(apiUrl, configuracao)
        .then(function (resposta) {
            if (resposta.ok) {
                alert("Login bem-sucedido");
            } else {
                return resposta.text().then(function (mensagemErro) {
                    alert(`Erro no login: ${mensagemErro}`);
                });
            }
        })
        .catch(function (error) {
            console.error("Erro ao realizar o login:", error);
        });
}

let form = document.querySelector("#sect-login");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let login = document.querySelector("#usuario-log").value;
    let senha = document.querySelector("#senha-log").value;

    fazerLogin(login, senha);
});


