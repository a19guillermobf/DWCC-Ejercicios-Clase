/***************************************************************************************************************
*  
*   Objetivo: Solicitar al usuario que visita la página su edad y mostrar un mensaje en función de ella
*
*
*   Entrada : edad
*
*
*   Salida  : Si la edad es menor que 30 el mensaje debe ser: ! Ponte a trabajar !
*             Si la edad está entre 30 y 64 el mensaje debe ser: ! Que ganas tengo de jubilarme !
*             Si la edad es superior a 65 el mensaje debe ser: ! Descansa un poco !
*
*   Notas   : Debemos comprobar que la edad sea un número entero mayor que 0 (sino indicaremos el error)
*             La edad no puede ser superior a 120
*
***************************************************************************************************************/


function leerEdad() {
    let numero
    do {
       numero=prompt(`Dime tu edad: `)
    } while (isNaN(numero)||!Number.isInteger(parseFloat(numero))||parseInt(numero)<1||parseInt(numero)>119)
    return parseInt(numero)
}

let edad=leerEdad()
let salida
if (edad<30)
   salida="! Ponte a trabajar !"
else {
    if (edad>=30&&edad<=64)
       salida="! Que ganas tengo de jubilarme !"
    else
       salida="! Descansa un poco !"
}

document.write(salida)