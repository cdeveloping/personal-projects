/**
 * Funciones en Js
 */

//Funciones declarativas.



function saludar (){
    document.write("Esta es mi primera función");
}
saludar();
document.write('<br>');

document.write('Vamos a crear una función en la que usemos una variable');


function saludo(){
    let textoUsuario = prompt('Introduce un texto');
    alert(textoUsuario);
}
saludo();
