/***************************************************************************************************************
*  
*   Objetivo: Generar los primeros n números primos 
*
*
*   Entrada : número entero n
*
*
*   Salida  : 1 2 3 5 7 ....
*
*
***************************************************************************************************************/

function leerEntero(msg) {
    let numero
    do {
       numero=prompt(msg)
    } while (isNaN(numero)||!Number.isInteger(parseFloat(numero))||parseInt(numero)<1||parseInt(numero)>1000)
    return parseInt(numero)
}

function esPrimo(n) {
    /*
    // Forma relativamente clasica

    if (n===1||n===2) return true
    let impares=Array.from({length:parseInt(Math.sqrt(n))},(el,i)=>2*i+1).slice(1)
    impares.unshift(2)
    for (let i=0;i<impares.length;i++) {
        if (n%impares[i]===0)
           return false
    }
    return true
    */

    if (n===1) 
        return true
    return Array.from({length:n},(el,i)=>i+1).filter(el=>n%el===0).length===2
}

let limite=leerEntero(`Numeros primos hasta el...: `)
/*
// Forma clasica
for (i=1;i<limite;i++)
      console.log(`El numero ${i} ${esPrimo(i)?"es primo":"no es primo"}`)
*/

const numeros=Array.from({length:limite},(el,i)=>i+1)
const primos=numeros.filter(el=>esPrimo(el))
console.log(`Los numeros primos hasta el ${limite} son: ${primos.join(",")}`)

