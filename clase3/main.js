

// Si iterar sobre algo varias veces
console.log("1");
console.log("2");
console.log("3");
console.log("4");
console.log("5");
console.log("6");


// Ciclo For

for(let i = 0; i < 7; i++) {
    console.log(`${i}`)
}

console.log("PAR")

for(let i = 0; i < 7; i = i + 2) {

    console.log(`${i}`)
}



// Solicito clave hsta que la ingrese correctamente.
console.log('Ejemplo E')

let number_pin = 12343;
let login 
for(let i = 0; i <2; i++) {

    let password = parseInt(prompt('Ingrese su contraseña: '));

    if(number_pin === password) {
        console.log("Bienvenido!!!!");
        login = true
        break;

    } else {
        console.log('La constraseña ingresada no es correcta!!');
        login = false

    }

}

if  (!login) {
    alert("No lograste identificarte.");
}


// --------------------------

console.log('Ejemplo F');

console.log("forma");
for(let i = 0; i <= 6; i++) {
    if (!Boolean(i % 2)) {
        continue;
    }
    console.log(i);
}

console.log("otra forma");
for(let i = 0; i <= 6; i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log(i);
}

// -------------------------

console.log('Ejemplo 6');

let nombre = prompt("Ingrese su nombre: (para salir escribi salir)")

while ( nombre != "salir") {
    console.log(nombre);
    nombre = prompt("Ingrese su nombre: (para salir escribi salir)")
}

console.log("saliste while");


console.log('Ejemplo 6');

let nombre2

do {
    nombre2 = prompt("Ingrese su nombre: (para salir escribi salir)")
    console.log(nombre2);

} while ( nombre2 != "salir");

console.log("saliste do while");


// -------------------------


let clima = prompt('Ingrese el clima de su ciudad: ')

switch( clima ) {
    case "lluvia": 
        console.log("mira netflix en tu casa");
        break;
    case "nublado": 
        console.log("anda a dormir");
        cubreak;
    case "solead": 
        console.log("sali a merendar");
        break;
    default:
        console.log('No fue seleccionado un caso');
        break;
};


let clima2 = prompt('Ingrese el clima de su ciudad2: ')

switch( clima2 ) {
    case "lluvia": 
        console.log("mira netflix en tu casa");
        
    case "nublado": 
        console.log("anda a dormir");
        break

    case "solead": 
        console.log("sali a merendar");
        break;

    default:
        console.log('No fue seleccionado un caso');
        break;
};