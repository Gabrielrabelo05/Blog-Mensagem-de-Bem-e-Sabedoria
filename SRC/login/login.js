// async function fazerLogin() {
//     const username = document.getElementById('username').value;
//     const password = document.getElementById('password').value;
    

//     const url = "http://localhost:8080/perfil";
//     const data = { username, password };
   
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
// async function fazerLogin() {
//     const username = document.getElementById('usuario-log').value;
//     const password = document.getElementById('senha-log').value;
//     console.log(username)
    
    // const url = `http://localhost:8080/perfil?username=${username}&password=${password}`;
//     // const url = "http://localhost:8080/perfil";

//     const response = await fetch(url, {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     });

//     const result = await response.json();
    
//     if (result.status === 'ok') {
//         console.log('Login bem-sucedido');
//     } else {
//         console.log('Usuário ou senha incorretos');
//     }
// }

const username = document.getElementById('username').value;
const password = document.getElementById('password').value;

function validarForm() {
    if (username.value == "") {
        alert("endereço de email invalido")
        return false
    }
    if (password.value, 1, 9) {
        alert("A senha precisa ter entre 1 e 8 caracteres")
        return false
    }
    return true
}
async function auth(){
    if(validarForm()){
        const user = {
            "dataSearchName" : username.value,
            "dataSearchPassword" : password.value
        }
            const respo = await authUser(user)
            .then(promise => {
                if(promise.status == 404) alert(promise.message);
                if(promise.status == 401) alert(promise.message)

                console.log(promise);          
            }) 
    }
}
async function authUser(obj){
    const header =
    { 
        headers: { "Content-Type": "application/json", 
        Accept: "application/json" },
        method: "POST",
        body : JSON.stringify(obj)
    }
        const enviar = await fetch('http://localhost:8080/perfil/login',header).then(promise => promise.json())
        return enviar
}