/***************************************************************************************************************
*  
*   Objetivo: Solicitamos al usuario su peso (en kg) y su estatura (en metros). Calculamos el índice de masa 
*             corporal, lo almacene en una variable y muestre por pantalla la frase "Tu índice de masa corporal 
*             es <imc>", donde <imc> corresponde al indice de masa corporal redondeado con dos decimales e indique
*             si hay riesgo de enfermedad coronaria.
*
*             El índice de masas corporal es el cociente entre el peso del individuo en kilos y el cuadrado de su
*             estatura en metros.        
*
*             El riesgo de que una persona sufra enfermedades coronarias depende de su edad y su índice de masa
*             corporal:
*                               Edad<45     Edad>=45
*                   IMC<=22.0    bajo         medio
*                   IMC>22.0    medio        alto
*
*   Entrada : peso, estatura
*
*
*   Salida  : "Tu índice de masa corporal es <imc>. Tienes un riesgo ..... de enfermedad coronaria"
*
*
***************************************************************************************************************/

function leerEntero(msg) {
    let numero
    do {
       numero=prompt(msg)
    } while (isNaN(numero)||!Number.isInteger(parseFloat(numero))||parseInt(numero)<0||parseInt(numero>125))
    return parseInt(numero)
}

function leerNumero(msg) {
    let numero
    do {
       numero=prompt(msg)
    } while (isNaN(numero))
    return parseFloat(numero)
}

let peso=leerNumero("Dame tu peso en Kg")
let estatura=leerNumero("Dame tu estatura en metros")
let edad=leerEntero("Dame tu edad")

let riesgo
let imc=(peso/Math.pow(estatura,2)).toFixed(2)
switch(true) {
    case (imc<=22&&edad<45): riesgo="bajo"
                             break;
    case ((imc>22&&edad<45)||(imc<=22&&edad>=45)): riesgo="medio"
                                                   break;
    case (imc>22&&edad>=45): riesgo="alto"
}

console.log(`Tu índice de masa corporal es ${imc}. Tienes un riesgo ${riesgo} de enfermedad coronaria`)