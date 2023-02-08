// eventos
console.log("eventos")
// los eventos son la manera que tenemos en js de controlar las acciones de los usuarios y definir un comportamiento cuando se produzcan.

// como funcionan?  utilizamos una herramienta que se llama manejador de eventos..

// Hay varias formas pero vemos solo 3 formas.




const btn1 = document.getElementById('btn1');

// 1 forma utilizando el metodo AddEventListener

btn1.addEventListener("click", () => {
    console.log("Hola me hiciste click")
});


// el evento click se dispara cuando cliqueamos el mouse sobre un elemento determinado y usamos una funcion flecha para asociar una funcio para ese evento

//2 forma dos utilizando propiedades del nodo

const btn2 = document.getElementById('btn2');

btn2.onclick = () => {
    alert("segunda forma");
};


// 3 forma escribiendo la funcion en el HTML

function jsEnHTML() {
    console.log("ESTOY LLAMANDO A LA FUNCION QUE ESTA EN EL HTML");
};


// Eventos con el Mouse
const divCaja = document.getElementById("caja");

divCaja.onmouseover = () => {
    console.log("ACA / Salio el puntero del elemento");
};

divCaja.onmousemove = () => {
    console.log("pasaste el mouse por la caja");
};

// eventos teclado a partir de la interaccion del usuario con el teclado

const campo_text = document.getElementById("campo_text");
// keydown / up

campo_text.onkeydown = () => {
    console.log("presionate tecla")
}

campo_text.onkeyup = () => {
    console.log("soltaste tecla")
}

// change se activa cuando cambia el valor de un elemento
const texto = document.getElementById("texto");

texto.onchange = () => {
    console.log("cambiaste texto")
}

// evento input: ejecuto una funcion y puedo obtener el valor de un campo de text


texto.addEventListener("input", () => {
    console.log(texto.value)
});

// propiedad valie permite acceder al texto ingresado por el formulario

// evento submit se activa cuando un form es enviado
class Cliente {
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

const arrayCliente = [];
const formulario = document.getElementById('formulario');

formulario.addEventListener("submit", (event) => {
    // event se recibe por parametro para evitar comportamientos por defecto
    event.preventDefault();

    const nombre = document.getElementById("nombre");
    const apellido = document.getElementById("apellido");

    //  creamos un objeto
    const cliente = new Cliente(nombre.value, apellido.value)
    arrayCliente.push(cliente)
    console.log(arrayCliente)

    formulario.reset();
    
})

formulario.res

