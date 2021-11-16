/***************************************************************************************************************
*  
*   Objetivo: Calcular la matriz traspuesta
*
*
*   Entrada : 
*
*
*   Salida  : 
*
*
***************************************************************************************************************/

function leerEntero(msg,limite1,limite2) {
    let numero
    do {
       numero=prompt(msg)
    } while (isNaN(numero)||!Number.isInteger(parseFloat(numero))||parseInt(numero)<limite1||parseInt(numero)>limite2)
    return parseInt(numero)
}

let filas=leerEntero("Filas",1,100)
let columnas=leerEntero("Columnas",1,100)

let matriz=Array.from({length:filas},()=>Array.from({length:columnas},()=>Math.floor(Math.random()*10)))

function matrixT(A) {
    return Array.from({length:A[0].length},(el1,i)=>Array.from({length:A.length},(el2,j)=>A[j][i]))
} 

console.log(matriz)
console.log(matrixT(matriz))