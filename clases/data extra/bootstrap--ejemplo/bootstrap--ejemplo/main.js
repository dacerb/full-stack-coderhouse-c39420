/** EJEMPLO DOM - CARDS BOOTSTRAP **/

class Producto {
    constructor(nombre, precio, url) {
        this.nombre = nombre;
        this.precio = precio;
        this.url = url;
    }
}

const yerba = new Producto("Yerba", 500, "img/yerba.webp");
const tomate = new Producto("Tomate", 200, "img/tomate.jpg");
const fideos = new Producto("Fideos", 120, "img/fideos.webp");

const arrayProductos = [yerba, tomate, fideos];

const contenedorProductos = document.getElementById("contenedorProductos");


arrayProductos.forEach(producto => {
    const div = document.createElement("div");
    div.className = "col-xl-4";
    div.innerHTML = `<div class="card" style="width: 18rem;">
                        <img src="${producto.url}" class="card-img-top" alt="${producto.nombre}">
                        <div class="card-body">
                            <h5 class="card-title"> Nombre: ${producto.nombre} </h5>
                            <p class="card-text"> Precio: ${producto.precio} </p>
                            <button class="btn btn-primary">Agregar al carrito</button>
                        </div>
                    </div>`
    
    contenedorProductos.appendChild(div);
})
