/***************************************************************************************************************
*  
*   Objetivo: Crear un array con n números aleatorios entre 1 y 100. Emplea para ello la función
*             random() del objeto Math. Mostrar por consola cual es el mayor, el menor y la media.
*
*   Entrada : n
*
*
*   Salida  : el mayor, el menor y la media de los números del array
*
*
***************************************************************************************************************/

const aleatorio = (min,max) => Math.floor(min+(max-min)*Math.random())
const aleatorios=Array.from({length:10},()=>aleatorio(1,100))

// MAXIMO

// Con Math
let maximoMath=Math.max(...aleatorios)

// Con reduce
let maximoReduce=aleatorios.reduce((anterior,actual)=>actual>anterior?actual:anterior)

// Ordenando de mayor a menor y obteniendo el primer valor
let maximoSort=aleatorios.sort((a,b)=>b-a)[0]

// MINIMO

// Con Math
let minimoMath=Math.min(...aleatorios)

// Con reduce
let minimoReduce=aleatorios.reduce((anterior,actual)=>actual>anterior?anterior:actual)

// Ordenando de menor a mayor y obteniendo el primer valor
let minimoSort=aleatorios.sort((a,b)=>a-b)[0]

// MEDIA

// Con reduce
let mediaReduce=aleatorios.reduce((anterior,actual)=>anterior+actual)/aleatorios.length

// De forma clasica
let mediaClasica=0
for (let i=0;i<aleatorios.length;i++)
  mediaClasica+=aleatorios[i]
mediaClasica=mediaClasica/aleatorios.length

// Faltan los mensajes de salida