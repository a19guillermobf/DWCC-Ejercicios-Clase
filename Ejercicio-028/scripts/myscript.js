/***************************************************************************************************************
*  
*   Objetivo: Realizar un script que solicite una fecha a un usuario (día, mes y año) y compruebe es
*             correcta o existe. Hay que tener en cuenta que el año puede ser bisiesto, y por tanto, si es
*             bisiesto (divisible por 4 o por 400, pero no es divisible por 100), Febrero tendrá 29 días.
*
*   Entrada : dia, mes, anho
*
*
*   Salida  : La fecha dia/mes/anho (es|no es) correcta
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

function bisiesto(anho) {
    return (anho%400===0&&anho%100!==0)||(anho%4===0)
}

// Solucion1 - No es necesario emplear la funcion bisiesto
let anho=leerEntero("Dame el anho",1000,2300)
let mes=leerEntero("Dame el mes",1,12)
let dia
do {
    dia=leerEntero("Dame el dia",1,31)
    let fecha=new Date(anho,mes-1,dia-1)
    if (fecha.getMonth()+1!=mes)
       alert("Ese dia no existe en el calendario")
} while (fecha.getMonth()+1!=mes)
console.log(`La fecha ${dia}\\${mes}\\${anho} es correcta`)

/*
// Solucion 2 - Con la funcion bisiesto
let salida=""
switch (mes) {
    case 3,7,9,11: salida=(dia<31)?"es correcta":"no es correcta"
                   break
    case 2: salida=(bisiesto(anho)&&dia<30)?"es correcta":"no es correcta"
            break
    default: salida="es correcta"
}

console.log(`La fecha ${dia}\\${mes}\\${anho} `+ salida)
*/