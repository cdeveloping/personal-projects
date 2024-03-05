/**
 * Name: Clase Date en Js.
 * Author: Carlos Pascual
 * mail: cguillermodev@gmail.com
 * Date: 05/03/2024
 * Vers. 1.0
 * 
 * Last Update: 05/03/2024
 * Last Version: 1.0
 */

const fechaactual = new Date();
document.write(fechaactual);//Nos muestra Fecha y hora actual
document.write('<br>');
let fecha = new Date();
document.write('Hoy estamos a: ', fecha.getDate());
document.write('<br>');
document.write('Del mes: ', fecha.getMonth()+1);
document.write('<br>');
document.write('Y el año: ', fecha.getFullYear());
document.write('<br>');
document.write('La hora actual es: ', fecha.getHours());
document.write('<br>');
document.write('Y los minutos: ', fecha.getMinutes());