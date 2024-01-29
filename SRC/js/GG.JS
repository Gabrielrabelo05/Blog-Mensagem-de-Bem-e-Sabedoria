const url = "https://jsonplaceholder.typicode.com/posts";

const postsContainer = document.querySelector("#postcotainer") ;
const tituloPost = window.document.getElementById("#titulo-post-h2");
const paragrafoBody = document.querySelector("#body-p");




async function getAllposts(){

    const responce = await fetch(url);
    console.log(responce);

    const data = await responce.json();

    console.log(data);

   
    data.map((post) =>{
        const div = document.createElement("div");
        const titulo = document.createElement("h2");

        titulo.innerText= post.titulo;

        div.appendChild(titulo);
        
        postsContainer.appendChild(div)


    }
    )


}
getAllposts();
