/**
 * Función con return en Js
 */

function suma(a,b){
    return a + b;
}

document.write(suma(30, 60));
document.write('<br>');

// ==================================================== //

//Vamos a elegir un color

function elegirColor(){
    valor = parseInt(prompt('Elige un número del 1 al 3: '));
    switch (valor) {
        case 1:
            return 'ROJO';
            break;
            
        case 2:
            return 'Amarillo';
            break;
        case 3: 
            return 'Verde';
            break;
    
        default:
           return 'Valor no permitido por el sistema';
    }
}

alert(elegirColor());