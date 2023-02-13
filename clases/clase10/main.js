// Clase 10 Object Storage

// Storage nos permite guardar datos de forma local en el navegador.
// El navegador nos ofrece dos formas de guardar datos en el storage.


// localStorage almacena los datos de forma indefinia, hasta que el usuario los borre de forma manual

// sessionStorage almacena datos hasta que el usuario cierra el navegador.


// para guardar datos en el localstorage usamos un metodo que se llama setItem(), y lo tenemos que hacer llamando un objeto global llamado localstorage.

//localStorage.setItem();

// Este metodo recibe dos parametros  clave y valor.

//A. almacenar un saludo
localStorage.setItem("saludo", "Hola mundo!");
localStorage.setItem("numero", 123412);
localStorage.setItem("numero", 12);
localStorage.setItem("boolean", true)


let saludo = localStorage.getItem("saludo")
console.log(saludo)

let numero = localStorage.getItem("numero");
console.log(numero, typeof(numero));
console.log(123123);

// cuando recuperamos los datos... nos los retorna en string

// Session storage funcionamiento similar al local storage
sessionStorage.setItem("SaludoNuevo", "hola mundo de nuevo");


//REcupero dato del session storage
let saludoDos = sessionStorage.getItem("SaludoNuevo")
console.log(saludoDos)


sessionStorage.setItem("numero", 123123)
sessionStorage.setItem("bool", false)

// LOCAL ----
// si queremos eliminar dato del localstorage

// localStorage.removeItem("saludo");
// localStorage.clear();

// recorremos con bucle el localstorage utlizamos el metodo key que nos devuelve una lista con la claves del storage.
for (let i = 0; i < localStorage.length; i++) {
    let clave = localStorage.key(i);
    let valor = localStorage.getItem(clave);
    console.log(clave, valor)
}



/* Almacenar objetos en el storage */
// si quiere almacenar un objeto en localstorage al ser un string lo que se almacena entonces debo transformarlo en string

//JSON: Formato de texto utilizado para el intercambio de informacion
// son string con una estructura particular

// convertir un objeto a json
const dav = {
    nombre: "david",
    apellido: "equis",
    edad: 18,
    casado: false
};

// utilizamos el metodo json.stringfy() para convertir json a string
console.log(dav)

const davJson = JSON.stringify(dav)
console.log(davJson)

localStorage.setItem("data_string", davJson)
let recuDataStrign = localStorage.getItem("data_string")
console.log(recuDataStrign)

// para recuperar un json del local storage y convertirlo a objeto otra vez utilizamos JSON.parser()
let converObject = JSON.parse(recuDataStrign)
console.log(converObject)

// ejemplo utilizando local storage para cambiar el modo dark
/* 
1) crear boton que cambie modo de la pag. 
2) almacenamos el modo en el localStorage
3) al recargar recuperamos el modo guardado en el local storage
4) cambiamos el modo la visata de la pag
*/
//        

const btnFondo = document.getElementById("btnFondo")

btnFondo.addEventListener("click", () => {
    console.log("CAMBIAR MODO")

    document.body.classList.toggle("dark") // toggle agrega y quita la clase

    if (document.body.classList.contains("dark")){
        localStorage.setItem("modo", "dark");
    } else {
        localStorage.setItem("modo", "light");
    }
})


const modo = localStorage.getItem("modo")
if (modo === "dark") {
    console.log("entre modo  add DARK");
    document.body.classList.add("dark");
} else {
    console.log("entre modo  remove DARK");
    document.body.classList.remove("dark");
}

// document es el objeto que representa al docmuento html
// body es el elemento que representa al body del documento html
// classlist es una propiedad que nos devuelve una lista de las clases del elemeneto.


// CARITO

class Producto{
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;    
    }
}

const producto1 = new Producto("camisa", 20)
const producto2 = new Producto("pantalon", 2)

const carrito = []

carrito.push(producto1)
carrito.push(producto2)

const carritoJSON = JSON.stringify(carrito)
localStorage.setItem("carrito", carritoJSON)

const carritoRecuperado = localStorage.getItem("carrito")
const carritoObjeto = JSON.parse(carritoRecuperado)
console.log(carritoObjeto)

const contenedor = document.getElementById("contenedor")

carritoObjeto.forEach(element => {
    contenedor.innerHTML += `<div class="caja"> <p>producto ${element.nombre}</p> <p>precio $${element.precio}</p></div>`
});