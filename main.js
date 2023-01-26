// Archivo Js del proyecto de entrega

// --------------------------------------------------------------------------------------------------------------------

console.log("Algoritmo con un condicional")
let inputValue = parseInt(prompt("Ingrese del 1 al 5 para indicar su grado de ansiedad donde 1 poco y 5 es mucho: "))

function anxietyLogInfo (value) {
    console.log("nivel de ansiedad detectado: " + value)
}

switch (inputValue){

    case 1: 
        alert("Una actividad relajante, como yoga o meditación, puede ayudar a reducir la ansiedad.");
        anxietyLogInfo(inputValue);
        break;
    case 2: 
        alert("Trabajar con un terapeuta o consejero puede proporcionar herramientas para manejar la ansiedad.");
        anxietyLogInfo(inputValue);
        break;
    case 3: 
        alert("Tomar una caminata al aire libre puede proporcionar un cambio de escenario y ayudar a reducir la ansiedad.");
        anxietyLogInfo(inputValue);
        break;  
    case 4: 
        alert("Practicar técnicas de respiración profunda puede ayudar a calmar el sistema nervioso y reducir la ansiedad.");
        anxietyLogInfo(inputValue);
        break;
    case 5: 
        alert("Hacer ejercicio regularmente puede ayudar a reducir los síntomas de ansiedad y mejorar el bienestar general.");
        anxietyLogInfo(inputValue);
        break;
    default:
        alert('Valor no valido');
        console.warn("prompt inpunt: no valido");
        break;
    
}

// --------------------------------------------------------------------------------------------------------------------

let inpuName;
do {

    inpuName = prompt("Ingrese un nombre o apodo para saludar: ");

    if (inpuName.toLocaleLowerCase() === "salir") {console.warn("Saliendo de loop saludo !!"); break;}

    if (isNaN(inpuName)) {
        console.log("¡Hola "+ inpuName.toLocaleLowerCase() + "!!!...");
    } else {
        console.warn("los nombres no son numeros");
    }
    alert("Escribir salir para terminar.");

} while ( true );

// --------------------------------------------------------------------------------------------------------------------
