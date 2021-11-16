/***************************************************************************************************************
*  
*   Objetivo: Solicitamos tres números al usuario e indicamos cual es el mayor
*
*
*   Entrada : numero1, numero2, numero3
*
*
*   Salida  : El mayor de numero1, numero2 y numero3 es : XXXXX
*
*
***************************************************************************************************************/

function leerEntero() {
    let numero
    do {
       numero=prompt(`Dame un numero entero: `)
    } while (isNaN(numero)||!Number.isInteger(parseFloat(numero)))
    return parseInt(numero)
}

const numeros=[]
for (i=0;i<3;i++) 
    numeros.push(leerEntero())

console.log(numeros.reduce((anterior,actual)=>anterior>actual?anterior:actual))


