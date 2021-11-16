/***************************************************************************************************************
*  
*   Objetivo: Solicita un texto y una palabra.
*
*
*   Entrada : cadenas de texto: texto, palabra
*
*
*   Salida  : Indica todas las posiciones en las que se encuentra la palabra dentro de texto
*
*
***************************************************************************************************************/

/* Se puede hacer de la misma forma que el ejercicio 15, pero esta vez con palabras
   Tenemos que contar palabras enteras, por lo que antes de buscarla añadimos un espacio en blanco antes y otro despues de la palabra
   por si está en el medio de la cadena, un espacio despues si esta en el principio de la cadena o un espacio antes si esta al final
   de la cadena
   Se pueden hacer versiones de la función como el ejercicio 15
*/

function contarPalabras(cadena,palabra) {

    function palabraCompleta(cadena,palabra,encontrada) {
        switch (true) {
            case (encontrada===0&&cadena[encontrada+palabra.length]===" "):
                                                                 return true
            case (encontrada===(cadena.length-palabra.length)&&cadena[cadena.length-palabra.length-1]===" "):                                                                            
                                                                 return true
            case (cadena[encontrada-1]===" "&&cadena[encontrada+palabra.length]===" "):     
                                                                 return true
            default: return false
        }        
    }

    let npalabras=0
    let encontrada=cadena.indexOf(palabra,0)                              // Buscamos la primera ocurrencia de palabra desde el principio de la cadena    
    while (encontrada!=-1) {                                              // Mientras encontremos la palabra
        if (palabraCompleta(cadena,palabra,encontrada)) 
            npalabras++                                                   // Aumentamos el contador
        encontrada=cadena.indexOf(palabra,encontrada+1)                   // Volvemos a buscar la palabra, pero desde la ultima posicion en que la encontramos
    }
    return npalabras
}

function leerCadena(msg) {
    let resultado
    do {
        resultado=prompt(`${msg}`)
    } while (resultado=="")
    return resultado
}

let cadena=leerCadena("Cadena:")
let palabra=leerCadena("Palabra a buscar en la cadena:")
console.log(contarPalabras(cadena.toLocaleUpperCase(),palabra.toUpperCase()))

