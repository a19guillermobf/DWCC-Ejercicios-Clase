/***************************************************************************************************************
*  
*   Objetivo: Se solicita un número entero n entre 1 y 20 al usuario. Se mostrará una pirámide de la forma:
*
*               1
*               2 2
*               3 3 3
*               4 4 4 4
*                 ...
*               n n n n n n n (n veces)
*
*   Entrada : numero entero n
*
*
*   Salida  : La pirámide mostrada en el objetivo del ejercicio
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

let n
do {
    n=leerEntero(1)
} while (n<1)

salida=""
for (i=1;i<=n;i++) {
    for (j=1;j<=i;j++)
       salida+=`${i} `
    salida+='<br>'
}

document.write(salida)