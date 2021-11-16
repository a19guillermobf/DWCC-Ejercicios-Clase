/***************************************************************************************************************
*  
*   Objetivo: Solicitar al usuario que visita la página su nombre y mostrar un mensaje de bienvenida
*             en la página HTML
*
*
*   Entrada : nombre
*
*
*   Salida  : Bienvenido a mi página, XXXX   (XXXX será el nombre del usuario que visita la página)
*
*
***************************************************************************************************************/

let nombre

do {
    nombre=prompt("Dime tu nombre: ")
} while (!isNaN(nombre))

document.write(`Bienvenido a mi página, ${nombre}`)
console.log(`Bienvenido a mi página, ${nombre}`)