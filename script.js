/*------------Sentencia IF: Determinar si un número es positivo, negativo o cero:---------*/

let numero0 = parseFloat(prompt("Ingrese un número:"));

if (numero0 > 0) {
    console.log("El número es positivo");
} else if (numero0 < 0) {
    console.log("El número es negativo");
} else {
    console.log("El número es cero");
}
/*---------Sentencia IF anidado: Clasificar una calificación como "aprobado" o "excelente":--------------------------*/

let calificacion = parseFloat(prompt("Ingrese la calificación:"));

if (calificacion >= 60) {
    console.log("Aprobado");
    if (calificacion >= 90) {
        console.log("Excelente nota");
    }
} else {
    console.log("No aprobado");
}

/*------Sentencia WHILE: Sumar números ingresados hasta que el usuario ingrese el número 0:-----------------------------*/

let suma = 0;
let numero1;

while (true) {
    numero1 = parseFloat(prompt("Ingrese un número (0 para terminar):"));
    if (numero1 === 0) break;
    suma += numero1;
}

console.log("La suma total es: " + suma);

/*------Sentencia WHILE con condición: Solicitar una contraseña hasta que sea correcta:-----------------------------*/
const contraseñaCorrecta = "1234";
let intentoContraseña;

while (intentoContraseña !== contraseñaCorrecta) {
    intentoContraseña = prompt("Ingrese la contraseña:");
}

console.log("Contraseña correcta. Acceso concedido.");

/*----Sentencia FOR: Imprimir los números del 1 al 10:-------------------------------*/
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

/*---Sentencia FOR con arrays: Imprimir cada nombre de un array de nombres:--------------------------------*/

const nombres = ["Ana", "Juan", "María", "Carlos", "Laura"];

for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
}

/*----Sentencia BREAK: Detener un bucle al llegar al número 5:-------------------------------*/
for (let i = 1; i <= 10; i++) {
    console.log(i);
    if (i === 5) break;
}
/*---------Sentencia CONTINUE: Saltar el número 5 en un bucle:----*/

for (let i = 1; i <= 10; i++) {
    if (i === 5) continue;
    console.log(i);
}

/*-------Sentencia SWITCH: Mostrar el día de la semana según el número ingresado (1-7):---------*/

let numeroDia = parseInt(prompt("Ingrese un número del 1 al 7:"));

switch (numeroDia) {
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miércoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
        console.log("Sábado");
        break;
    case 7:
        console.log("Domingo");
        break;
    default:
        console.log("Número inválido");
}

/*-------Sentencia SWITCH con rango: Mostrar un mensaje según una calificación (A, B, C, D, F):-----------*/
let calificacion1 = prompt("Ingrese la calificación (A, B, C, D o F):").toUpperCase();

switch (calificacion1) {
    case 'A':
        console.log("Excelente trabajo");
        break;
    case 'B':
        console.log("Buen trabajo");
        break;
    case 'C':
        console.log("Trabajo aceptable");
        break;
    case 'D':
        console.log("Necesitas mejorar");
        break;
    case 'F':
        console.log("Reprobado");
        break;
    default:
        console.log("Calificación inválida");
}

