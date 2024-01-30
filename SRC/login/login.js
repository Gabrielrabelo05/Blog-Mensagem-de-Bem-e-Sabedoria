
const username = document.getElementById('usuario-log');
const password = document.getElementById('senha-log');

function validarForm() {
    if (username.value === "") {
        alert("Endereço de email inválido");
        return false;
    }
    if (password.value.length < 1 || password.value.length > 8) {
        alert("A senha precisa ter entre 1 e 8 caracteres");
        return false;
    }
    return true;
}

async function auth() {
    if (validarForm()) {
        const user = {
            "username": username.value,
            "password": password.value
        };

        try {
            const response = await authUser(user);
            if (response.status === 404) {
                alert(response.message);
            }
            if (response.status === 401) {
                alert(response.message);
            }
            console.log('yedfdue3d');
        } 
        catch (error) {
            console.log(error);
        }
    }
}

document.querySelector("form").onsubmit = (event) => {
    event.preventDefault();
    auth();
};

async function authUser(obj) {
    
    const header = {
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        method: "POST",
        body: JSON.stringify(obj)
    };
    
    const response = await fetch('http://localhost:8080/perfil/login', header);
    console.log("test")
    const data = await response.json();
    return data;
}


