// DEFINICION DE CONSTANTES INVENTARIO Y DATA PRODUCTOS...
const inventory = [];
let cart = [];
const dataProduct = [
    {
        "id": 0,
        "name":"Chocolate Caliente",
        "description":"Una deliciosa mezcla de chocolate, vainilla y leche, decorada con crema batida y salsa de chocolate.",
        "price":"500",
        "qty":"10",
        "thumbnail":"./assets/img/productos_img/chocolate_caliente.png",
        "thumbnail_datail":"Chocolate Caliente",
        "tags": ["bebida", "caliente"],
    },
    {
        "id": 1,
        "name":"Dulce de leche Latte",
        "description":"Café espresso con dulce de leche, leche al vapor con crema batida y salsa de caramelo.",
        "price":"545",
        "qty":"30",
        "thumbnail":"./assets/img/productos_img/dulce_de_leche_latte.png",
        "thumbnail_datail":"Dulce de leche Latte",
        "tags": ["bebida", "caliente"],
    },{
        "id": 2,
        "name":"Cappuccino",
        "description":"Café espresso, leche vaporizada y abundante espuma de leche.",
        "price":"245",
        "qty":"40",
        "thumbnail":"./assets/img/productos_img/cappuccino.png",
        "thumbnail_datail":"Cappuccino",
        "tags": ["bebida", "caliente"],
    },{
        "id": 3,
        "name":"Youthberry",
        "description":"Una mezcla de té blanco cítrico con toques brillantes de sabor tropical. Con mango, naranja, hibisco y pétalos de rosa.",
        "price":"415",
        "qty":"17",
        "thumbnail":"./assets/img/productos_img/youthberry.png",
        "thumbnail_datail":"Youthberry",
        "tags": ["bebida", "caliente"],
    },
    {
        "id": 4,
        "name":"English Breakfast",
        "description":"Mezcla de tés negros: Assam de la India, Los tés de Assam añaden toques profundos de malta y té negro y un rico aroma a caramelo. ",
        "price":"578",
        "qty":"39",
        "thumbnail":"./assets/img/productos_img/english_breakfast.png",
        "thumbnail_datail":"English Breakfast",
        "tags": ["bebida", "caliente"],
    },
    {
        "id": 5,
        "name":"Dragon Drink",
        "description":"Leche de coco con Mango Dragon Fruit, el sabor de esta fruta similar a mezcla ligeramente dulce entre un kiwi y una pera.",
        "price":"700",
        "qty":"7",
        "thumbnail":"./assets/img/productos_img/dragon_drink.png",
        "thumbnail_datail":"Dragon Drink",
        "tags": ["bebida", "heladas"],
    },
    {
        "id": 6,
        "name":"Caramel Frappuccino",
        "description":"Frappuccino a base de café. Dulce combinación de caramelo, café, leche y hielo, decorado con un remolino de crema batida y caramelo.",
        "price":"380",
        "qty":"70",
        "thumbnail":"./assets/img/productos_img/caramel_frappuccino.png",
        "thumbnail_datail":"Caramel Frappuccino",
        "tags": ["bebida", "frio"],
    } ///////////

]

class Product{
    constructor(id, name, thumbnail_datail, description, thumbnail, price, tags=[], qty, cart_add_qty=0) {
        this.id = id
        this.name = name;
        this.description= description;
        this.price = price;
        this.qty = qty;
        this.thumbnail = thumbnail;
        this.thumbnail_datail = thumbnail_datail;
        this.tags = tags;
        this.cart_add_qty = cart_add_qty
    };
};


// CARGA DE PRODUCTOS EN EL EL INVENTARIO
dataProduct.forEach(product => {

    // INSTANCIA DE NUEVO PRODUCTO ITERADO
    let new_product = new Product(
        product.id,
        product.name, 
        product.thumbnail_datail, 
        product.description, 
        product.thumbnail, 
        product.price, 
        product.tags, 
        product.qty);

    // ALMACEN DE PRODUCTO
    inventory.push(new_product)
})


