// async function fazerLogin() {
//     const username = document.getElementById('username').value;
//     const password = document.getElementById('password').value;
    

//     const url = "http://localhost:8080/perfil";
//     const data = { username, password };
//    
//     const response = await fetch(url, {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//     });

//     const result = await response.json();

//     if (result.status === 'ok') {
//         alert('Login bem-sucedido');
//     } else {
//         alert('Usuário ou senha incorretos');
//     }
// }
async function fazerLogin() {
    const username = document.getElementById('usuario-log').value;
    const password = document.getElementById('senha-log').value;
    
    
    const url = `http://localhost:8080/perfil?username=${username}&password=${password}`;

    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const result = await response.json();
    
    if (result.status === 'ok') {
        console.log('Login bem-sucedido');
    } else {
        console.log('Usuário ou senha incorretos');
    }
}
