/***************************************************************************************************************
*  
*   Objetivo: Solicitaremos un número mientras no esté entre 1 y 9. 
*             Cuando ya esté entre 1 y 9, mostraremos la tabla de multiplicar de ese número
*
*   Entrada : numero     1 < numero < 9
*
*   Salida  : 1 x numero = numero
*             2 x numero = ....
*             3 x numero = ....
*                   ....
*             9 x numero = ....
*
*   Nota: Formatea la salida en el documento HTML empleando una tabla con 5 columnas y nueve filas
*
***************************************************************************************************************/

function leerEntero() {
    let numero
    do {
       numero=prompt(`Dame un numero entero positivo: `)
    } while (isNaN(numero)||!Number.isInteger(parseFloat(numero))||parseInt(numero)<1||parseInt(numero>9))
    return parseInt(numero)
}

let n=leerEntero()

salida=`<table border>`
for (i=1;i<n;i++) {
    salida+=`<tr><td>${n}</td><td>x</td><td>${i}</td><td>=</td><td>${n*i}</td></tr>`
}
salida+=`</table>`
document.write(salida)