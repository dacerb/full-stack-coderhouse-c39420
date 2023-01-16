## Clase 2 - Control de Flujos ( Condicionales )


#### Revision tarea clase 1
Calculadora masa corporal

[LINK](https://www.texasheart.org/heart-health/heart-information-center/topics/calculadora-del-indice-de-masa-corporal-imc/)


- npm install prompt -- save

```
let peso = parseInt(prompt("Ingresa su peso:"));
let estatura = parseInt(prompt("Ingresa su estatura:"));
let imc = peso / (estatura * estatura)

console.log(`El indice de masa corporal ${imc}`)
alert(`El indice de masa corporal ${imc}`)
```