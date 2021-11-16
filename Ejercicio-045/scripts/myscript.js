/***************************************************************************************************************
*  
*   Objetivo: Mostrar los elementos comunes y no comunes de dos arrays de longitud n
*             Crear dos funciones: 
*                1.- Devuelve en un array los elementos del
*                    primer array que están en el segundo array
*                2.- Devuelve en un array los elementos del
*                    primer array que no están en el segundo array
*       
*             Rellenar los arrays con númeos aleatorios entre -100 y 100
*
*   Entrada : La longitud del array (numero entero n)
*
*   Salida  : Los elementos del Array1
*             Los elementos del Array2
*             Los arrays tienen XX elementos comunes: los elementos comunes
*             En el primer array no hay los siguientes elementos del segundo array: ...
*             En el segundo array no hay los siguientes elementos del primer array: ....
*
***************************************************************************************************************/

function leerEntero(msg,limite1,limite2) {
    let numero
    do {
       numero=prompt(msg)
    } while (isNaN(numero)||!Number.isInteger(parseFloat(numero))||parseInt(numero)<limite1||parseInt(numero)>limite2)
    return parseInt(numero)
}

let n=leerEntero("Longitud del array",1,100)
const vector1=Array.from({length:n},()=>Math.floor(Math.random()*200)-100)
const vector2=Array.from({length:n},()=>Math.floor(Math.random()*200)-100)

// Elementos de vector1 que están en vector2
function enVector1(vector1,vector2) {
    return vector1.filter((el)=>vector2.includes(el))
}

// Elementos de vector1 que no están en vector2
function enVector2(vector1,vector2) {
    return vector2.filter((el)=>!vector1.includes(el))
}

console.log("Vector1 ",vector1)
console.log("Vector2 ",vector2)
console.log("enVector1",enVector1(vector1,vector2))
console.log("enVector2",enVector2(vector1,vector2))