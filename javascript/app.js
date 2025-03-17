// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const listaAmigos = [];

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function agregarAmigo(){
    let inputAmigos = document.getElementById('amigo').value;

   if(!listaAmigos.includes(inputAmigos)){ 
    if(inputAmigos !== ""){
        listaAmigos.push(inputAmigos);
        actualizarLista();
        inputAmigos.value = "";
        limpiarTexto();
    } else{
        alert("Ingresa un nombre válido");
    }
    console.log(listaAmigos);
    } else{
        alert("Nombre repetido en la lista, ingresa uno diferente");
        limpiarTexto();
    }
}
function actualizarLista(){
    asignarTextoElemento('ul', "Lista de nombres agregados");
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    listaAmigos.forEach((inputAmigos, index) => {
        let li = document.createElement("li");
        li.textContent = inputAmigos;
        lista.appendChild(li);
    });
}

function sortearAmigo(){
    let amigoSorteado = Math.floor(Math.random()*listaAmigos.length);
    let nombreAmigo = listaAmigos[amigoSorteado]; 
    console.log(listaAmigos[amigoSorteado]);

    asignarTextoElemento('ul', `El amigo secreto es: ${nombreAmigo}!!`);
}

function limpiarTexto(){
    document.querySelector('#amigo').value = "";
}
