
/* tipos de  datos booleanos */
// tipo de dato que adminte dos valores: verdadero o falso.

let vardadero = true;
let falso = false;

console.log(vardadero, typeof vardadero)

// let esSoleado = true;
// 
// if (esSoleado) {
//     alert("Es un dia soleado, nos vamos a la playa");
// } 



let esSoleado = false;

if (esSoleado) {
    alert("Es un dia soleado, nos vamos a la playa");
} 


alert("Fin del  proceso")

//Usamos la palabra reservada if y evaluamos una condicion. si es verdadero se ejecuta el codigo entre llaves.

// evaluaciones booleanas
// las variables booleanas pueden recibir su valor a partir de una evaluacion booleana a partir de otras variables

let ejemploUno = 3 > 0
console.log("ejemplo uno");
console.log(ejemploUno, typeof ejemploUno)


// operadores logicos

// Estos operadores son comunes a todos los lenguajes de programacion.

// == igual

let ejemploDos = (53 == 57)
console.log("ejemploDos")
console.log(ejemploDos)
// === doble igual identico

// Estrictamente igual
let ejemploTres = (53 === "53")  // Siempre tratar de trabajar con los Estrictamtente igual para evitar errores en el ejecucion.
console.log("ejemploTres")
console.log(ejemploTres)


// distinto
let ejemploCuatro = (53 != "53")  // Siempre tratar de trabajar con los Estrictamtente igual para evitar errores en el ejecucion.
console.log("ejemploCuatro")
console.log(ejemploCuatro)


let ejemploCinco = (53 !== "53")  // Siempre tratar de trabajar con los Estrictamtente igual para evitar errores en el ejecucion.
console.log("ejemploCinco")
console.log(ejemploCinco)


// menor < menor igual <=   mayor > mayor igual >=

// Casos True 
console.log("Casos True Mayor, menor e igual ")
let mmUno = -3 < 0
console.log("mmUno uno");
console.log(mmUno, typeof mmUno)

let mmDos = 0 <= 0
console.log("mmDos uno");
console.log(mmDos, typeof mmDos)

let mmTres = 3 > 0
console.log("mmTres uno");
console.log(mmTres, typeof mmTres)

let mmCuatro = 3 >= 3
console.log("mmCuatro uno");
console.log(mmCuatro, typeof mmCuatro)


// OPERADORES AND && y OR \\

let todoOK =  (true && true)
console.log("todoOK "+ todoOK)

let todoOK44 =  (true || false)
console.log("todoOK44 "+ todoOK44)


let todoOK2 =  (true && false) || true
console.log("todoOK2 "+ todoOK2)


let todoOK1 =  (true && false)
console.log("todoOK1 "+ todoOK1)


let todoOK22 =  (false && false) || true
console.log("todoOK22 "+ todoOK22)


let todoOK23 =  (false && false) || false
console.log("todoOK23 "+ todoOK23)




// PRACTICA

let edad = parseInt(prompt("edad: "));


if (edad < 20) {
    alert("sos un niño")

} else if (edad > 12 && edad < 16) {
    alert("Adolecente")

}else if (edad > 16 && edad < 19) {
    alert("esta en adolecencia, pero pasado")

}else {
    alert("alto viejo")
}



let usuarioAuth = "dda";
let passAuth = "123";

let userIngres = prompt("user: ");
let passIngres = prompt("pass: ");

if (usuarioAuth === userIngres) {
    alert(`Su login es ${passAuth===passIngres ? "OK": "Mal el acceso"}`)
};
