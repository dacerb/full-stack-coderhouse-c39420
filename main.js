// Segunda pre entrega.. 
/*
    Simulador Inventario de productos
*/

const inventory = [];
class Product{
    constructor(name, price, qty=0) {
        this.name = name;
        this.price = price;
        this.qty = qty;
    };
};

function showMsg(message){
    console.log("---------------------------------------")
    console.log(message)
}

function AddProduct(){
    showMsg("Iniciando alta de producto")
    let name = prompt("Ingrese nombre: ");
    let price = parseInt(prompt("Ingrese precio: "));
    let qty = parseInt(prompt("Ingrese cantidad: "));

    const newProduct = new Product(name, price, qty)
    inventory.push(newProduct)
}

function modifyProduct(){
    showMsg("Iniciando modificación de producto")
}

function deleteProduct(){
    showMsg("Iniciando eliminación de producto")
}

function showAllProduct() {
    showMsg("Listado de productos")
    inventory.forEach( element => {
        console.log(element.name);
    });
}

function generateReport() {
    showMsg("Iniciando generacion de reporte")
}

function menu() {

    loopStatus = true
    let options = [
        "Para salir",
        "Agregar producto", 
        "Modificar producto", 
        "Eliminar producto",
        "Mostrar Productos",
        "Reporte de productos"
    ];
    
    options.forEach((element, idx )=> {
        console.log(`Opción ${idx}, ${element}`);
    });

    let inputValue = parseInt(prompt("Ingrese una de las opciones disponibles mostradas por consola: "))

    switch (inputValue){
        case 0:
            showMsg("Opcion 0: Saliendo del simulador");
            alert("Fin de la simulación")
            loopStatus = false
            break;
        case 1: 
            showMsg("Opcion 1: Alta de producto")
            AddProduct();
            break;
        case 2: 
            showMsg("Opcion 2: Modificación de producto")
            modifyProduct();
            break;
        case 3:
            showMsg("Opcion 2: Baja de producto")
            deleteProduct();
            break;
        case 4:
            showMsg("Opcion 4: Mostrar todos los productos")
            showAllProduct();
            break;
        case 5:
            showMsg("Opcion 5: Generando reporte de productos")
            generateReport();
            break;

        default:
            showMsg("Opcion no valida");
            break;
        
    }

    return loopStatus
};

function runLoop() {

    let loopQty = 0
    do {
        if (loopQty > 0){
            alert("Aceptar para continuar simulando")
        }
        loopQty ++;
        console.clear();
    } while (menu());

    return loopQty 
} 


// Ejecutamos el loop del simulador
console.log(`Se realizaron ${runLoop()} iteracion/s`);