/***************************************************************************************************************
*  
*   Objetivo: Solicitar al usuario que visita la página dos números enteros y mostrar en la página HTML el resultado de 
*             sumarlos, restarlos, multiplicarlos y dividirlos
*
*
*   Entrada : Dos números enteros: numero1, numero2
*
*
*   Salida  : La suma de numero1 y numero2 es: numero1+numero2 
*             La resta de numero1 y numero2 es: numero1-numero2 
*             El producto de numero1 y numero2 es: numero1*numero2 
*             La division de numero1 entre numero2 es: numero1/numero2 
*
*   Notas   : Ten en cuenta que la división entre los números puede dar un número con muchos decimales
*             ¿Cómo podemos limitar el número de decimales que se mostrarán?
*
***************************************************************************************************************/

function leerEntero(i) {
    let numero
    do {
       numero=prompt(`Dame el entero número${i}: `)
    } while (isNaN(numero)||!Number.isInteger(parseFloat(numero)))
    return parseInt(numero)
}

let numero1=leerEntero(1)
let numero2=leerEntero(2)

document.write(`La suma de ${numero1} y ${numero2} es ${numero1+numero2}<br>`)
document.write(`La resta de ${numero1} y ${numero2} es ${numero1-numero2}<br>`)
document.write(`El producto de ${numero1} y ${numero2} es ${numero1*numero2}<br>`)
document.write(`La división de ${numero1} entre ${numero2} es ${(numero1/numero2).toFixed(2)}<br>`)