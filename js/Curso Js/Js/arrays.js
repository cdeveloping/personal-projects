/**
 * Name: Arrays en Js.
 * Author: Carlos Pascual.
 * mail: cguillermodev@gmail.com
 * Date: 16/02/2024
 * 
 * Last update: 16/02/2024
 */

//Vamos a crear nuestro primer array.
let numeros = [];
numeros = [15, 80, 650, 50,30, -10];
document.write('Elementos del array números: ', numeros);
document.write('<br>');

//Ver un elemento concreto
document.write('Primer elemento: ', numeros[0]);
document.write('<br>');
document.write('<hr>');

//Mostramos el último elemento
document.write('El último valor del array es: ', numeros[numeros.length -1]);
document.write('<br>');
document.write('<hr>');


//Cambiamos de int a string
let numero = [12,25, 45,80];
document.write('El valor del array número es: ', numero);
document.write('<br>');
document.write('Ahora es un string: ', numero.toString());
document.write('<br>');
document.write('<hr>');



document.write(numero.reverse());




