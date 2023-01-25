
// si no implementamos objetos
let nombre = "Samuel";
let apellido = "Tocaimaza";
let edad = 21;
let carrera = "Programacion";
let cuota = true;


// Definiendo un objeto

let alumnoSamuell = {
    nombre: "Samuel",
    apellido: "Tocaimaza",
    edad: 21,
    carrera: "Programacion",
    cuota: true
};

let auto = {
    marca: "ford",
    modelo: "fiesta",
    precio: 3500000,
    color: "negro",
    km: 2000000
};


console.log(alumnoSamuell);
console.log(typeof alumnoSamuell);
console.log(auto);


// Acceder a propiedades de un objeto
console.log(auto.precio)
console.log(auto["precio"])

auto.precio = 6000000;

console.log(auto.precio);


// Objeto modificado con const


const yerba = {
    nombre: "Andresito",
    precio: 500,
    cantidad: 10,

};

console.log(yerba);

// a pesar que el objeto fue declarado con const pudimos modificar valores del objeto.
yerba.precio = 9000;
console.log(yerba);
// esto se debe a que los valores primarios estan siendo referenciados en sus propiedades y lo que modificamos son las propiedades y no la definicion del obejto.

// Funciones constructoras.
function Persona(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;

    this.saludar = function () {
        console.log(`hola!, soy ${this.nombre}`)
        console.log("Mi apellido es: " + this.apellido)
    }
}

// crear un nuevo objeto
const persona1 = new Persona(nombre="David", apellido="equis", edad=50)
const persona2 = new Persona("pepe", "lepepe", 20)
console.log(persona1)
console.log(persona2)


// Metodos y funciones, las funciones son de acceso global y los metodos solo pueden ser invocados por los objetos que las contienen


persona2.saludar();

// Las clases en JS proveen una sintaxis mas clara y simple para crear objetos, son un equivalente al empleo de la funcion constructura y permite 
// tambien definir distintos tipos de metodos.


class Producto{
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    sumaIva() {
        return this.precio * 1.21;
    }
}


const fideos = new Producto("Fideos Marolio", 100);

console.log(fideos)
console.log("El precio de los fideos es de: $"+ fideos.precio + " y con el iva es de: $" + fideos.sumaIva())

// Metodos to upper y lower

let fraseMinuscula = "hola soy minus";
let fraseMayuscula = "HOLA SOY MAYUS"


console.log(fraseMinuscula.toLocaleUpperCase())
console.log(fraseMayuscula.toLocaleLowerCase())


// propiedad length nos devuelve cantidad de caracteres de un string entre otras cosas


console.log(fraseMayuscula.length)
console.log(fraseMayuscula[0].toUpperCase())

// operador in y for in

const homero = {
    nombre: "homero",
    apellido: "simpson",
    edad: 39,
    profesion: "Inspector de seguridad nuclear"
};

// in nos permite saber si un objeto tiene una propiedad o no

console.log("nombre" in homero)
console.log("edad" in homero)
console.log("color" in homero)


// for in, nos permite recorer las propiedades de un objeto

for (let propiedad in homero) {
    console.log(propiedad)
}


for (let propiedad in homero) {
    console.log(propiedad + ": " + homero[propiedad])
}



