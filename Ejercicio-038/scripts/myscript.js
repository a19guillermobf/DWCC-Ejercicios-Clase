/***************************************************************************************************************
*  
*   Objetivo: Determinar si un número es o no primo empleando una función
*             Un número n es primo si sólo es divisible por 1 y por n
*
*   Entrada : numero entero
*
*   Salida  : El numero n (es|no es) primo
*
***************************************************************************************************************/

function leerEntero() {
    let numero
    do {
       numero=prompt(`Dame un número entero: `)
    } while (isNaN(numero)||!Number.isInteger(parseFloat(numero))||parseInt(numero)<1)
    return parseInt(numero)
}

function esPrimo(n) {
    if (n===1||n===2) return true
    let impares=Array.from({length:parseInt(Math.sqrt(n))},(el,i)=>2*i+1).slice(1)
    impares.unshift(2)
    for (let i=0;i<impares.length;i++) {
        if (n%impares[i]===0)
           return false
    }
    return true
}

let numero=leerEntero()
console.log(`El numero ${numero} ${esPrimo(numero)?"es primo":"no es primo"}`)