# Ciclos, Iteraciones, Bucles

herramientas que nos permiten repetir un bloque de instrucciones cierta cantidad de veces.

// ciclos por conteo: for
// ciclos condicionales, While y Do While 


```

for(let i = 0; i < 7; i++) {
    console.log(`${i}`)
}


for(let i = 0; i < 7; i = i + 2) {

    console.log(`${i}`)
} 

```


```

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
    alert("No lograste identificarte.")
}

```
**break** nos sirve para detener la ejecucion  y en contra parte **continue** nos sirve para bypasear hasta cumplir alguna condicion



### While

El ciclo while nos sirve para iterar y no conocemos cuando se deberia cortar el loop, en el while se evalua la condicion y si cumple inicia la iteracion y se va a repetir hasta que deja de cumplir la condicion.

```
let nombre = prompt("Ingrese su nombre: (para salir escribi salir)")

while ( nombre != "salir") {
    console.log(nombre);
    nombre = prompt("Ingrese su nombre: (para salir escribi salir)")
}

```


### Do while

El ciclo do while ejecuta una vez sin importar si la condicion se evalua correctamtente

```
let nombre2

do {
    nombre2 = prompt("Ingrese su nombre: (para salir escribi salir)")
    console.log(nombre2);

} while ( nombre2 != "salir");
```


# Switch Operador

Sirve para evaluar la misma variabla determinando el caso de la condicion para decidir el flujo de ejecucion sin tener que estar anidando if.



```
et clima = prompt('Ingrese el clima de su ciudad: ')

switch( clima ) {
    case "lluvia": 
        console.log("mira netflix en tu casa");
        break;
    case "nublado": 
        console.log("anda a dormir");
        break;
    case "solead": 
        console.log("sali a merendar");
        break;
    default:
        console.log('No fue seleccionado un caso');
        break;
};
```

El "break" en un "case" de un "switch" es necesario para indicarle al programa que deje de ejecutar el código dentro del case una vez que se ha cumplido. Si no se utiliza "break", el código seguirá ejecutando en todos los cases siguientes, lo cual puede causar resultados inesperados o errores en el programa.