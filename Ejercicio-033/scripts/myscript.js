/***************************************************************************************************************
*  
*   Objetivo: Adivina un número. Escojer aleatoriamente un número entero entre 1 y 100. Al abrir la página web 
*             debe ir solicitando números entre 1 y 100 hasta que el usuario acierte el número. 
*             Al finalizar el juego se indica mediante una ventana de alerta el número de intentos,
*             no teniendo en cuenta intentos en los que se introduce un dato incorrecto.
*
*   Entrada : un número entero (en cada intento)
*
*   Salida  : ! Has acertado ! Has necesitado XX intentos
*             ! Has fallado ! El número que tienes que adivinar es (mayor|menor)
*
***************************************************************************************************************/

function leerEntero() {
    let numero
    do {
       numero=prompt(`Dame tu elección: `)
    } while (isNaN(numero)||!Number.isInteger(parseFloat(numero))||parseInt(numero)<1||parseInt(numero)>100)
    return parseInt(numero)
}

const elegir = (min,max) => Math.floor(min+(max-min)*Math.random())

let intentos=1
let salir=false
let aleatorio=elegir(1,100)
do {
    let opcion=leerEntero()
    switch(true) {
        case (opcion>aleatorio):
            salida=`<p>Intento ${intentos}: ! Has fallado ! El número que tienes que adivinar es menor</p>`
            intentos++
            break;
        case (opcion<aleatorio):
            salida=`<p>Intento ${intentos}: ! Has fallado ! El número que tienes que adivinar es mayor</p>`
            intentos++
            break;
        default: 
            salida=`<p>Intento ${intentos}: ! Has acertado. Has necesitado ${intentos} intentos</p>`
            salir=true
            break;
    }
    document.write(salida)
} while (!salir)