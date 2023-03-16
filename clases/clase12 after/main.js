

// Desestructuracion de objetos, ( a no trabajar con el dato original, facilita la lectura del objeto cuando el codigo es muy grande... al desectructurar ..)

// 1. no modificar el objeto original al trabajar con los datos
// 2. facilita el trabajo con objetos grandes o anidados
// 3. hace mas legible el codigo



const auto = {
    marca: "ford",
    modelo: "fiesta",
    anio: 2019,
    color: "azul"
}

let {marca, modelo, anio, color } = auto;


console.log(marca, color)
marca = "renaul";
console.log(auto.marca)


const alumno = {
    nombre: "david",
    edad: 23,
    curso: "js",
    direccion: {
        calle: "av uno",
        altura: 123
    }
}

let {nombre, edad, direccion:{calle, altura, extra_var=true}} = alumno

console.log(nombre, edad, calle, altura, extra_var)

// DESESTRUCTURACION EN PARAMETROS

// EJEMPLO ANTES
function mostrarDatos() {
    console.log(`hola, mi nombre es ${alumno.nombre} y estudio ${alumno.curso}`)
}
mostrarDatos();

// FORMA DESESTRUCTURADA 
function mostrarDatos2({nombre, curso}) {
    console.log(`hola, mi nombre es ${nombre} y estudio ${curso}`)
}
mostrarDatos2(alumno);


// hago la desestructuracion en los parametros... la logica es que matchea con los nombres de las variables...

// DESESTRUCTURACION ARRAYS

const numeros = [10,20,30,40,50]

let [primero, segundo, tercero, cuarto, quinto] = numeros

console.log(cuarto)

let [, , , cuatri, ] = numeros
console.log(cuatri)


// OPERADOR SPREAD
// operado de propagacion, permite propagar los elementos de un array o un objeto en otro lugar... como una funcion o un nuevo array


const nombres = ["juan", "pedro", "maria", "jose"]
console.log(nombres)

// utilizamos el operado spread con ...

console.log(...nombres)

// Equivale a
console.log(nombres[0],nombres[1],nombres[2],nombres[3])



// Explicacion copia / referencia
const yerba = {
    nombre: "yerba",
    precio: 250
}

const nuevaYerba = yerba;
console.log(yerba)
console.log(nuevaYerba)


nuevaYerba.precio = 2000;
console.log(yerba)
console.log(nuevaYerba)

// si queremos copiar un objeto y agregar una propiedad lo hacemos 
const nuevaYerba2 = {...yerba, marca:"marolio"}

console.log(yerba)
console.log(nuevaYerba2)


nuevaYerba.precio = 1991231921313;
console.log(yerba)
console.log(nuevaYerba2)


// con arrays
const a = [1,2,3,4]
const b = ["a","v"]

const array_merg = [...a,...b]
console.log(array_merg)

// REST PARAMETERS
// tambien podemos utilizar el operar spread para recibir un numero indefinido de parametros en una funcion


function mostrarDatos3(...numeros) {
    console.log(numeros)
}

mostrarDatos3(1,2,3)

mostrarDatos3(...[1,2,3,4,5,6])


mostrarDatos3(...[1,2,3])