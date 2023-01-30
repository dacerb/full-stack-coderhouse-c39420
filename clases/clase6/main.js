

//
function print(value) {
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