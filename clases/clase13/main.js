// CLASE 13 Librerias...


// sweetalert libreria para generar alertas.... 



const show_sweetalert = document.getElementById('show_sweetalert')
show_sweetalert.addEventListener("click", () => {
    console.log("hola");
    Swal.fire({
        title: 'Error!',
        text: 'Do you want to continue',
        icon: 'warning',
        imageUrl: 'https://ca-times.brightspotcdn.com/dims4/default/83dc849/2147483647/strip/true/crop/2048x1108+0+0/resize/1200x649!/format/webp/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F12%2Fa5%2F79e097ccf62312d18a025f22ce48%2Fhoyla-recuento-11-cosas-aman-gatos-top-001',
        confirmButtonText: 'Aceptar',
        background: "black",
        backdrop: "blue"
      }).then((result) => {
        if(result.isConfirmed) {
            console.log("SE HIZO CLICK EN ACEPTAR")
            Swal.fire({
                title: 'TODO OK BOOM!!!',
                confirmButtonText: 'cerrar',
            }).then((result) => {
                if(result.isConfirmed) {
                    console.log("CHAU")
                }
            })
        }
      })
})


const login_btn = document.getElementById('login_btn')
const usuario_AUT = "uno"
const passAUT = "uno"

login_btn.addEventListener("click", () => {
    Swal.fire({
        title: "inicio de sesion",
        html: `
        <input id='usuario' class="swal2-input" type="text" placeholder="username">
        <input id='password' class="swal2-input" type="password" placeholder="password">
        `,
        confirmButtonText: "Enviar",
        showCancelButton: true,
        cancelButtonText: "Cancelar"
    }).then((result) => {
        if(result.isConfirmed) {
            const usuario = document.getElementById("usuario").value;
            const password = document.getElementById("password").value;
            
            Swal.fire({
                title: "datos enviados",
                icon: "success",
                confirmButtonText: "aceptar"
            })
            
            if(usuario === usuario_AUT && password === passAUT) {
                window.location.href = "ingreso.html"
            }
        }
    })
})

// TOAS para mandar flash de msj

// luxon para manejar fecha...

const DateTime = luxon.DateTime

