

//
function print (value) {
    console.log(value)
}

// definiendo un array
let array = [1,2,3];
console.log("array con elementos: ",array);

// vacio
let arrayVacio = [];
console.log("array vacio: ",arrayVacio);

// puedo ir agregando valores a un aray despues de declararlo.
arrayVacio = [25,36,99];
console.log("Agrego elementos al array vacio..")

console.log(arrayVacio);


let arrayCombinado = ["hola", 99,  true];
console.log(arrayCombinado)


const arrayLetras = ["A", "B", "C", "D"];
console.log(arrayLetras)


print(arrayLetras[2])
print(arrayLetras[3])


arrayLetras[2] = 'letra dos'
print(arrayLetras[2])


// iterar array
print(arrayLetras.length)

for (let i = 0; i < arrayLetras.length; i++)
{
    print(arrayLetras[i])
}


let string = "hola";

print(`cantidad de caracteres ${string.length}`)


// Motodos push
let familiaX = ["tefirian", "raster", "josue"]
print(familiaX)
familiaX.push("otra familia")

print(familiaX)

// agrega adelante
familiaX.unshift("nuevo adelante")
print(familiaX)

// permite elimnnar el ultimo elemento del array, podemos aprobar y almacenar el valor eliminado en una variable
let elemento = familiaX.pop()
print("Se quito elemento " ,elemento)
print(familiaX)


// elimino primer elemento
let elemento_delante = familiaX.shift()
print(elemento_delante)
print(familiaX)

// metodo splice - permite eliminar 1 o varios elementos de un array, funciona con dos parametros primero indice, segurn la cantidad de veces que tiene que eliminar
print("splice")
let integrantesEliminados = familiaX.splice(0, 2)
print(integrantesEliminados)


let array_join = ["hola", "perro", "loco"]
let new_join = array_join.join(" - ")
print(new_join)


//  MEtodo concat() permite unir dos array, retorna uno nuevo
let flia = familiaX.concat(integrantesEliminados)
print(flia)


// MEtodo Slice retorna una copia del arry pasando como parametros los indices que quiero copiar inicio y fin y el valor final no es incluido
print(flia.length, flia)
let array_slice_copia_x_indice = flia.slice(1,3)
print(array_slice_copia_x_indice)


// indexOf() devuelve el indice del elemento
print('indice ' + flia.indexOf('josue'))

// Cuando el elmento no es encontrado retorna -1 el infexOf


// metodo includes similara indexOf solo que retorna bool si lo encuentra.
print( flia.includes('josue'))


// metodo reverse() - invierte lo selementos de un array, es un metodo destructivo!!  (MODIFICA EL ARRAY ORIGINAL)
print(flia.reverse())

