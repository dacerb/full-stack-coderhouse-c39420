// DEFINICION DE CONSTANTES INVENTARIO Y DATA PRODUCTOS...
////////////////////////////////////////////////////////////////////////////////////////////////////// 
let inventory_list = [];
let cart_list = [];


/// PROXIMAMENTE DATOS A COLECTAR POR FETCH....
const products_data = [
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

//////////////////////////////////////////////////////////////////////////////////////////////////////







//////////////////////////////////////////////////////////////////////////////////////////////////////  AGERGAR PRODUCTOS EN EL DOM

const container_market_products = document.getElementById('container_market_products')

const show_products_market = () => {

    container_market_products.innerHTML = "";
    inventory_list.forEach( product => {

        const card = generate_card_of_product(product);
        container_market_products.appendChild(card);

        // CONTROL CARRITO -+
        const add = document.getElementById(`add__id_${product.id}`);
        add.addEventListener("click", () => {
            add_to_cart(product.id);
            assemble_cart();
        });

        const remove = document.getElementById(`remove__id_${product.id}`);
        remove.addEventListener("click", () => {
            remove_to_cart(product.id);
            assemble_cart();
        });


    });
}


const generate_card_of_product = (product) => {

    const contronl_enabled = parseInt(product.qty) > 0
    const card = document.createElement("div");
    
    card.innerHTML = "";
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
        ${insert_button(product, contronl_enabled)}
        <button id="card-cart" type="button" class="btn btn-light" data-bs-toggle="modal" data-bs-target="#modalResume" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Ir al carrito">
            <img src="./assets/img/food-cart.png" alt="Logo carrito de compras">
        </button>
        <span id="product_card_id_qty_${product.id}" class="badge bg-primary rounded-pill"></span>
        </div>
    </div>
    `
    return card
};


const insert_button = (product, contronl_enabled) => {

    return `
        <button id="add__id_${product.id}" class="btn btn-primary" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Agregar Producto" ${contronl_enabled ? "enabled": "disabled"}>+</button>
        <button id="remove__id_${product.id}" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Quitar Producto " ${contronl_enabled ? "enabled": "disabled"}>-</button>
    `
}
//////////////////////////////////////////////////////////////////////////////////////////////////////  AGERGAR PRODUCTOS EN EL DOM






////////////////////////////////////////////////////////////////////////////////////////////////////// ABM DE PRODUCTOS
const add_to_cart = (id) => {
    let found_product_in_cart = cart_list.find(product => product.id === id);
    let found_product_in_cart_idx = cart_list.indexOf(found_product_in_cart);

    if (found_product_in_cart) {
        if (found_product_in_cart.qty > found_product_in_cart.cart_add_qty) {
            found_product_in_cart.cart_add_qty++;
            update_count_products(found_product_in_cart.id, found_product_in_cart.cart_add_qty)
        }
    
    } else {
        const found_product_in_inventary = inventory_list.find(product => product.id === id);
        found_product_in_inventary.cart_add_qty++
        cart_list.push(found_product_in_inventary);
        update_count_products(found_product_in_inventary.id, found_product_in_inventary.cart_add_qty)
    }
    save_cart_to_storage(cart_list)
    cart_update_count();
}

const remove_to_cart = (id) => {
    const found_product_in_cart = cart_list.find(product => product.id === id);

    if (found_product_in_cart) {
        if (found_product_in_cart.cart_add_qty > 0 ) {
            found_product_in_cart.cart_add_qty--;
            update_count_products(found_product_in_cart.id, found_product_in_cart.cart_add_qty)

        // verifico si al reducir en uno el producto es 0 para quitarlo de la lista carrito
        check_if_necessary_to_remove(found_product_in_cart);        

        }else {
            let found_product_in_cart_idx = cart_list.indexOf(found_product_in_cart);
            if (found_product_in_cart_idx >= 0) {
                cart_list.splice(found_product_in_cart_idx,1)
            }
            update_count_products(found_product_in_cart.id, 0)
        }
        
    } 
    save_cart_to_storage(cart_list)
    cart_update_count();
}

const check_if_necessary_to_remove = (found_product_in_cart) => {

    if (found_product_in_cart.cart_add_qty == 0) {
        let found_product_in_cart_idx = cart_list.indexOf(found_product_in_cart);
        if (found_product_in_cart_idx >= 0) {
            cart_list.splice(found_product_in_cart_idx,1)
        }
    }
};

// VACIAR CARRITO, LIMPIA DISPLAY DE CANTIDAD EN PRODUCTOS Y TOTAL DE ART EN CARRITO
const cart_clean_process = () => {
    cart_list = [];

    inventory_list.forEach(product => {
        update_count_products(product.id, 0);
        product.cart_add_qty=0;
    })

    save_cart_to_storage(cart_list)
    cart_update_count();
};
////////////////////////////////////////////////////////////////////////////////////////////////////// ABM DE PRODUCTOS






////////////////////////////////////////////////////////////////////////////////////////////////////// DISPLAYS  CARRITO
// ACTUALIZACION DE CARRITO DE COMPRAS
const show_cart = document.getElementById("show_cart");
show_cart.addEventListener("click", () => {
    assemble_cart();
});


// ARMADO DE CARRITO
const assemble_cart = () => {
    const cart_summary = document.getElementById("cart_summary");
    const summary_total_container = document.getElementById("summary_total_container");
    let total_sum = 0;
    cart_summary.innerHTML = "";
    summary_total_container.innerHTML = ` 
        <button class="btn btn-outline-secondary" data-bs-target="#" data-bs-toggle="modal">Seguir de compras</button>
        <button id="hola" class="btn btn-primary" data-bs-target="#modalPay" data-bs-toggle="modal" disabled>Ir a pagar</button>
        `

    cart_list.forEach(product => {
        const summary_item = document.createElement("li");
        summary_item.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-start");
        summary_item.innerHTML = `
                <div class="ms-2 me-auto">
                <div class="fw-bold">${product.name}</div>
                <button id="add_to_cart_id_${product.id}" class="btn btn-primary" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Agregar Producto">+</button>
                <button id="remove_to_cart_id_${product.id}" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Quitar Producto ">-</button>
                </div>
                <span class="badge bg-primary rounded-pill">${product.cart_add_qty}</span>
            `
        cart_summary.appendChild(summary_item);
        total_sum = parseInt(product.price * product.cart_add_qty) + parseInt(total_sum)

        summary_total_container.innerHTML = `
            ${insert_button_total_sum(total_sum)}
            <button class="btn btn-outline-danger" data-bs-target="#modalRemoveValidate" data-bs-toggle="modal">Vaciar Carrito</button>
            <button class="btn btn-primary" data-bs-target="#modalPay" data-bs-toggle="modal">Ir a pagar</button>
            `
    
    // CONTROL CARRITO -+
    const add_to_cart_id_ = document.getElementById(`add_to_cart_id_${product.id}`);
        add_to_cart_id_.addEventListener("click", () => {
        add_to_cart(product.id)
        assemble_cart();
    });

    const remove_to_cart_id_ = document.getElementById(`remove_to_cart_id_${product.id}`);
        remove_to_cart_id_.addEventListener("click", () => {
        remove_to_cart(product.id)
        assemble_cart();
    });

    const clear_cart = document.getElementById("clear_cart");
    clear_cart.addEventListener("click", () => {
        cart_clean_process();
        assemble_cart();
    });
    
        
});
};

const insert_button_total_sum = (total_sum) => {
    return  total_sum > 0 ? `<button type="button" class="btn " disabled><span id="resume_total_text">Total: $${total_sum}</span></button>`: ""
};

// ACTUALIZAR PANTALLAS
const cart_update_count = () => {
    let count_products = 0;
    const cart_count = document.getElementById("cart_count");

    cart_list.forEach(product => {
        count_products += parseInt(product.cart_add_qty)
    })
    if (count_products > 0 ) {
        cart_count.classList.remove("visually-hidden")
        cart_count.innerHTML = `${count_products}+`
    }else {
        cart_count.classList.add("visually-hidden")
    }
};

const update_count_products = (id, qty) => {
    let product_card_qty = document.getElementById(`product_card_id_qty_${id}`)
    if (qty > 0) {
        product_card_qty.innerHTML = qty
    }else {
        product_card_qty.innerHTML = ""
    }
}
////////////////////////////////////////////////////////////////////////////////////////////////////// DISPLAYS  CARRITO




////////////////////////////////////////////////////////////////////////////////////////////////////// PAGOS
const paid_products = document.getElementById("paid_products");
paid_products.addEventListener("click", () => {
    process_payments();
})

const process_payments = () => {

    cart_list.forEach(product_cart => {

        let found_product_in_inventory_list = inventory_list.find(product_invent => product_invent.id === product_cart.id);
        let found_product_in_inventory_list_idx = inventory_list.indexOf(found_product_in_inventory_list);

        let update_product = new Product(
            found_product_in_inventory_list.id,
            found_product_in_inventory_list.name, 
            found_product_in_inventory_list.thumbnail_datail, 
            found_product_in_inventory_list.description, 
            found_product_in_inventory_list.thumbnail, 
            found_product_in_inventory_list.price, 
            found_product_in_inventory_list.tags, 
            parseInt(found_product_in_inventory_list.qty) - parseInt(product_cart.cart_add_qty)
        );

        inventory_list.splice(found_product_in_inventory_list_idx, 1)
        inventory_list.push(update_product)

    });

    cart_clean_process();
    show_products_market();
    assemble_cart();    
}
////////////////////////////////////////////////////////////////////////////////////////////////////// PAGOS

////////////////////////////////////////////////////////////////////////////////////////////////////// STORAGE
const save_cart_to_storage = (cart_list) => {
    localStorage.setItem("storage_cart", JSON.stringify(cart_list));
    
}

const local_storage_get_item = () => {
    if (localStorage.getItem("storage_cart")){
        cart_list = JSON.parse(localStorage.getItem("storage_cart"))
        cart_update_count();
        assemble_cart();
    
        cart_list.forEach(product => {
            update_count_products(product.id, product.cart_add_qty);
        });
    }
    
}
////////////////////////////////////////////////////////////////////////////////////////////////////// STORAGE



// API CALL LOAD PRODUCTS
const json_inventory = "assets/json/inventory.json";

fetch(json_inventory)
    .then(respuesta => respuesta.json())
    .then((datos) => {

        // CARGA DE PRODUCTOS EN EL EL INVENTARIO
        datos.forEach(product => {

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
            inventory_list.push(new_product)
        });

    }).then( () => {
        
        ////////////////////////////////////////////////////////////////////////////////////////////////////// RENDER DE PRODUCTOS
        // DEBE EXISTIR ANTES DE ACTUALIZAR EL CARRITO DESDE EL LOCAL STORAGE
        show_products_market();

        // CARGA DE CARRITO DE COMPRAS 
        local_storage_get_item();
    })
    .catch(error => {
        console.log(error)
    });




/*




    PROXIMO........
    1. buscador por tags..
    3. (agregar librerias...... ???)


*/