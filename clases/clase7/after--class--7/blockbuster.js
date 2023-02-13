/** BLOCKBUSTER **/

//1) Creando clases 

class Cliente {
    constructor(nombre, edad, membresia) {
        this.nombre = nombre; 
        this.edad = edad; 
        this.membresia = membresia;
    }
}

class Pelicula {
    constructor(nombre, genero) {
        this.nombre = nombre; 
        this.genero = genero;
    }
}

class Alquiler {
    constructor(pelicula, cliente, costo, fecha) {
        this.pelicula = pelicula;
        this.cliente = cliente;
        this.costo = Math.round(costo);
        this.fecha = fecha || new Date();
    }
}

//Si el cliente tiene membresía GOLD puede demorar 3 días en devolver la película. 

//Si el cliente tiene membresía NORMAL puede demorar 2 días en devolver la película. 

const clienteUno = new Cliente("Juan", 30, "Gold");
const clienteDos = new Cliente("Pedro", 20, "Normal");

const arrayClientes = [clienteUno, clienteDos];


///////////////////////////////////////////////


const peliculaUno = new Pelicula("El Señor de los Anillos", "Fantasia");
const peliculaDos = new Pelicula("El Padrino", "Drama");

const arrayPeliculas = [ peliculaUno, peliculaDos];

/////////////////////////////////////////////////

const alquilerUno = new Alquiler(peliculaUno, clienteUno, 3.80);
const alquilerDos = new Alquiler(peliculaDos, clienteDos, 3.28, new Date("February 1, 2023 10:00"));

const arrayAlquileres = [alquilerUno, alquilerDos];


//////////////////////////////////////////////////////


//Función para saber si hay peliculas que deben devolverse hoy: 

function diasAlquilerSegunMembresia(cliente) {
    if(cliente.membresia == "Gold") {
        return 3;
    } else {
        return 2;
    }
}

function peliculasDevolverHoy (alquiler){
    let fechaAlquiler = alquiler.fecha;
    let fechaActual = new Date();
    let diasAlquiler = diasAlquilerSegunMembresia(alquiler.cliente);
    fechaAlquiler.setDate(fechaAlquiler.getDate() + diasAlquiler);

    if(fechaAlquiler < fechaActual) {
        return `La Pelicula ${alquiler.pelicula.nombre} debe devolverse hoy, su costo es de ${alquiler.costo}`;
    } else {
        return `La Pelicula ${alquiler.pelicula.nombre} no debe devolverse hoy, su costo es de: $ ${alquiler.costo}`;
    }
}

console.log(peliculasDevolverHoy(alquilerUno));
console.log(peliculasDevolverHoy(alquilerDos));