/***************************************************************************************************************
*  
*   Objetivo: Sumar vectores [1,2,3]+[2,3,4]=[3,5,7]
*             
*   Entrada : Dos grupos de números enteros separados por comas
*             Comprobar si son el mismo número de datos
*
*   Salida  : Muestra la suma de los vectores
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

function aleatorio(min,max) {
    return Math.floor(min+(max-min)*Math.random())
}

function sumar(v1,v2) {
    return v1.map((el,i)=>el+v2[i])
}

let n=leerEntero("Longitud del array",1,100)
const vector1=Array.from({length:n},()=>aleatorio(-100,100))
const vector2=Array.from({length:n},()=>aleatorio(-100,100))

console.log("Vector1 ",vector1)
console.log("Vector2 ",vector2)
console.log("Suma",sumar(vector1,vector2))

