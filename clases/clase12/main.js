// Sugar synyax
// Nos permiten simplificar el codigo
//1) operador ++

let i = 1;
i = i +1; 
console.log("sin sugar " + i);

// sugar..
i ++;
console.log("sugar " + i);


let aux= 0
while(aux < 5 ) {
    console.log(aux);
    aux ++;
}


// Operador ternario 
// 3 partes si o si, condicion codigo que se ejecuta y el codigo cuando no se ejecuta...

let edadCliente = 8;
if(edadCliente >= 18) {
    console.log("es mayor dejalo pasar");
} else {
    console.log("no puede ingresar");
}

// utilizando ternario
edadCliente >= 18? console.log("Podes entrar"): console.log("no podes entrar")

// el operador ternario ya tiene un return implicito... nos sirve para retornar datos de forma condicional.

let tienePermiso = edadCliente >= 18 ? true: false;
console.log(tienePermiso);


// Simplificacion de if en una sola linea con AND
console.log("bienvenido!")
let nombreCliente = "david";

nombreCliente === "david" && console.log("bienvenido!");

if(nombreCliente === "david") console.log("si es verdad, funciona igual");

//Otro ejemplo:
let nuevoCarrito = [];
nuevoCarrito.length === 0 && console.log("El carrito esta vacio!!!");

//Tambien me retorna valores
let vacio = nuevoCarrito === 0 && "el carrito esta vacio";
console.log(vacio);

// Con OR operador logico
// JS tenemos valores Falsos: falsy, 0, "", null, undefined, NaN.



console.log("logica con OR");
console.log(0 || "cualquier cosa");
console.log(null || "miau");
console.log("" || "otra masss...");


// let nombre = prompt("Ingrese su nombre: ");
// console.log(nombre || "Usuario Invitado")

// OPERADOR Nullish calescing
// Funciona igual que en and y el or pero ejecuta cuando es null o undefined

console.log("Operador Nullish Coalescing");
console.log(0 ?? "nulish");
console.log(null ?? "nulish");
console.log(undefined ?? "nulish");

// ACCESO Condicional a un Objeto.
const cliente = null;
console.log(cliente?.nombre || "El cliente no existe");


/*
        DESESTRUCTURACION DE OBJETOS
*/

const alumno = {
    nombre: "juan",
    apellido: "perez",
    edad: 25,
    curso: "javaScript"
};
// caso var que solo almacene el nombre del alumno
let nombreAlumno = alumno.nombre;
console.log(nombreAlumno);

// 
// let {nombre, apellido, edad, curso} = alumno;
// console.log(nombre, apellido, edad, curso);


// let {nombre, apellido} = alumno;
// console.log(nombre, apellido);

// ALIAS   curso:carrera..... 
let {nombre, apellido, edad, curso:carrera} = alumno;
console.log(nombre, apellido, edad, carrera);

const gato = {
    duenio: "juan",
    raza: "persa",
    edad: 5,
    direccion : {
        calle: "av. siempre viva",
        numero: 123,
        ciudad: "sprinfield"
    }
}

let {duenio, raza, edad:edadGato, direccion:{calle, numero, ciudad}} = gato;
console.log(duenio, raza, edadGato, calle, numero, ciudad)
console.log(calle)