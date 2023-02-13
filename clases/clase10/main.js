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