/***************************************************************************************************************
*  
*   Objetivo: Realizar el producto de dos matrices bidimensionales
*
*
*
*   Entrada : 
* 
*
*   Salida  : 
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

const aleatorio = (min,max) => Math.floor(min+(max-min)*Math.random())

let filas=leerEntero("Filas",1,100)
let columnas=leerEntero("Columnas",1,100)

let matriz1=Array.from({length:filas},()=>Array.from({length:columnas},()=>aleatorio(1,50)))
let matriz2=Array.from({length:filas},()=>Array.from({length:columnas},()=>aleatorio(1,50)))

function multiplicar(A, B) {
    var resultado = new Array(A.length).fill(0).map(fila => new Array(B[0].length).fill(0));
    return resultado.map((fila, i) => {
        return fila.map((valor, j) => {
            return A[i].reduce((sum, el, k) => sum + (el*B[k][j]) ,0)
        })
    })
} 

// Con arrow function
let matrizProd = (A, B) =>
  A.map((fila, i) =>
    B[0].map((_, j) =>
      fila.reduce((total, _, n) =>
        total + A[i][n] * B[n][j], 0
      )
    )
)
 
var imprimir = matriz => matriz.forEach(fila => document.write(`&nbsp;&nbsp;${fila.join(' ')}<br/>`)) 

console.log(matriz1)
console.log(matriz2)
console.log(multiplicar(matriz1,matriz2))
imprimir(matrizDot(matriz1,matriz2))