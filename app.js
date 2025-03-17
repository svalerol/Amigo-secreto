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
