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



function loadProductList() {

    const dataProduct = [
        {
            "name": "tv",
            "price": 100000,
            "qty": 1
        },
        {
            "name": "parlante",
            "price": 103,
            "qty": 105
        },
        {
            "name": "control",
            "price": 50,
            "qty": 2000
        },
        {
            "name": "notebook",
            "price": 50000,
            "qty": 100
        },
        {
            "name": "lampra",
            "price": 10000,
            "qty": 15
        },
        {
            "name": "ventilador",
            "price": 7500,
            "qty": 50
        },
        {
            "name": "cocina",
            "price": 25000,
            "qty": 9
        },
        {
            "name": "totadora",
            "price": 15000,
            "qty": 87
        },
        {
            "name": "tablet",
            "price": 20000,
            "qty": 19
        },
        {
            "name": "telefono",
            "price": 260000,
            "qty": 11
        },
        {
            "name": "camara",
            "price": 19000,
            "qty": 20
        },
        {
            "name": "monitor",
            "price": 17520,
            "qty": 16
        }

    ]

    dataProduct.forEach(element => {
        console.log(`load......... ${element.name}`)

        let loadNewProduct = new Product(element.name, element.price, element.qty);
        inventory.push(loadNewProduct)

    })


    showMsg("Se agregaron productos")
    showMsg("")

}

function showMsg(message){
    console.log("---------------------------------------")
    console.log(message)
}

function findProduct() {
    showMsg("Iniciando busqueda de producto")
    let findProductName = prompt("Ingrese el nombre del producto: ")
    const foundProduct = inventory.find(product => product.name === findProductName);
    

    if (foundProduct){
        showMsg(foundProduct)
    }else {
        showMsg("No fue posible encontrar el producto con el valor " + findProductName)
    }
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
    let findProductName = prompt("Ingrese el nombre del producto: ");
    let foundProduct = inventory.find(product => product.name === findProductName)
    let idxFoundProduct = inventory.indexOf(foundProduct)

    showMsg(`${foundProduct.name}, idx ${idxFoundProduct}`)

    if (idxFoundProduct >= 0 ) {
        let newName = prompt("Nuevo nombre: ", foundProduct.name)
        let newPrice = prompt("Nuevo precio: ", foundProduct.price)
        let newQty = prompt("Nuevo cantidad: ", foundProduct.qty)

        let modifiedProduct = new Product(newName, newPrice, newQty)

        inventory.splice(idxFoundProduct, 1, modifiedProduct)
        showMsg("Se modifico el producto " + modifiedProduct.name)
    } else {
        showMsg("No es posible realizar la modificacion ya que no se encontro el indice del producto.")
    }
    


}

function deleteProduct(){
    showMsg("Iniciando eliminación de producto")

    let findProductName = prompt("ingrese el nombre del producto a eliminar: ")
    let foundProduct = inventory.find(product => product.name === findProductName)

    let foundIdxProduct = inventory.indexOf(foundProduct)
    if (foundIdxProduct >= 0){
        inventory.splice(foundIdxProduct, 1)
        showMsg("Se elimino producto "+ foundProduct.name)
    }else {
        showMsg("No se encontro el producto a eliminar")
    }
    
}

function showAllProduct() {
    showMsg("Listado de productos")
    inventory.forEach( element => {
        console.log(element.name);
    });
}

function averagePrice(){
    showMsg("Iniciando generacion promedio de precio")
    
    let countPrice = 0
    let qtyProducts = inventory.length
    console.log(qtyProducts)
    
    inventory.forEach(product => {
        countPrice += product.price
    })

    let avgPrice = Math.round(countPrice/qtyProducts)
    const inventoryAvgPriceBelow = inventory.filter(producto => producto.price < avgPrice);
    const inventoryAvgPriceAbove = inventory.filter(producto => producto.price > avgPrice);
    const inventoryAvgPriceMid = inventory.filter(producto => producto.price === avgPrice);

    showMsg('Productos por debajo del promedio')
    inventoryAvgPriceBelow.forEach(product => {
        console.log(`Nombre: ${product.name}, Precio: ${product.price}`)
    })
    showMsg('Productos por arriba del promedio')
    inventoryAvgPriceAbove.forEach(product => {
        console.log(`Nombre: ${product.name}, Precio: ${product.price}`)
    })
    showMsg('Productos iguales del promedio')
    inventoryAvgPriceMid.forEach(product => {
        console.log(`Nombre: ${product.name}, Precio: ${product.price}`)
    })
    console.log(`Promedio ${avgPrice}, cantidad de productos diferentes ${qtyProducts}, total ${countPrice}`)
}

function belowMinStock() {
    showMsg("Iniciando generacion de reporte producto por debajo del stock minimo")
    let minStock = parseInt(prompt("Ingrese el minimo del stock para filtrar productos que no cumplan: "))
    const inventoryMinStock = inventory.filter(producto => producto.qty < minStock);
    
    inventoryMinStock.forEach(product => {
        console.log(`Nombre: ${product.name}, Stock: ${product.qty}`)
    })
}

function generateReport() {
    showMsg("Iniciando generacion de reporte")

    options = [
        "Promedio de precios",
        "Productos por debajo del stock"
    ]

    options.forEach((element, idx )=> {
        console.log(`Opción ${idx}, ${element}`);
    });

    let reportType = parseInt(prompt("Ingrese valor"))

    switch (reportType){
        

    case 0: 
        showMsg("Opcion 1: Promedio de Precios");
        averagePrice();
        break;
    case 1:
        showMsg("Opcion 2: Productos por debajo del Stock");
        belowMinStock();
        break;
    default:
        showMsg("Opcion incorrecta") 
        break
    }
}

function menu(loopqty) {

    loopStatus = true
    let options = [
        "Para salir",
        "Agregar producto", 
        "Modificar producto", 
        "Eliminar producto",
        "Mostrar Productos",
        "Buscar Producto",
        "Reporte de productos",
        "Limpiar consola",
    ];

    if (loopqty <= 1) {
        options.forEach((element, idx )=> {
            console.log(`Opción ${idx}, ${element}`);
        });  
    }  

    let inputValue = parseInt(prompt("Ingrese una de las opciones disponibles mostradas por consola: IMPORTANTE:  0) para salir y 7) para listar el menu"))

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
            showMsg("Opcion 6: Buscar producto")
            findProduct();
            break;
        case 6:
            showMsg("Opcion 6: Generando reporte de productos")
            generateReport();
            break;
        case 7:
            showMsg("Opcion 7: limpiar consola")
            console.clear();
            options.forEach((element, idx )=> {
                console.log(`Opción ${idx}, ${element}`);
            });   
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

        loopQty ++;
    } while (menu(loopQty));

    return loopQty 
} 




// Esperamos que el HTML sea cargado para ejecutar JS
window.addEventListener("load", function() {

    // se carga lista de producto para evitar tener que cargar datos por defecto.
    loadProductList();
    

    // Ejecutamos el loop del simulador
    console.log(`Se realizaron ${runLoop()} iteracion/s`);
});