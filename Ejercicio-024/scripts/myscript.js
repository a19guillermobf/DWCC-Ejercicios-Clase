/***************************************************************************************************************
*  
*   Objetivo: Solicitamos un número entero positivo que representa el número de segundos que estamos confinados
*             por una pandemia
*
*   Entrada : segundos
*
*
*   Salida  : Mensaje tal como: "Hemos estado confinados A semanas, B días, C horas, D minutos, E segundos"
*
*
***************************************************************************************************************/


const SEMANA=7*24*60*60     // segundos en una semana
const DIA=24*60*60          // segundos en un dia
const HORA=60*60            // segundos en una hora
const MINUTO=60             // segundos en un minuto

function leerEntero(msg) {
    let numero
    do {
       numero=prompt(msg)
    } while (isNaN(numero)||!Number.isInteger(parseFloat(numero))||parseInt(numero)<0||parseInt(numero>125))
    return parseInt(numero)
}

const resultado=[]
resultado.push(leerEntero("Numero de segundos confinados"))

const salida=["semanas","dias","horas","minutos"]
const segundos=[SEMANA,DIA,HORA,MINUTO]
for (let i=0;i<segundos.length;i++) {
    resultado.push(resultado[resultado.length-1]%segundos[i])
    resultado[i]=parseInt(resultado[resultado.length-2]/segundos[i])
    salida[i]=`${resultado[i]} ${salida[i]}`
}
salida.push(`${resultado[resultado.length-1]} segundos`)
console.log(`Hemos estado confinados ${salida.join(',')}`)
