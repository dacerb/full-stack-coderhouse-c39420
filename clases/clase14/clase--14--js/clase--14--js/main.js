/** PROGRAMACIÓN SINCRÓNICA **/

console.group("Programación Sincrónica");
console.log("Primer tarea");
console.log("Segunda tarea");
console.groupEnd("--")


/** PROGRAMACIÓN ASINCRÓNICA **/

console.group("Programación Asincrónica");

setTimeout(() => {
    console.log("Tarea A");
}, 1000)

setTimeout(() => {
    console.log("Tarea B");
}, 2000)

//Ejemplo utilizando setTimeout: modificamos el color de fondo del body después de 3 segundos. 

setTimeout(() => {
    document.body.style.backgroundColor = "bisque";
}, 3000)

//Puedo practicar esto en un Array: 

for (let letra of "Hola Mundo") {
    setTimeout(() => {
        console.log(letra);
    }, 4000)
}


//Set Interval: 
//Tiene la misma sintaxis que setTiemeout pero la unidad de tiempo es un intervalo para la repetición de la función asociada. 

setInterval(() => {
    console.log("Tic");
}, 1000)

//Cortamos con clearInterval(); 

let contador = 0;

const interval = setInterval(() => {
    console.log("Tuki");
    contador++;

    if (contador == 5) {
        clearInterval(interval);
    }
}, 2000)

//Ejemplo de uso de setInterval para cambiar el color de fondo del body cada 3 segundillos. Utilizando un array de colores: 

const colores = ["red", "green", "blue", "yellow", "orange", "purple", "pink", "brown", "black", "white", "bisque"];

let i = 0;

const intervalDos = setInterval(() => {
    document.body.style.backgroundColor = colores[i];
    i++;

    if (i == colores.length) {
        clearInterval(intervalDos);
    }
}, 3000)

/** FALSAS PROMESAS  **/

//¿Qué es una promesa? 
//Una promesa en JS es un objeto que representa un evento a futuro. 
//Una promesa puede ser resuelta o rechazada. 

/*SINTAXIS DE LAS PROMESAS*/

const falsasPromesas = () => {
    return new Promise((resolve, reject) => {
        //resolve = se ejecuta cuando la promesa se cumple ( me compraron el karting a motor)
        //reject = se ejecuta cuando la promesa no se cumple (ir a psicologo por años)
    })
}

console.log(falsasPromesas());

//Las promesas pueden tener 3 estados: 

//pending: esta pendiente porque todavía no hay conexión. 
//fulfilled: cuando realizamos la conexión. 
//rejected: cuando se nos rechaza la conexión. 

/*

Pending: pendiente ---> Me acabás de prometer algo pero todavía no sé si vas a cumplir o me vas a cagar (?

Fullfiled: completada ---> Fantástico! Sos una persona de palabra y cumpliste con tu promesa

Rejected: rechazada ----> No te quiero ver nunca más en mi vida, gato mentiroso sin palabra

*/

//Practicamos consumiendo una base de datos de usuarios (todo ficción! todo local). 

class Usuario {
    constructor(user, password) {
        this.user = user;
        this.password = password;
    }
}

const usuario1 = new Usuario("usuarioUno", 1234);
const usuario2 = new Usuario("usuarioDos", 1234);
const admin = new Usuario("admin", 4321);

const usuarios = [usuario1, usuario2, admin];

const solicitarUsuario = (estado) => {
    return new Promise((resuelto, rechazado) => {
        if (estado == true) {
            resuelto(usuarios);
        } else {
            rechazado("No te quiero ver nunca más en mi vida, gato mentiroso sin palabra RATA");
        }
    })
}

console.log(solicitarUsuario(true));

//Then y Catch.

//Then = se ejecuta cuando la promesa se cumple. 
//Catch = se ejecuta cuando la promesa no se cumple. 

/*
EXPLICACIÓN DE LUCAS: 

Promesa.then ---> se cumplió, ENTONCES hacé esto o se arma (?

Promesa.catch ---> si sos incapaz de cumplirlo (no se cumplió, obviamente), hacé esto, rata


*/

//Ejemplo con then y catch tomando el login de usuarios. 

solicitarUsuario(true)
    .then( (usuarios) => {
        console.table(usuarios);
    })
    .catch( (error) => {
        console.log(error);
    })
    .finally( () => {
        console.log("Se termino señores, es el fin");
    })