// AGERGAR PRODUCTOS EN EL DOM
const contentMarketProducts = document.getElementById('market_products')

const showProductsMarket = () => {

    inventory.forEach( product => {

        const card = document.createElement("div");

        card.classList.add("col-12", "col-md-6", "col-lg-4", "col-xxl-2", "mb-4");
        card.innerHTML = `
        <div class="card shadow-lg" id="card_market_product">
            <img src="${product.thumbnail}" class="card-img-top img-producto" alt="${product.thumbnail_datail}">
            <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <div class="badges mt-2 mb-2 ">
                <span class="badge rounded-pill ${product.tags[1] === "caliente" ? "text-bg-warning": "text-bg-info"} ">${product.tags[1]}</span>
                <span class="badge rounded-pill text-bg-primary">${product.tags[0]}</span>
                <span class="badge rounded-pill text-bg-secondary">$ ${product.price}</span>
                <span class="badge rounded-pill ${product.qty > 10 ? "text-bg-success": "text-bg-danger"}">stock: ${product.qty}</span>
            </div>
            <p class="card-text">${product.description}</p>
            <button id="add_cart_id_${product.id}" class="btn btn-primary" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Agregar Producto">+</button>
            <button id="remove_cart_id_${product.id}" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Quitar Producto ">-</button>
            <button id="card-cart" type="button" class="btn btn-light" data-bs-toggle="modal" data-bs-target="#modalResume" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Ir al carrito">
                <img src="./assets/img/food-cart.png" alt="Logo carrito de compras">
            </button>
            <span id="product_card_id_qty_${product.id}" class="badge bg-primary rounded-pill"></span>
            </div>
        </div>
        `
        contentMarketProducts.appendChild(card);

        // CONTROL CARRITO -+
        const addCart = document.getElementById(`add_cart_id_${product.id}`);
        addCart.addEventListener("click", () => {
            addOfCart(product.id);
            renderCart();
        });

        const removeCart = document.getElementById(`remove_cart_id_${product.id}`);
        removeCart.addEventListener("click", () => {
            removeOfCart(product.id);
            renderCart();
        });


    });
}

const addOfCart = (id) => {
    const found_product_in_cart = cart.find(product => product.id === id);
    if (found_product_in_cart) {
        if (found_product_in_cart.qty > found_product_in_cart.cart_add_qty) {
            found_product_in_cart.cart_add_qty++;
            updateCountProduct(found_product_in_cart.id, found_product_in_cart.cart_add_qty)
        }
    
    } else {
        const found_product_in_inventary = inventory.find(product => product.id === id);
        found_product_in_inventary.cart_add_qty++
        cart.push(found_product_in_inventary);
        updateCountProduct(found_product_in_inventary.id, found_product_in_inventary.cart_add_qty)
    }
    updateCountCart();
}

const removeOfCart = (id) => {
    const found_product_in_cart = cart.find(product => product.id === id);
    if (found_product_in_cart) {
        if (found_product_in_cart.cart_add_qty > 0 ) {
            found_product_in_cart.cart_add_qty--;
            updateCountProduct(found_product_in_cart.id, found_product_in_cart.cart_add_qty)

        if (found_product_in_cart.cart_add_qty == 0) {
            let found_product_in_cart_idx = cart.indexOf(found_product_in_cart);
            if (found_product_in_cart_idx >= 0) {
                cart.splice(found_product_in_cart_idx,1)
            }
        }

        }else {
            let found_product_in_cart_idx = cart.indexOf(found_product_in_cart);
            if (found_product_in_cart_idx >= 0) {
                cart.splice(found_product_in_cart_idx,1)
            }
            updateCountProduct(found_product_in_cart.id, 0)
        }
    } 
    updateCountCart();
}

