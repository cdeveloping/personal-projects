/**
 * Name: Operadores lógicos
 * Author: Carlos Pascual.
 * mail: cguillermodev@gmail.com
 * Date: 24/02/2024
 * Version: 1.0
 * 
 * Last update: 24/o4/2o22
 * Last version: 1.0
 */


let valor1, valor2;

let requerido1 = 15;
let requerido2 = 25;

document.write("Vamos a realizar si dos valores son iguales a los requeridos o no mediante el uso de ||");

valor1 = prompt('Por favor introduce el primer valor:');
valor2 = prompt('Por favor introduce el segundo valor:');

document.write('El contenido de valor1 es: ', valor1);
document.write('<br>');
document.write('El contenido de valor2 es: ', valor2);
document.write('<br>')

//Aplicamos el condicional para comprobar si son iguales o no

if (valor1 == requerido1 && valor2 == requerido2) {
    document.write("Los valores son los requeridos");
}else{
    document.write("Algunos de los valores no son los requeridos, lo siento!!");
}

document.write('<br><hr>')

//Vamos a evaluar condiciones mediante el operador ||

document.write('Vamos a evaluar condiciones mendiante el operador ||')
document.write('<br>');

let dia = prompt('Introduce tu día de nacimiento de nacimiento');
let mes = prompt('Introduce tu mes de nacimiento (1,2,3..)');
let ano = prompt('Introduce tu año de nacimiento:');
document.write('<br>');

document.write('La fecha introducida es: ',dia, '/', mes, '/', ano);
document.write('<br>')
if (mes == 1 || mes == 2 || mes == 3) {
    document.write('Perteneces al primer trimestre.')    
}if (mes == 4 || mes == 5 || mes == 6) {
    document.write('Perteneces al segundo trimestre.')
}if (mes == 7 || mes == 8 || mes == 9) {
    document.write('Perteneces al tercer trimestre.')
}else{
    document.write('Perteneces al cuarto trimestre.')
}

