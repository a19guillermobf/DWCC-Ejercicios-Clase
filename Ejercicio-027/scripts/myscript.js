/***************************************************************************************************************
*  
*   Objetivo: Cuando vemos el pronóstico del tiempo en Estados Unidos no nos enteramos muy bien si va
*             a hacer frio o calor. Crear un script Javascript que solicite una temperatura en grados
*             Fahrenheit y la convierta a grados Celsius. El script puede realizar un comentario sobre el
*             tiempo dependiendo de si la temperatura Celsius es superior o igual a 25 grados, inferior a
*             10 o inferior cero grados. Ten en cuenta que la temperatura Celsius se calcula a través de
*             Celsius = (5/9) * (Fahrenheit-32)
*
*   Entrada : 
*
*
*   Salida  : 
*
*
***************************************************************************************************************/


function leerTemperatura() {
    let numero
    do {
       numero=prompt(`Dame la temperatura Fahrenheit: `)
    } while (isNaN(numero))
    return parseFloat(numero)
}

let celsius = (fahrenheit) => (5/9) * (fahrenheit-32)

let tempFahrenheith=leerTemperatura()
let tempCelsius=celsius(tempFahrenheith)

let comentario=""
switch(true) {
    case (tempCelsius>=25): comentario="Buen tiempo"
                            break
    case (tempCelsius<25&&tempCelsius>10): comentario="Podemos pasear"
                                            break
    case (tempCelsius<10&&tempCelsius>0): comentario="Hace un frio que pela!"
                                            break
    default: comentario="Nos vamos a esquiar!"
}

console.log(comentario)