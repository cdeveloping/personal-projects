/**
 * Name: Funciones
 * Description: Veremos el uso de diferentes funciones en Js.
 * Author: Carlos Pascual
 * mail: cguillermodev@gmail.com
 * Date: 13/02/2024
 * 
 * Last update: 16/02/2024
 */

let palabra =  'JavaScript'
document.write('La palabra es: ', palabra);
document.write("<br>");
document.write("<hr>");

//Ver tamaño de un texto
document.write("Cantidad de letras: ", palabra.length);
document.write("<br>");
document.write("<hr>");

//Ver caracteres especificos.
document.write('Las primeras 4 letras de mi variable son: ', palabra.slice(0,4));
document.write("<br>");
document.write("<hr>");

//Más caracteres especificos de texto.
document.write('Primeras cuatro letras: ', palabra.substring(0,4));
document.write("<br>");
document.write("<hr>");

//Nueva variable

let saludo = 'Hola Mundo';
document.write("El valor de la variable saludo es: ", saludo);
document.write("<br>");
document.write("<hr>");

//Cambiar valores en un texto
saludo = saludo.replace('Hola', 'Adios');
document.write('El valor de saludo es ahora: ', saludo);
document.write("<br>");
document.write("<hr>");

//Poner en mayúsculas
document.write('Poner todo en mayúsculas: ', palabra.toUpperCase());
document.write("<br>");
document.write("<hr>");

//poner en minusculas
document.write('Poner todo en minusculas: ',palabra.toLowerCase());
document.write("<br>");
document.write("<hr>");

//Unir texto
let palabra2 = 'Curso de: ';
document.write("Unir palabras: ", palabra2.concat(palabra));
document.write("<br>");
document.write("<hr>");

//Acortar espacios entre textos
let palabra3 = '    Hola    ';
document.write(palabra3);
document.write('Este string tiene múltiples espacios aunque no se puede apreciar');
document.write("<br>");
document.write("<hr>");
document.write(palabra3.trimStart());
document.write("<br>");
document.write(palabra3.trimEnd(), " quitando espacios.");
document.write("<br>");
document.write("<hr>");

//Cortar cantidad de carcteres
document.write(palabra.split('Script'));



