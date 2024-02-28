/**
 * Name: Bucle Break-continue
 * Author: Carlos Pascual
 * mail: cguillermodev@gmail.com
 * Date: 27/02/2024
 * Version: 1.0ç
 * 
 * Last update: 27/02/2024
 * last version: 1.0
 */
/** 
let palabra = 'JavaScript';
let resultado ='';
for(let i in palabra){
    if(palabra[i] == 'a'){
        continue;
    }else {
        resultado += palabra[f];
    }
}
document.write(resultado);
*/

let palabra = 'murcielago'
let contador =''

for(let i in palabra){
    if(
        palabra[i] == 'a' || palabra[i] == 'e' || palabra[i] == 'i' ||
        palabra[i] == 'o' || palabra[i] == 'u'){
            continue;
        }else{
            contador += palabra[i]
        }
}
document.write(contador)
