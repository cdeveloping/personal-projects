/**
 * Name: Switch - case
 * Author: Carlos Pascual
 * mail: cguillermodev@gmail.com   
 * date: 24/02/2024
 * Version: 1.0
 * 
 * Last update: 24/02/2024
 * Last Version: 1.0
 */

let valor;

valor = parseInt(prompt('Introduce un valor entre 1 y 3'));

switch (valor) {
    case 1:
        document.write('Ha introducido el valor 1.');
        break;
    case 2:
        document.write('Ha introducido el valor 2.');
        break;
    case 3:
        document.write('Ha introducido el valor 3.');
        break;

    default:
        document.write('Ha introducido un valor no permitido: ',valor);
        break;
}