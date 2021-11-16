/***************************************************************************************************************
*  
*   Objetivo: El número de Euler, e ≈ 2,71828, puede ser representado como la siguiente suma infinita:
*
*                     e =1/0!+1/1!+1/2!+1/3!+1/4!+…
*
*             n! es el factorial de un numero entero n y es el producto de 1 hasta n (0!=1)
*
*                           4! = 4 * 3 * 2 * 1
*
*             Hay que calcular el valor aproximado de "e" hasta que la diferencia entre dos sumandos
*             consecutivos sea menor que 0,0001
*
*   Entrada : 
*
*
*   Salida  : 
*
*
***************************************************************************************************************/

// Recursiva
function factorialRecursiva(n) {
    if (n===0||n===1)
       return 1
    else
        return n*factorialRecursiva(n-1)
}

// Iterativa
function factorialIterativa(n) {
    if (n===0)
       return 1
    else {
        let factorial=1
        for (let i=1;i<=n;i++)
           factorial*=i
        return factorial
    }
}

let numeroE=1
let i=1
let termino1=1/factorialRecursiva(i)
let termino2=1/factorialIterativa(i+1)
while (termino1-termino2>0.0001) {
    numeroE+=termino1+termino2
    i+=2
    termino1=1/factorialRecursiva(i)
    termino2=1/factorialIterativa(i+1)
}

console.log(`Termino1: ${termino1}`)
console.log(`Termino2: ${termino2}`)
console.log(`Numero E: ${numeroE}. Por libreria ${Math.E}`)