// ACTUALIZACION DE CARRITO DE COMPRAS
const resumeCart = document.getElementById("resume_cart");
const showCart = document.getElementById("show_cart");
const resumeTotalContainer = document.getElementById("resume_total");


showCart.addEventListener("click", () => {
    renderCart();
});


const renderCart = () => {
    let sumTotal = 0;
    resumeCart.innerHTML = "";
    resumeTotalContainer.innerHTML = ` 
        <button class="btn btn-outline-secondary" data-bs-target="#" data-bs-toggle="modal">Seguir de compras</button>
        <button id="hola" class="btn btn-primary" data-bs-target="#modalPay" data-bs-toggle="modal" disabled>Ir a pagar</button>
        ` // MEJORAR PARA NO TENER QUE PASAR TODO ASI EN STRING

        cart.forEach(product => {
            const resumeItem = document.createElement("li");
            resumeItem.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-start");
            resumeItem.innerHTML = `
                    <div class="ms-2 me-auto">
                    <div class="fw-bold">${product.name}</div>
                    <button id="resume_add_cart_id_${product.id}" class="btn btn-primary" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Agregar Producto">+</button>
                    <button id="resume_remove_cart_id_${product.id}" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Quitar Producto ">-</button>
                    </div>
                    <span class="badge bg-primary rounded-pill">${product.cart_add_qty}</span>
                `
                resumeCart.appendChild(resumeItem);
                
            sumTotal = parseInt(product.price * product.cart_add_qty) + parseInt(sumTotal)
    
            if (sumTotal > 0) { // MEJORAR PARA NO TENER QUE PASAR TODO ASI EN STRING
                resumeTotalContainer.innerHTML = `
                <button type="button" class="btn " disabled><span id="resume_total_text">Total: $${sumTotal}</span></button>
                <button class="btn btn-outline-danger" data-bs-target="#modalRemoveValidate" data-bs-toggle="modal">Vaciar Carrito</button>
                <button class="btn btn-primary" data-bs-target="#modalPay" data-bs-toggle="modal">Ir a pagar</button>
                `
            }
    
            //id="clear_cart"

            
            // CONTROL CARRITO -+
            const addCart = document.getElementById(`resume_add_cart_id_${product.id}`);
                addCart.addEventListener("click", () => {
                addOfCart(product.id)
                renderCart();
            });
    
            const removeCart = document.getElementById(`resume_remove_cart_id_${product.id}`);
            removeCart.addEventListener("click", () => {
                removeOfCart(product.id)
                renderCart();
            });
    
            const clearCart = document.getElementById("clear_cart");
            clearCart.addEventListener("click", () => {
                cleanCartProces();
                renderCart();
            });
    

        
    });
};


// VACIAR CARRITO, LIMPIA DISPLAY DE CANTIDAD EN PRODUCTOS Y TOTAL DE ART EN CARRITO
const cleanCartProces = () => {
    cart = [];

    inventory.forEach(product => {
        updateCountProduct(product.id, 0);
        product.cart_add_qty=0;
    })


    updateCountCart();
};

// ACTUALIZAR PANTALLAS
const updateCountCart = () => {
    let coutProducts = 0;
    const countCart = document.getElementById("cart_count");

    cart.forEach(product => {
        coutProducts += parseInt(product.cart_add_qty)
    })
    if (coutProducts > 0 ) {
        countCart.classList.remove("visually-hidden")
        countCart.innerHTML = `${coutProducts}+`
    }else {
        countCart.classList.add("visually-hidden")
    }
};

const updateCountProduct = (id, qty) => {
    const productCardQty = document.getElementById(`product_card_id_qty_${id}`)
    if (qty > 0) {
        productCardQty.innerHTML = qty
    }else {
        productCardQty.innerHTML = ""
    }
}


showProductsMarket();


// persistir carrito > modal Seguro que deseas vaciar carrito......

// buscador.....

// procesar pago... cargar tarjeta----

// pantalla pago ok... y descontar el stock.....


// taer productos por fetch.....

// (libre... ???)
