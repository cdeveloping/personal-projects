/**
 * Name: Bucle For-in
 * Author: Carlos Pascual
 * mail: cguillermodev@gmail.com
 * Date: 27/02/2024
 * Version: 1.0
 * 
 * Last Update: 27/02/2024
 * Last Version: 1.0
 */


//Vamos a mostrar datos a través de un bucle for-in

document.write("Vamos a contar las vocales de la palabra murcielago");
document.write('<br>');

let palabra = 'murcielago';
let contador = 0;

for(let i in palabra){
 if(palabra[i] == 'a' || palabra[i] == 'e' ||
 palabra[i] == 'i' || palabra[i] == 'o' || palabra[i] == 'u'){
    contador++;
}
}
document.write('EL número de vocales que contiene múrcielago es: ', contador);