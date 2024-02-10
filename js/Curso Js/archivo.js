/**
 * Author: Carlos G. Pascual
 * Curso Js.
 * Date: 07/02/2024
 * ver: 1.0
 */

//document.write("Esto es código externo");

//Variables
/*var nombre;

nombre = "Carlos";

document.write(nombre);*/

/*
let _nombre = "Carlos 2";
document.write(_nombre);
*/
let a = 1;
document.write("El valor de a es en este punto: " + a);
document.write('<br>');
document.write('Vamos a incrementar el valor de a usando ++');
document.write('<br>');
a++;
document.write("El valor de a ahora es: " + a);
document.write('<br>');
document.write('<hr>');

document.write("Vamos a aumentar a en base al valor que introduzcamos");
document.write('<br>');
a+=parseInt(prompt("Introduce un valor para a"));
document.write('El valor de a ahora es: ' + a);
document.write('<hr>');
document.write('<br>');

document.writeln('Vamos a reducir el valor de a usando --');
document.write('<br>');
a--;
document.writeln('El valor de a en este punto es: ' + a);
document.writeln('<hr>')

document.write('Vamos a reducir en 1 el valor de a con -=')
document.write('<br>');
a-=1;
document.write('El valor de a en este punto es: ' + a);


