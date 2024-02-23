/**
 * Name: Condicionales if-else en Js
 * Author: Carlos Pascual
 * Nick: cdeveloping
 * mail: cguillermodev@gmail.com
 * version: 1.0
 * Date: 23/02/2024
 * 
 * Last update: 23/02/2024
 * Last Version: 1.0
 */


let nombre, edad;

nombre = prompt('Introduzca su nombre:');
edad = prompt('Intoduzca su edad: ');
edad = parseInt(edad);

//Validamos la edad del usuario
if (edad >= 18) {
    document.write('Bienvenido al sistema ', nombre);
} else {
    if (edad < 18) {
        document.write('Lo siento ', nombre, ' no se le permite el acceso al sistema, no tiene la edad minima');
    }else {
        document.write('El campo edad no puede estar vacío')

    }
    
}