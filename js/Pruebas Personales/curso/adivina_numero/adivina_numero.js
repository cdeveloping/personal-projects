/**
 * Name: Adivina el número
 * Author: Carlos Pascualç
 * mail:cguillermodev@gmail.com
 * Version: 1.0
 * Date: 26/02/2024
 * 
 * Last Update: 26/02/2024
 * Last Version: 1.0
 */

//Declaro tres variables

let aleatorio, usuario, control;

//Aleatorio será el número a adivinar:
aleatorio = Math.random()* 10;
Math.trunc(aleatorio);
//document.write(Math.trunc(aleatorio)); // --> Esto era un comprobación personal

//Indicamos el número de intentos que tiene el usuario
control = 3;

//Pedimos al usuario que introduca un número del 1 al 10
usuario

do {
    if (usuario != aleatorio) {
        usuario = prompt("Por favor introduce un número del 1 al 10");
        control--
    } else {
        
    }
    
} while (control == 0);
if (usuario == aleatorio) {
    document.write('Enhorabuena!!! Has acertado el número secreto');
} else {
    document.write('Lo siento ya no te quedan más intentos, el número secreto era: ', aleatorio);
    
}5
