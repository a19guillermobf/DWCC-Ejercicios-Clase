/***************************************************************************************************************
*  
*   Objetivo: Sumar los elementos de las dos diagonales de una matriz bidimensional
*
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

const aleatorio = (min,max) => Math.floor(min+(max-min)*Math.random())

let filas=leerEntero("Filas",1,100)
let columnas=leerEntero("Columnas",1,100)

let matriz=Array.from({length:filas},()=>Array.from({length:columnas},()=>aleatorio(1,50)))

let diagonal1=matriz.map((el,i) => el[i]).reduce((anterior,siguiente)=>anterior+siguiente)
let diagonal2=matriz.map((el,i) => el[el.length-i-1]).reduce((anterior,siguiente)=>anterior+siguiente)

console.log("Matriz ",matriz)
console.log(diagonal1)
console.log(diagonal2)

//diagonal1=matriz.map((el,i) => el[i])
//console.log(diagonal1)