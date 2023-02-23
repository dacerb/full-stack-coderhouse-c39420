

/*

1. inventario
2. listar productos
3. agregar al carrito
4. quitar del carrito
5. vaciar carrito

6. calular total compra
7. finalizar compra
8. guardar carrito en el local storage

*/

// DEFINICION DE CONSTANTES INVENTARIO Y DATA PRODUCTOS...
const inventory = [];
const dataProduct = [
    {
        "name":"Chocolate Caliente",
        "description":"Una deliciosa mezcla de chocolate, vainilla y leche, decorada con crema batida y salsa de chocolate.",
        "price":"500",
        "qty":"10",
        "thumbnail":"./assets/img/productos_img/chocolate_caliente.png",
        "thumbnail_datail":"Chocolate Caliente",
        "tags": ["bebida", "caliente"],
    },
    {
        "name":"Dulce de leche Latte",
        "description":"Café espresso con dulce de leche, leche al vapor con crema batida y salsa de caramelo.",
        "price":"545",
        "qty":"30",
        "thumbnail":"./assets/img/productos_img/dulce_de_leche_latte.png",
        "thumbnail_datail":"Dulce de leche Latte",
        "tags": ["bebida", "caliente"],
    },{
        "name":"Cappuccino",
        "description":"Café espresso, leche vaporizada y abundante espuma de leche.",
        "price":"245",
        "qty":"40",
        "thumbnail":"./assets/img/productos_img/cappuccino.png",
        "thumbnail_datail":"Cappuccino",
        "tags": ["bebida", "caliente"],
    },{
        "name":"Youthberry",
        "description":"Una mezcla de té blanco cítrico con toques brillantes de sabor tropical. Con mango, naranja, hibisco y pétalos de rosa.",
        "price":"415",
        "qty":"17",
        "thumbnail":"./assets/img/productos_img/youthberry.png",
        "thumbnail_datail":"Youthberry",
        "tags": ["bebida", "caliente"],
    },
    {
        "name":"English Breakfast",
        "description":"Mezcla de tés negros: Assam de la India, Los tés de Assam añaden toques profundos de malta y té negro y un rico aroma a caramelo. ",
        "price":"578",
        "qty":"39",
        "thumbnail":"./assets/img/productos_img/english_breakfast.png",
        "thumbnail_datail":"English Breakfast",
        "tags": ["bebida", "caliente"],
    },
    {
        "name":"Dragon Drink",
        "description":"Leche de coco con Mango Dragon Fruit, el sabor de esta fruta similar a mezcla ligeramente dulce entre un kiwi y una pera.",
        "price":"700",
        "qty":"7",
        "thumbnail":"./assets/img/productos_img/dragon_drink.png",
        "thumbnail_datail":"Dragon Drink",
        "tags": ["bebida", "heladas"],
    },
    {
        "name":"Caramel Frappuccino",
        "description":"Frappuccino a base de café. Dulce combinación de caramelo, café, leche y hielo, decorado con un remolino de crema batida y caramelo.",
        "price":"380",
        "qty":"70",
        "thumbnail":"./assets/img/productos_img/caramel_frappuccino.png",
        "thumbnail_datail":"Caramel Frappuccino",
        "tags": ["bebida", "frio"],
    }

]


class Product{
    constructor(name, thumbnail_datail, description, thumbnail, price, tags=[], qty=0) {
        this.name = name;
        this.description= description;
        this.price = price;
        this.qty = qty;
        this.thumbnail = thumbnail;
        this.thumbnail_datail = thumbnail_datail;
        this.tags = tags;
    };
};


// CARGA DE PRODUCTOS EN EL EL INVENTARIO
dataProduct.forEach(product => {

    // INSTANCIA DE NUEVO PRODUCTO ITERADO
    let new_product = new Product(product.name, product.thumbnail_datail, product.description, product.thumbnail, product.price, product.tags, product.qty);

    // ALMACEN DE PRODUCTO
    inventory.push(new_product)
})


// AGERGAR PRODUCTOS EN EL DOM
const contentMarketProducts = document.getElementById('market_products')


const showProductsMarket = () => {

    inventory.forEach( product => {

        console.log(product)

        const card = document.createElement("div");
        card.classList.add("col-12", "col-md-6", "col-lg-4", "col-xxl-2", "mb-4");
        card.innerHTML = `
        <div class="card shadow-lg" id="card_market_product">
            <img src="${product.thumbnail}" class="card-img-top img-producto" alt="${product.thumbnail_datail}">
            <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <div class="badges mt-2 mb-2 ">
                <span class="badge rounded-pill text-bg-warning">caliente</span>
                <span class="badge rounded-pill text-bg-primary">bebida</span>
            </div>
            <p class="card-text">${product.description}</p>
            <button id="add" class="btn btn-primary" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Agregar Producto">+</button>
            <button id="remove" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Quitar Producto ">-</button>
            <button id="card-cart" type="button" class="btn btn-light" data-bs-toggle="modal" data-bs-target="#modalResume" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Ir al carrito">
                <img src="./assets/img/food-cart.png" alt="Logo carrito de compras">
            </button>
            </div>
        </div>
        `
        contentMarketProducts.appendChild(card);

    
    });
}


showProductsMarket();

/*



        
*/