/***************************************************************************************************************
*  
*   Objetivo: Solicita dos números enteros. Muestra el cuadrado de todos los números entre ellos
*
*   Entrada : inicio, fin
*
*
*   Salida  : inicio², (inicio+1)², ..... (fin)²
*
*
***************************************************************************************************************/


function leerEntero(i) {
    let numero
    do {
       numero=prompt(`Dame el numero entero ${i}: `)
    } while (isNaN(numero)||!Number.isInteger(parseFloat(numero)))
    return parseInt(numero)
}

let inicio=leerEntero(1)
let fin
do {
   fin=leerEntero(2)
   if (fin<inicio)
      alert(`El número entero debe ser superior a ${inicio}`)
} while (fin<inicio)

salida=""
for (i=inicio;i<fin;i++) {
   salida+=`${i*i},`
   // salida+=`${Math.pow(i,2)}`
}
salida+=`${fin*fin}`
document.write(salida)