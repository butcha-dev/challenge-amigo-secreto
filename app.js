// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//  Inicializar array amigos.
let amigos = [];

//  Función para agregar amigos.
function agregarAmigo(){

    //  Capturando valor de entrada
    let ingresoUsuario = document.getElementById("amigo").value;
    console.log(ingresoUsuario);

    if (ingresoUsuario == ""){
        alert('Por favor, ingrese un nombre.');
        return;
    }
    
    amigos.push(ingresoUsuario)
    document.getElementById("amigo").value = "";
    
    console.log(amigos)

}