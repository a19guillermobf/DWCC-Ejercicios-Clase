/***************************************************************************************************************
*  
*   Objetivo: Crea un script Javascript que solicite el nombre a un usuario y su edad al abrir la página.
*
*
*   Entrada : cadena de texto, numero: nombre, edad
*
*
*   Salida  : Tiene que mostrar la información solicitada a través de la consola de depuración
*                       Tu nombre es .... y tienes .... años
*
*
***************************************************************************************************************/

let nombre
let edad

do {
    nombre=prompt("Dime tu nombre: ")
} while (!isNaN(nombre))

do {
    edad=prompt("Dime tu edad: ")
} while (isNaN(edad)||!Number.isInteger(parseFloat(edad))||parseInt(edad)<0)

document.write(`Tu nombre es ${nombre} y tienes ${edad} años`)
console.log(`Tu nombre es ${nombre} y tienes ${edad} años`)