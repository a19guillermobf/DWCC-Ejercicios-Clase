/***************************************************************************************************************
*  
*   Objetivo: Solicita la fecha de nacimiento de una persona (dia, mes y año) y calcula el número de la suerte
*             El número de la suerte se calcula sumando las cifras obtenidas en la suma
*             Por ejemplo: si la fecha de nacimiento es el 12 de Julio de 1980
*                                  12-7-1980 = 1999
*                                  1+9+9+9 = 28    
*                                  2+8 = 10
*                                  1+0 = 1   <---- Número de la suerte
*
*   Entrada : dia, mes, anho
*
*   Salida  : Como has nacido el dia de mes de año, tu número de la suerte es XXX
*
***************************************************************************************************************/

function leerEntero(msg,limite1,limite2) {
    let numero
    do {
       numero=prompt(msg)
    } while (isNaN(numero)||!Number.isInteger(parseFloat(numero))||parseInt(numero)<limite1||parseInt(numero)>limite2)
    return parseInt(numero)
}

let dia=leerEntero("Dime el dia del mes",1,31)
let mes=leerEntero("Dime el el mes",1,12)
let anho=leerEntero("Dime el año",1800,2200)

// Recursiva
function reducirCadena(cadena) {
    if (cadena.length==1)
       return cadena[0]
    else
        return reducirCadena(cadena.split('').map(el=>parseInt(el)).reduce((anterior,actual)=>anterior+actual).toString())
}
console.log(reducirCadena((dia+mes+anho).toString()))

// Iterativa
function reducirCadena(cadena) {
    while (cadena.length!==1) {
        cadena=cadena.split('').map(el=>parseInt(el)).reduce((anterior,actual)=>anterior+actual).toString()
    }
    return cadena[0]
}

const meses=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
console.log(`Como has nacido el dia ${dia} del mes ${meses[mes-1]} del año ${anho}, tu número de la suerte es ${reducirCadena((dia+mes+anho).toString())}`)
