
/*
Funciones

conjunto de instrucciones que se agrupan para realizar una tarea concreta
se entienden como pequeños programas.
*/


// Declaracion de funcion

function retornarElNum3 () {
    return 3;
}

let numTres = retornarElNum3();
console.log(numTres)



// suma tradicional
function sumaTradicional(a, b) {
    let resultado = a + b;
    return resultado;
    // return a + b;  Otra opcion 
}

let resultadoTradiciona = sumaTradicional(5,5);
console.log(resultadoTradiciona)




//let valorA = parseInt(prompt("ingrese un nunm: "))
//let valorB = parseInt(prompt("ingrese un nunm: "))
//
//console.log(sumaTradicional(valorA, valorB))

//  et nombreAlumno = prompt("ingrese el nombre del alumno");
//  
//  unction saludarAlumno(nombre) {
//     alert("hola alumno " + nombre.toUperCAse);
//  
//  
//  aludarAlumno(nombreAlumno);


// Ambitos de variables
/*
    Globales y locales

*/

// variable global

let globalDiez = 10;

function ejemploA() {
    console.log(globalDiez);
}


ejemploA();




function ejemploB () {
    let resultadoEjemploB = 11;
}

console.log(ejemploB());

// funcion anonima funcion que se define sin nombre
// y se utiliza para ser pasada por parametros


let sumaAnonima = function (a, b) {
    return a + b;
}

let restaAnonima = function (a, b) {
    return a - b;
}


console.log(sumaAnonima(1000,1000));


console.log(restaAnonima(sumaAnonima(5000,5000), 1000));


/* Funciones Flechas */
// se indentifican como funciones anonimas de sintaxis simplificada


let division = (a, b) => {
    return a / b;
} 

console.log(division(1000,10))


let multi = (a,b) => a * b;

console.log(multi(10,90));


// funcion flecha super simplificada, si tengo un unico parametro no hace falta parentesis
let nombre = n => console.log("hola, "+n)

nombre('pedro')