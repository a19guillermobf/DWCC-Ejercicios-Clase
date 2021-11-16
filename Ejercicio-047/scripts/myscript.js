/***************************************************************************************************************
*  
*   Objetivo: Sumar dos matrices bidimensionales
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

/*
function representarTabla(matriz) {
    let tabla=document.getElementById("tabla")
    tabla.innerHTML=`<table>${matriz.map(fila=>`<tr>${fila.map(col=>`<td>${col}</td>`).join('')}<tr>`).join('')}</table>`
}
*/

let filas=leerEntero("Filas",1,100)
let columnas=leerEntero("Columnas",1,100)

let matriz1=Array.from({length:filas},()=>Array.from({length:columnas},()=>Math.floor(Math.random()*10)))
let matriz2=Array.from({length:filas},()=>Array.from({length:columnas},()=>Math.floor(Math.random()*10)))

let suma=matriz1.map((fila,i)=> {
    return fila.map((el,j)=>el+matriz2[i][j])
})

console.log(matriz1)
console.log(matriz2)
console.log(suma)
