
// Plantillas literales
// hasta el momento si queremos concatenar datos haciamos esto:


let cliente = "Ricky Ford";
let montoCompra = 1000000000;


let mensaje = cliente + " realizo una compra por $ "+ montoCompra;
console.log(mensaje);


// usando template string
let mensajePlantillaLiteral = `El cliente ${cliente}, realizo una compra por $ ${montoCompra}`;
console.log(mensajePlantillaLiteral)


// Accediendo al DOM hay 5 formas

//1 nombre del id  getelementsbygetElementByIdtagname
const titulo = document.getElementById("titulo-principal");
console.log(titulo);

//2 nombre de etiqueta getElementsByClassName
const nombres = document.getElementsByClassName('nombre')
console.log(nombres)

//3 htmlcollection lo puedo trabajar como un array, consultando por los tags
const meses = document.getElementsByTagName("li")

console.log(meses)

for (let mes of meses) {
    console.log(mes)
}

//4  querySelector este metodo nos permite seleccionar nodos con la misma sintaxis que usamos en css
const queryNombres = document.querySelector(".nombre");
console.log(queryNombres);

// me trae el primer elemento que coincida

//5 queryselectorall

const querySelectorAll = document.querySelectorAll(".nombre")
console.log(querySelectorAll)



// ---------------

// innerText permite acceder al contenido textual del elemento por medil del dom
titulo.innerText = "modificamos el titulo con JS"



// ------ constante div para manejar el contenido del contenedor
const divContenedor = document.getElementById("div-contenedor");

divContenedor.innerHTML = `<div> 
                                <p>nombre</p>
                                <p>precio</p>
                                <button> agregar al carrito</button>

                            </div>`

// ClassName  permite agregar nombre de clase a un nodo o etiqueta

titulo.className = "estilo_rojo";


// agregamos nodos
const contenedorNodos = document.getElementById("contenedor-nodos");

const parrafo = document.createElement("p");
parrafo.innerText = "Este es un parrafo agregadao desde JS"
parrafo.className = "estilo_rojo parrafin"

contenedorNodos.appendChild(parrafo)

// remove() se eliminan los nodos
contenedorNodos.remove(parrafo)



// EJEMPLO CARRITO


class Producto{
    constructor(nombre, precio, url){
        this.nombre = nombre;
        this.precio = precio;
        this.url = url;
    }
}

const yerba = new Producto("yerba", 500,   "https://www.w3schools.com/images/w3schools_green.jpg")
const tomate = new Producto("tomate", 200, "https://www.w3schools.com/images/w3schools_green.jpg")
const aceite = new Producto("aceite", 600, "https://www.w3schools.com/images/w3schools_green.jpg")



const arrayProductos = [yerba, tomate, aceite]
console.log(arrayProductos)

const contenedorProductos = document.getElementById("contenedor-productos")

arrayProductos.forEach(element => {
    console.log(element)

    const div = document.createElement("div");
    div.className = "caja"
    div.innerHTML = `<div>
                        <ul>
                            <li>${element.nombre}</li>
                            <li>${element.precio}</li>
                            <li><img src="${element.url}" alt=""></li>
                        </ul> 
                        <button>agregar al carrito </button>  
                    </div>`

    
    contenedorProductos.appendChild(div)


});