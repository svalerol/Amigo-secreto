// Array para almacenar los nombres

let amigos = [];

// Función para agregar amigos

function agregarAmigo(){
    let inputAmigo = document.getElementById ('amigo');
    let nombreAmigo = inputAmigo.value.trim();
    console.log('nombreAmigo');

    if(nombreAmigo === ""){
        alert("Por favor, inserte un nombre");
        return;
    }

    if (amigos.includes(nombreAmigo)) {
        alert(`El nombre ${nombreAmigo} ya se encuentra en la lista`);
        return;
    }

    amigos.push(nombreAmigo);
    inputAmigo.value ="";

    actualizarLista();
}

// Función para actualizar la lista de amigos

function actualizarLista() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML ="";

    for(let i=0; i <amigos.length; i++) {
        let li=document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }

}

// Función que selecciona un amigo y muestra el resultado en la pantalla

function sortearAmigo () {
    if (amigos.length === 0) {
        alert ("No hay personas para iniciar el sorteo. Debes agregar un nombre primero");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    let resultado = document.getElementById ('resultado');
    resultado.innerHTML = `El amigo ganador es: <strong> ${amigoSorteado}</strong>`;
}