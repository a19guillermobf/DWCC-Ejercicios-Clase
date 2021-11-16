/***************************************************************************************************************
*  
*   Objetivo: Determinar cuantas vocales mayúsculas hay en una cadena introducida por el usuario y muestre 
*             el resultado por consola.
*
*   Entrada : cadena
*
*
*   Salida  : número de vocales mayúsculas
*
*
***************************************************************************************************************/

let strUpper="AEIOU"
let cadena=prompt("DDDme UnA cAdena")

let resultado=cadena.split('').map(el=>strUpper.includes(el)?1:0).reduce((anterior,siguiente)=>anterior+siguiente)
console.log(`El número de vocales mayusculas es de ${resultado}`)