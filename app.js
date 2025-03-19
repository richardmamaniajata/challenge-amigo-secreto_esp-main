// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigo = []; // Array para guardar los nombres de los amigos

function agregarAmigo() {
    // Obtener el valor del campo de texto
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value;

    // Verificar si el campo está vacío
    if (!nombreAmigo) {
        alert("Debes ingresar un nombre");
        return;
    }
    
    // Agregar el nuevo amigo al array
    amigo.push(nombreAmigo);

    // Limpiar el campo de texto y devolver el foco al input
    inputAmigo.value = "";
    inputAmigo.focus();

    // Llamar a la función para renderizar la lista de amigos
    renderizarAmigos();
}

function renderizarAmigos() {
    // Obtener el elemento 'ul' donde se mostrará la lista de amigos
    let listaAmigos = document.getElementById("listaAmigos");

    // Limpiar el contenido de la lista antes de renderizar los nuevos amigos
    listaAmigos.innerHTML = "";

    // Recorrer el array de amigos y crear un 'li' por cada nombre
    for (let i = 0; i < amigo.length; i++) {
        let item = document.createElement("li");  // Crear un nuevo elemento 'li'
        item.textContent = amigo[i];  // Establecer el nombre del amigo como texto
        listaAmigos.appendChild(item); // Añadir el 'li' a la lista
    }
}
function sortearAmigo (){
    if(amigo.length === 0){
        alert("no hay amigo para sortear");
        return;
    }
    let amigoSorteado = amigo[Math.floor(Math.random() * amigo.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;

    let limpiarLista = document.getElementById("listaAmigos");
    limpiarLista.innerHTML = "";
}