/**
 * Name: Bucle  for en Js
 * Author: Carlos Pascual
 * mail:cguillermodev@gmail.com
 * Date: 25/02/2024
 * Version: 1.0
 * 
 * Last Update:
 * Last Version: 1.0
 */

//Creamos el bucle básico

for(let i = 1; i <= 6; i++){
    document.write('El valor de i es: ', i);
    document.write('<br>');
}

document.write('<hr>');

// A continuación vamos a recorrer un Array usando el bucle forç
document.write('Vamos a recorrer un array usando un bucle for');
document.write('<br>');
const nombres = ['Carlos', 'Pedro', 'José', 'Antonio', 'Raúl'];
document.write('El valor del array nombres es: ', nombres);
document.write('<br>');
document.write('Ahora lo vamos a recorrer usando un bucle for.');
document.write('<br>');
for(i = 0; i < nombres.length; i++){
    document.write('El valor de nombres en la posición ', i, ' es: ',nombres[i]);
    document.write('<br>');
}

