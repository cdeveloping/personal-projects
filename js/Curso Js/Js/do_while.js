let valor;


do {
    valor = parseInt(prompt("Introduce el valor 1 para salir: "));
    document.write("El usuario ingreso el valor: ", valor);  
    document.write('<br>')  
} while (valor != 1);


document.write('<hr><br>');

//Vamos a crear un sistema "login" ficticio

let usuario, clave, control;

control = 0;
usuario = prompt('Introduce tu usuario:');
clave = prompt('Introduce tu contraseña:');

//Creamos el do while para la estructura de control
/*
do {
    if (clave != 1234) {
        document.write('Usuario o contraseña no validos\n',
        'Por favor intentelo nuevamente....');
        control = 0;
    } else {
        control = 1;
        
    }
} while (control != 1);
document.write('Acceso autorizado.... puede continuar.')
*/
document.write('<hr><br>');

//vamos a rizar más el rizo 

let user, pass, controlador, intentos;

intentos = 2;
controlador = 1

user = prompt('Introduce tu usario por favor...');
pass = prompt('Introduce tu contraseña...');

do {
    if (user != 'Carlos' && pass != 1234){
    document.write('Acceso no autorizado, revise las credenciales...')
    controlador = 1;
    intentos-- 
}
} while (controlador !=1);
document.write('Acceso autorizado, bienvenid@');