/* SWEET ALERT */

const boton = document.getElementById("boton");

boton.addEventListener("click", () => {
    Swal.fire("Hola Mundo");
})

//Swal es un objeto global que tiene un método llamado Fire. 

const botonDos = document.getElementById("botonDos");

botonDos.addEventListener("click", () =>{
    Swal.fire({
        title: "Hola Comisión", 
        text: "Esto es un mensaje",
        icon: "warning", 
        imageUrl: "https://placekitten.com/200/300",
        confirmButtonText: "Aceptar",
        background: "bisque",
        backdrop: "#B7950B"
    })
})

//ELIMINAMOS FIDEOS: 

const botonTres = document.getElementById("botonTres");

let carrito = ["arroz", "fideos", "pan"];
console.log(carrito);
botonTres.addEventListener("click", () => {
    Swal.fire( {
        title: "¿Estas seguro de eliminar los fideos?", 
        icon: "warning", 
        confirmButtonText: "Aceptar", 
        showCancelButton: true, 
        cancelButtonText: "Cancelar"
    }).then((result) => {
        if(result.isConfirmed) {
            carrito = carrito.filter(producto => producto !== "fideos");
            console.log(carrito);
            Swal.fire({
                title:"Producto Eliminado!",
                icon: "success",
                confirmButtonText: "Aceptar"
            })
        }
    })
})


//Tenemos que concatenar un segundo método llamado then(Lo estudiamos la prox clase)

//CREAMOS UN INICIO DE SESIÓN O LOGUIN AHH RELOCOO

const botonCuatro = document.getElementById("botonCuatro");

const usuarioAutorizado = "admin";
const passwordAutorizado = "1234";

botonCuatro.addEventListener("click", () => {
    Swal.fire({
        title: "Inicio de Sesión", 
        html: `<input type = "text" id = "usuario" class = "swal2-input" placeholder = "Usuario">
        <input type = "text" id = "password" class = "swal2-input" placeholder = "Password">`,
        confirmButtonText: "Enviar", 
        showCancelButton: true,
        cancelButtonText: "Cancelar"
    }).then((result) => {
        if(result.isConfirmed) {
            const usuario = document.getElementById("usuario").value;
            const password = document.getElementById("password").value;
            
            //Si quiero enviarte a otra página: 
            if(usuario === usuarioAutorizado && password === passwordAutorizado) {
                window.location.href = "ingreso.html";
            }
        }
    })
})


//TOASTIFY

const botonCinco = document.getElementById("botonCinco");

botonCinco.addEventListener("click", () => {
    Toastify( {
        text: "Producto agregado al carrito",
        duration: 3000, 
        gravity: "top",
        position: "right", 
        destination: "https://www.google.com",
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        }
    }).showToast();
})


//LUXON 

//Librería para trabajar con fechas y horas. (Muy parecido a la clase Date)

//La clase principal de Luxon es DateTime. Para ser más ordenados podemos referenciarla en una variable para facilitar su acceso. 

const DateTime = luxon.DateTime;

//¿Cómo se ven estos objetos?

const elDiaMasImportante =  DateTime.local(2022, 12, 18, 12,00);

console.log(elDiaMasImportante);

const fechaAnioNuevo = DateTime.local(2023, 1, 1, 00, 00);

console.log(fechaAnioNuevo);

//Vemos que nos retorna un formato poco claro, si lo transformar a algo más legible puedo usar el método "toString()"

console.log(fechaAnioNuevo.toString());

//Método Now() que me permite obtener la fecha y hora de este preciso momento. 

const fechaActual = DateTime.now();
console.log("Fecha y hora actual: ");
console.log(fechaActual.toString());


//Puedo crear una fecha pasando parámetros: 

const navidad2023 = DateTime.fromObject(
    {day:25, hour:00, month: 12}
)

console.log("Navidad")
console.log(navidad2023.toString());

//toLocalString() me lo muestra más amigable: 

console.log(fechaActual.toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY));

//Transformación: Me permite hacer cálculos sobre fechas y horas. 

const fechaMasTresDias = fechaActual.plus(
    {days:3}
);

console.log("fecha actual + 3 días: ");
console.log(fechaMasTresDias.toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY));

//Para restar es igual solo que uso minus. 

//La Clase Duration: 

const Duration = luxon.Duration; 

//Podemos crear una duración pasando un objeto con los valores: 

const duracion = Duration.fromObject( {days:3, hours: 5, minutes:30 });

//A la fecha actual le sumo la duración: 

const fechaMasDuracion = fechaActual.plus(duracion);
console.log("Fecha + duración: ");
console.log(fechaMasDuracion.toLocaleString(DateTime.DATETIME_SHORT));