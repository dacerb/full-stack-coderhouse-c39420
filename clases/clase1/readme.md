# Conceptos generales
> Sintaxis y variables


### IMPORTANTE:

* No escribir codigo JS directamente en los archivos .html, la solucion correcta es **importart** 



### Sintaxis:
> orden de consideraciones

1. En prograciones el codigo es interpretado por las computadores de arriba hacia abajo.
2. en JS como en todos los lenguajes disponemos de comentarios.

    ````
    /*
        En Bloque
    */

    // Unica Linea
    

3. En el codigo de JS no se tiene en cuenta espacios en blanco y lineas nuevas. (\n)
4. Es case Sensitive: Disting entre mayusculas y minusculas.

    ````
    let estoEsUnEjemplo; // camelcase  ( Forma Correcta )

5. Cada linea de codigo puede terminar sin ; en los ultimos años se agrego.
6. JS cuenta con palabras reservadas que si las ocupamos mal el lenguaje nos indica con error.




---
#### JS: Es un lenguaje **interpretado** y no es **compilado**.
#### Tipos de datos:
    
```
    "Esto es un tipo de dato": String
    'Esto es un tipo de datao' String
    `Esto es un tipo de dato`: String
    1231123: Number
    true, false: Boolean
    null: null
    undefine: undefine, no esta definido al momento de utilizarse

```

#### Variable
Es un espacio de memoria reservado para almacenar dato.

para definir las variables podemos utilziar:

```
let nombre;
let edad;

var > no se utiliza mas para declarar variables

diferencia entre var y let es que var permite definir el mismo nombre de variable muchas   veces.

dentro del mismo SCOPE


nombre = "david";
edad = 35;

console.log(nombre);


let curso = "JavaScript"
console.log(curso)

```

#### Variables Constantes

```
const IVA = 1,21;  // 1.21 porque si opero matematicamente puedo sumar y no tengo que hacer mucho manejo.  100 x iva --> Matematica nos da el resultado final

```


#### Operaciones Básicas

```
let numeroA = 50;
let numeroB = 50;
let nombreCliente = "David";
const IVA = 1.21; 

let promedio = (numeroA + numeroB) / 2;

console.log(promedio)

let mensaje = nombreCliente + " el valor de su compra es " + ( (numeroA + numeroB )* IVA);
console.log(mensaje)

```


#### Promt, Parse, alert

```
let nombreAlumno = prompt("ingrese su nombre: ");
console.log(nombreAlumno);

// devuelve string con el dato ingresado y si cancela aparece null

let notaPrimerParcial = parseInt(prompt("ingrese la nota del segundo parcioal"));
let notaSegundoParcial = parseInt(prompt("ingrese la nota del segundo parcioal"));

console.log((notaPrimerParcial+notaSegundoParcial)/2)

console.log("") // nos sirve para mostrar un mensaje...
alert("gracias por participar") //mensaje string para dar salida con un boton... 

```


# Actividad de practica, workbook, lecturas del libro
> consigna, calculadores de indice de masa corporal IMC altura y pesos y te dice (peso / altura ^2)
proxima clase se resuelve el ejercicio.