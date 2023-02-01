// Clase 7 Funciones de orden superior
// son aquellas funciones que pueden recibir por parametros una funcion o retornar una funcion

/*
Ejemplo

function estoEsUnaFuncion( funcion()) {
    return function()
}
*/


// JS incluye de forma nativa varias funciones de orden superior
// hay metodos de busqueda y transformacion que nos permite operar sobre los arrays

// vamos a trabajar estos metodos con array de objetos

class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

const fideos = new Producto("fideo", 100);
const harina = new Producto("Harina", 250);
const gaseosa = new Producto("Coca cola", 500);
const pan = new Producto("Pan", 120);

const arrayProductos = [fideos, harina, gaseosa, pan];
console.log("Productos en Stock: ");
console.log(arrayProductos);

//1) forEach: recorre el array y ejecuta una funcion por cada elemento

console.log("ForEach: ")
arrayProductos.forEach((producto) => {
    console.log("El producto es: ", producto)
});

console.log('----  Productos Nombre')
// como producto es unico parametro no necesitamos del parentesis, y las llaves porque lo dejamos en una misma lineas
arrayProductos.forEach(producto => console.log(producto.nombre));

//2) Find: busca un elemento y retorna el primer elemento que cumpla con una condicion particular
const buscado = arrayProductos.find(producto => producto.nombre === "Coca aaaaaaa");
console.log(buscado);

// find retorna el primer elemento que cumple con la condicion, si no lo encuentra retorna undefined, en caso de que exista dos veces o mas retorna el primero

//3 Filter: recive una funcion comparadora y retorna un nuevo array con los elementos que cumplen la condicion.
const arrayProductos200 = arrayProductos.filter(producto => producto.precio <= 200);
console.log(arrayProductos200);

// si no hay concidencias retorna un array vacio.

//4 Some: funciona igual que el filter con la diferencia que retorna true o false si encuentra o no el elemento
const hayFideos = arrayProductos.some(producto => producto.nombre === "fideo" )
console.log(hayFideos)

//5) MAP: nos permite transformar elementos de un array creando un nuevo array con los elementos transformados.
// Ejemplo crearmos un array de producto pero ahora agregamos el iva 

const arrayProductosIva = arrayProductos.map(producto => 
    {
        return {
            nombre: producto.nombre,
            precio: producto.precio,
            precio_con_iva: producto.precio * 1.21
        };
    }
);
console.log(arrayProductosIva)


const arrayProductosIva2 = arrayProductos.map(producto => 
    {   
        producto["IVA"] = producto.precio * 1.21
        return producto;
    }
);
console.log(arrayProductosIva2)


//6 REduce este metodo me permite obtener un unico valor despues de iterar sobre un array 
// ejemplo el total de un carrito de comprars

// podemos trabjar con dos parametros, un acumulador y el elemento a operar.
//Tabien podemos color el valor inicial del acumulador en este caso es un 0, pero podriamos inicar el acumulador en otro valor.
let totalPrecio = arrayProductos.reduce((acumulador, producto) => acumulador + producto.precio, 0)

console.log("Reduce: ")
console.log(totalPrecio)

//7) Sort: me permite ordenar un array segun un criterio  que definamos, (Metodo destructivo)
// ejemolo a: ordeno de forma menor a mayot


const numeros = [99,23,51,6761,123,3]
console.log(numeros)

numeros.sort((a,b) => a - b)
console.log(numeros)

numeros.sort((a,b) => b - a)
console.log(numeros)

// EJEMPLO C: ordeno precios en un array de objetos

arrayProductos.sort((a,b) => a.precio - b.precio)
console.log("metodo sort con array de objetos" )
console.log(arrayProductos)


// ejemplo con letras
// --> Online

