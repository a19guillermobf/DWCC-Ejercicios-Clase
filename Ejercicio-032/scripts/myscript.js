/***************************************************************************************************************
*  
*   Objetivo: Imprimir en la consola de depuración la suma de los números enteros entre 1 y n, donde n es un dato 
*             solicitado al usuario. Comprobar si esa suma coincide con n*(n+1)/2
*
*   Entrada : n
*
*   Salida  : La suma de 1+2+3+...n es XXXX
*
***************************************************************************************************************/


function leerEntero(msg) {
    let numero
    do {
       numero=prompt(msg)
    } while (isNaN(numero)||!Number.isInteger(parseFloat(numero))||parseInt(numero)<1)
    return parseInt(numero)
}

let n=leerEntero("Sumamos hasta el....")
const numeros=Array.from({length:n},(el,i)=>i)
let suma=numeros.reduce((anterior,actual)=>anterior+actual)
console.log(`La suma ${numeros.join("+")} es ${suma} y coincide con ${0.5*n*(n+1)}`)

