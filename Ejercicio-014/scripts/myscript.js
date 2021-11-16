/***************************************************************************************************************
*  
*   Objetivo: Se solicita al usuario el número de filas y columnas de una tabla. Se rellena cada celda con 
*             el producto del numero de fila por el número de columna
*
*
*   Entrada : números enteros: nfilas, ncols
*
*
*   Salida  : tabla html con nfilas y ncols
*
*
***************************************************************************************************************/

function leerEntero(i) {
    let numero
    do {
       numero=prompt(`Dame el entero número${i}: `)
    } while (isNaN(numero)||!Number.isInteger(parseFloat(numero))||parseInt(numero)<1)
    return parseInt(numero)
}

let nfilas
let ncols
do {
   nfilas=leerEntero(1)
   ncols=leerEntero(2)
} while (nfilas<0||ncols<0)

let salida="<table border>"
for (let i=1;i<=nfilas;i++) {
    salida+="<tr>"
    for (let j=1;j<=ncols;j++) {
       salida+=`<td>${i*j}</td>`
    }
    salida+="</tr>"
}
salida+="</table>"

let div=document.getElementById("tabla")
div.innerHTML=salida