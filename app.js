// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//  Inicializar array amigos.
let amigos = [];

//  Función para agregar amigos.
function agregarAmigo(){

    //  Capturando valor de entrada
    let ingresoUsuario = document.getElementById("amigo").value;
    console.log(ingresoUsuario);

    //  Validación
    if (ingresoUsuario == ""){
        alert('Por favor, ingrese un nombre.');
        return;
    }

    //  Agregar amigo al array y limpiar.
    amigos.push(ingresoUsuario)
    document.getElementById("amigo").value = "";
    
    console.log(amigos)
    recorrerAmigos();

}

//  Recorrer array y mostrar la lista.
function recorrerAmigos(){
    let lista = document.getElementById("listaAmigos");

    //  Limpiar lista antes de actualizar.
    lista.innerHTML = "";
    
    for (let i = 0; i < amigos.length; i++) {
        //  Crear un nuevo li.
        let li = document.createElement("li");
        //  Asignar contenido al li, del array.
        li.textContent = amigos[i];
        //  Agregar list item a la unorder list (li - ul)
        lista.appendChild(li);
    }
}

//  Selecciona de manera aleatorio uno de los nombres en el array amigos.
function sortearAmigo(){

    //  Validar que halla al menos un amigo.
    if (amigos.length === 0){
        alert('Agrega un amigo antes de sortear.')
        return;
    }

    //  Indice aleatorio.
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    console.log(indiceAleatorio);

    //  Nombre aleatorio de la lista.
    let nombreSorteado = amigos[indiceAleatorio];

    let lista = document.getElementById("resultado");

    //Vaciamos lista.
    lista.innerHTML = "";

    let li = document.createElement("li");
    li.textContent = nombreSorteado;
    lista.appendChild(li);
}