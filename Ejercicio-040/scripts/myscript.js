/***************************************************************************************************************
*  
*   Objetivo: Determinar si un número entero introducido es par o impar
*             Crear para ello una función
*
*   Entrada : n
*
*   Salida  : El número n es (par|impar)
*
***************************************************************************************************************/

function leerEntero() {
    let numero
    do {
       numero=prompt(`Dame un numero entero: `)
    } while (isNaN(numero)||!Number.isInteger(parseFloat(numero))||parseInt(numero)<1)
    return parseInt(numero)
}

let par=x=>x%2===0
let impar=x=>x%2!==0

let numero=leerEntero()
console.log(`El numero ${numero} ${par(numero)?"es par":"es impar"}`)
console.log(`El numero ${numero} ${impar(numero)?"es impar":"es par"}`)