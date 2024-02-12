/**
 * Author: Carlos Pascual
 * mail: cguillermodev@gmail.com
 * Date: 12/02/2024
 * Vers:1.0
 * Last Update: 12/02/2024
 */

//Declaramos algunas variables para generar textos 

let texto1 = "Hola soy un texto entre comillas dobles";
let texto2 = "Hola soy un texto entre comillas simples";
let texto3 = "Este texto es más largo de lo habitual," + "<br>" +
"lo hemos concatenado de una manera un poco más incomoda de como es la " +
"siguiente manera que vamos a ver."
let texto4 = "Creo que está manera de hacer textos con varias lineas es un poco más \
comoda, ya que la anterior requiere usar o bien signos de concatenación como el + o\
insertar etiquetas 'br' de html para poder hacer el salto de linea."

document.write(texto1);
document.write("<hr>");
document.write('<br>');

document.write(texto2);
document.write("<hr>");
document.write('<br>');

document.write(texto3);
document.write("<hr>");
document.write('<br>');

document.write(texto4);
document.write("<hr>");
document.write('<br>');
