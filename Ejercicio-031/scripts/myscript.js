/***************************************************************************************************************
*  
*   Objetivo: Calcula la suma de los pares y de los impares de elementos de n elementos de un array generados
*             aleatoriamente entre 1 y 10.
*
*
*   Entrada : n
*
*
*   Salida  : Los elementos pares del array son: x1, x2, x3, ...
*             Los elementos impares del array son: x1, x2, x3, ...
*             La suma de los elementos pares del array es: XXXX
*             La suma de los elementos impares del array es: YYYY
*
***************************************************************************************************************/

function leerEntero() {
    let numero
    do {
       numero=prompt(`Dame la longitud del array: `)
    } while (isNaN(numero)||!Number.isInteger(parseFloat(numero))||parseInt(numero)<1||parseInt(numero)>100)
    return parseInt(numero)
}

const aleatorio = (min,max) => Math.floor(min+(max-min)*Math.random())

const aleatorios=Array.from({length:leerEntero()},()=>aleatorio(1,10))
let sumaPares=aleatorios.filter(el=>el%2===0).reduce((anterior,actual)=>anterior+actual)
let sumaImpares=aleatorios.filter(el=>el%2===1).reduce((anterior,actual)=>anterior+actual)

console.log(`Los elementos pares del array ${aleatorios.join(",")} son ${aleatorios.filter(el=>el%2===0).join(",")} es ${sumaPares}`)
console.log(`Los elementos pares del array ${aleatorios.join(",")} son ${aleatorios.filter(el=>el%2===0).join(",")} es ${sumaPares}`)
console.log(`La suma de los elementos pares de ${aleatorios.join(",")} es ${sumaPares}`)
console.log(`La suma de los elementos impares de ${aleatorios.join(",")} es ${sumaImpares}`)
