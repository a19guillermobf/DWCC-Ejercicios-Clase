/***************************************************************************************************************
*  
*   Objetivo: Solicita al usuario el valor de los catetos de un triángulo rectángulo y calcula la hipotenusa del
*             triángulo empleando el teorema de Pitágoras (hipotenusa=raiz_cuadrada(catetoA²+catetoB²))
*
*   Entrada : catetoA, catetoB
*
*
*   Salida  : La hipotenusa del triángulo con catetos catetoA y catetoB es XXXX
*
*
***************************************************************************************************************/

function leerFloat(msg) {
    let numero
    do {
        numero=parseFloat(prompt(`${msg}`))
    } while (isNaN(numero))
    return numero
}

// Version con funcion declarada
function hipotenusa(a,b) {
    return Math.sqrt(Math.pow(a,2)+Math.pow(b,2)).toFixed(3)
}

// Version con Arrow Function
let calcularHipotenusa=(a,b)=>Math.sqrt(Math.pow(a,2)+Math.pow(b,2)).toFixed(3)

function sacarEnConsola(msg) {
   console.log(msg)
}

function sacarEnDocumento(msg) {
   document.write(msg)
}

function imprimirResultado(msg,callBackFunction) {
    callBackFunction(msg)
}

let cateto1=leerFloat("Cateto1: ")
let cateto2=leerFloat("Cateto2: ")

let resultadoHipotenusa=`La hipotenusa de un triangulo rectángulo con catetos ${cateto1} y ${cateto2} es ${hipotenusa(cateto1,cateto2)}`
//let resultadoCalcularHipotenusa=`La hipotenusa de un triangulo rectángulo con catetos ${cateto1} y ${cateto2} es ${calcularHipotenusa(cateto1,cateto2)}`

// Sacar resultados con callbacks
imprimirResultado(resultadoHipotenusa,sacarEnConsola)
// imprimirResultado(resultadoCalcularHipotenusa,sacarEnDocumento)
