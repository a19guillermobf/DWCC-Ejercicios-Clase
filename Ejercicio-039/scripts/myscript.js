/***************************************************************************************************************
*  
*   Objetivo: Determinar en un texto el número de palabras, la primera palabra y la última
*
*   Entrada : una cadena
*
*   Salida  : Se muestra el texto(cadena) introducido por el usuario
*             Número de palabras: XXX
*             Primera palabra: YYYYY
*             Última palabra: ZZZZZ
*             Palabras ordenadas de la a a la z: AAA BBBB CCCC DDDD
*             Palabras ordenadas de la z a la a: ZZZ YYYY WWWW 
*
***************************************************************************************************************/

function leerCadena(msg) {
    let resultado
    do {
        resultado=prompt(`${msg}`)
    } while (resultado=="")
    return resultado
}

let expReg=/\b([a-z,0-9]{1,})\b/gi
let texto=leerCadena("Texto:").toLocaleUpperCase()
let palabras=texto.match(expReg)

console.log(`Numero de palabras: ${palabras.length}`)
console.log(`Primera palabra: ${palabras[0]}`)
console.log(`Ultima palabra: ${palabras[palabras.length-1]}`)
console.log(`Palabras ordenadas de a la a la z: ${palabras.sort()}`)
console.log(`Palabras ordenadas de la z a la a: ${palabras.sort().reverse()}`)


