/***************************************************************************************************************
*  
*   Objetivo: Solicitamos un número tras otro al usuario hasta que ingresamos el númoer 0 (que no se tendrá en cuenta)
*             Una vez terminada la lectura de números se informará cuál fue el mayor de los números
*
*   Entrada : numero1, numero2, numero3,.....
*
*
*   Salida  : El mayor de numero1, numero2, numero3,....
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
do {
   numeros.push(leerEntero())
} while (numeros[numeros.length-1]!==0)
numeros.pop()

//console.log(`El mayor de ${numeros.join(",")} es ${Math.max(...numeros)}`)
console.log(`El mayor de ${numeros.join(",")} es ${numeros.reduce((anterior,actual)=>anterior>actual?anterior:actual)}`) 
