function cleanForm(){
    let formulario = document.getElementById('form');
    formulario.reset();
}
function redirectUrl(){
    window.location.href = "index.html"
}

let boton = document.getElementById("enviar");
boton.addEventListener("click", onClick);

function onClick(event){
    event.preventDefault();
    this.style.backgroundColor = "black"
    console.log("click...");
    console.log(event);

    const mensaje= {
        comercio: document.getElementById('comercio').value,
        titular: document.getElementById('titular').value,
        celular: document.getElementById('celular').value
    }
    console.log(mensaje);

    fetch("https://jsonplaceholder.typicode.com/posts", {

    })
}
