/**
 * Funciones con parámetros
 */

//Saltos de linea//
function salto_separador(){
    document.write('<br>');
}
//Fin funcion salto de linea//


let resultado;

function suma(valor1, valor2) {
    resultado = valor1 + valor2;
    alert('Resultado: '+ resultado);
}

suma(8, 3);

//Vamos a ver otra forma de ver 

function suma2(valor3, valor4){
    valor3 = parseInt(prompt("Introduce el primer valor: "));
    valor4 = parseInt(prompt('Introduce el segundo valor: '));
    let resultado2 = valor3 + valor4;
    alert(resultado2);
}
suma2(); //nos devuele la suma de los valores que ha introducido el usuario