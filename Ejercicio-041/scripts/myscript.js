/***************************************************************************************************************
*  
*   Objetivo: Determinar si un número es perfecto o no a través de una función
*             Un número es perfecto cuando el número es igual a la suma de sus divisores.
*
*   Entrada : entero n
*
*
*   Salida  : El número n (es|no es) perfecto !
*
*
***************************************************************************************************************/

function leerEntero(msg) {
    let numero
    do {
       numero=prompt(msg)
    } while (isNaN(numero)||!Number.isInteger(parseFloat(numero))||parseInt(numero)<1)
    return parseInt(numero)
}

/*
// Funcion relativamente clasica
function divisores(num) {
    const divNum=[]
    const numeros=Array.from({length:num-1},(el,i)=>i+1)
    numeros.forEach((el)=>{
        if (num%el===0)
           divNum.push(el)
    })
    return divNum
}
*/

// Funcion con filter
function divisores(num) {
    return Array.from({length:num-1},(el,i)=>i+1).filter(el=>num%el===0)
}

function esPerfecto(num) {
    return divisores(num).reduce((anterior,actual)=>anterior+actual)===num
}

let numero=leerEntero("Dame un numero entero")
console.log(`El numero ${numero} ${esPerfecto(numero)?"es perfecto":"no es perfecto"}`)
