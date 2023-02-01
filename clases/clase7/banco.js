// ejercicio parecido a pre entrega.

// Solido -> general -> especifico
console.log('Hola')
class Cliente { 
    constructor(nombre, apellido, dni, saldo){
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.saldo = saldo;
    }
}

const samuel = new Cliente("bob", "Marley", 121313133, 20000);
const juan = new Cliente("juan", "marks", 191313133, 1500);
const maria = new Cliente("maria", "gomez", 341313133, 26000);
const pedro = new Cliente("pedro", "ramis", 241313133, 3610);

const arrayClientes = [samuel, juan, maria, pedro]
console.log(arrayClientes)

// funcion con el menu de opciones
function menu () {
    alert("Bienvenido al Banco Corder")
    let opcion = parseInt("ingrese una opcion: \n1) Alta cliente, \n2) Baja cliente, \n3) Modificacion cliente, \n4) Saldo de cliente, \n5) Salir!")
    return opcion;
}

function altaCliente() {
    let nombre = prompt("ingrese nombre: ");
    let apellido = prompt("ingrese apellido: ");
    let dni = prompt("ingrese dni: ");
    let saldo = parseInt(prompt("ingrese saldo: " ));

    const newCliente = new Cliente(nombre, apellido, dni, saldo);
    arrayClientes.push(newCliente);
    console.log(arrayClientes);
}

function bajaCliente(){
    let dni = parseInt(prompt("ingrese el dni del cliente: "));

    let cliente = arrayClientes.find( cliente => cliente.dni === dni );
    let indice = arrayClientes.indexOf(cliente);

    arrayClientes.splice(indice);
    console.log(arrayClientes);
}

function modificacionCliente () {
    let dni = parseInt(prompt("ingrese el dni del cliente: ");
    let cliente = arrayClientes.find( cliente => cliente.dni === dni );
    let indice = arrayClientes.indexOf(cliente);
    let nombre = prompt("ingrese nombre: ");
    let apellido = prompt("ingrese apellido: ");
    let saldo = parseInt(prompt("ingrese saldo: " ));

    const modCliente = new Cliente(nombre, apellido, dni, saldo);
    arrayClientes.splice(indice, 1, modCliente);
    console.log(arrayClientes);
}

function consultarCleinte() {
    let dni = parseInt(prompt("ingrese el dni del cliente: ");
    let cliente = arrayClientes.find( cliente => cliente.dni === dni );
    console.log(cliente);
}

function salir() {
    alert("gracias por utilizar el banco coder!!")
}


// ejecutar prg

// let opcion = menu();

switch (opcion) {
    case 1: 
        altaCliente();
        break;
    case 2: 
        bajaCliente();
        break;
    case 3: 
        modificacionCliente();
        break;
    case 4: 
        consultarCleinte();
        break;
    case 5: 
        salir();
        break;
    default:
        alert("no es un opcion no displonible")
        break;
}