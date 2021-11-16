/***************************************************************************************************************
*  
*   Objetivo: Generar los n primeros números perfectos
*
*
*   Entrada : número entero n
*
*
*   Salida  : 
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

let limite=leerEntero(`Numeros perfectos hasta el...: `)
const numeros=Array.from({length:limite},(el,i)=>i+2)

// Con forEach
/*
numeros.forEach((el)=>{
    if (esPerfecto(el))
       console.log(el)
}
)
*/

// Con filter
console.log(`Los números perfectos hasta ${limite} son: ${numeros.filter(el=>esPerfecto(el)).join(",")}`)
