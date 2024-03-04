/**
 * Creación de clases y objetos en Js (POO)
 */

class Persona{ 
    //Declaramos atrtibutos
    nombre = "Carlos";
    apellido = "Pascual";
    direccion = "mi casa 25";
    telefono = 976000000;
    email =  "cguillermodev@gmail.com"

    /**
     * Vamos a crear un metódo de clase, que le dará funcionalidad
     * a los atributos que hemos declarado anteriormente.
     */

    trabajar(){
        return 'Trabajo creando software a medida como freelance';
    }

    estudiar(){
        return 'He aprendido mucho gracias a internet y todo lo que te ofrece.';
    }




}

//Creamos un objeto para mi clase
const carlos = new Persona(); //Hemos definido un objeto para mi clase
const kiran = new Persona();
document.write(carlos.nombre + ' ' + carlos.apellido);
document.write('<br>');
document.write(carlos.trabajar());
document.write('<br>');
document.write('Kiran ' + kiran.apellido);
document.write('<br>');