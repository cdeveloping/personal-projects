/**
 * Author: Carlos Pacual
 * mail:cguillermodev@gmail.com
 * date initial: 10/02/2024
 * Vers: 1.0 (10/02/2024)
 * Vers update:
 * 
 * 
 */

/*
Aunque en Js no es necesario el finalizar la instrucción con ; es una práctica recomendable de buen desarrollador.
Tampoco es bueno llenar de comentarios el código, en este caso al ser para mi uso personal y de aprendizaje no hay mayor problema
pero no es una buena práctica.
*/

let saludo = ("Vamos a comenzar a declarar variables con Js");
document.write(saludo);

//Esto es una comentario y lo usare para explicar el texto que va a continuación

//Voy a decarlar varias variables que mostaré por pantalla más adelante, no las voy a inicializar.

let nombre, apellido, edad, telefono, mail, direccion;

document.write('Estas variables las declaro asigandoles un valor ahora:');
document.write('<br>');
nombre = 'Carlos';
apellido = 'Pascual';
edad = '45';
telefono = 34000000000;
mail = 'cguillermodev@gmail.com';
direccion = 'c/ Mi Casa 21';

document.write("Vamos a mostrar por pantalla la información de las diferentes variables que hemos inicializado:");
document.write('<br>');
document.write("El nombre del usuario es: " + nombre);
document.write('<br>');
document.write("El apellido del usuario es: " + apellido);
document.write('<br>');
document.write('La edad del usuario es: ' + edad);
document.write('<br>');
document.write("El teléfono del usuario es: " + telefono);
document.write('<br>');
document.write("El mail del usuario es: " + mail);
document.write('<br>');
document.write('la dirección del usuario es: '+ direccion);
document.write('<br>');

//Vamos a introducir datos vía usuario a través de ventana emergente

document.write("Vamos a solicitar los datos directamente al usuario, al hacer esto las variables se actualizan con los datos introducidos en la ventana emergente.");
nombre = prompt('Introduzca su nombre');
apellido = prompt('Introduzca su apellido...');
edad = prompt('Introduzca su edad');
telefono = prompt('Introduzca su teléfono...');
mail = prompt('Introduzca su email');
direccion = prompt('Introduzca su dirección');

document.write("Vamos a mostrar por pantalla los datos que hemos actualizado vía pantalla: Carlo");
document.write('<br>');
document.write("El nombre del usuario es: " + nombre);
document.write('<br>');
document.write("El apellido del usuario es: " + apellido);
document.write('<br>');
document.write('La edad del usuario es: ' + edad);
document.write('<br>');
document.write("El teléfono del usuario es: " + telefono);
document.write('<br>');
document.write("El mail del usuario es: " + mail);
document.write('<br>');
document.write('la dirección del usuario es: '+ direccion);
document.write('<br>');
