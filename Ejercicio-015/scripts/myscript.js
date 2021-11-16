/***************************************************************************************************************
*  
*   Objetivo: Solicitar al usuario una cadena de texto y mostrar el número de vocales
*
*
*   Entrada : cadena de texto  (p.j: La verdad saldrá a la luz)
*
*
*   Salida  : Número de vocales (p.j: 8)
*
*
***************************************************************************************************************/

/* Programando al estilo clásico */
/* Inconveniente: Estamos fijando las letras a buscar. Eso hace la función muy rígida, poco flexible, y 
                  en caso de querer buscar otras letras tendríamos que modificar el código a mano.
                  Es posible cambiarla pasando como segundo parametro un array o cadena con los valores a buscar
                  y pasaríamos a algo como la siguiente versión de función.
*/
function contarVocales(cadena) {
   cadena=cadena.toLowerCase()
   let contador=0
   for (let i=0;i<cadena.length;i++) {
       switch (cadena[i]) {
           case 'a':
           case 'e':
           case 'i':
           case 'o':
           case 'u': contador++
       }
   }
   return contador
}
 
/* Programando empleando indexOf */
/* Versión más flexible, pero sólo para buscar una letra */
/* En caso de varias letras, tendríamos que llamar varias veces a la función, lo que perjudica el rendimiento */
function contarLetra1(cadena,letra) {
    let nletras=0
    let encontrada=cadena.indexOf(letra,0)                   // Buscamos la primera ocurrencia de letra desde el principio de la cadena
    while (encontrada!=-1) {                                 // Mientras encontremos la letra
        nletras++                                            // Aumentamos el contador
        encontrada=cadena.indexOf(letra,encontrada+1)        // Volvemos a buscar la letra, pero desde la ultima posicion en que la encontramos
    }
    return nletras
}

/* Versión mucho más flexible */
/* Realizamos la búsqueda al revés: buscamos en letras (las letras a buscar) cada uno de los caracteres de cadena 
   y si lo encontramos, incrementamos el contador
*/
function contarLetras2(cadena,letras) {
   let contador=0
   for (let i=0;i<cadena.length;i++) {                                      // Recorremos toda la cadena
     /*if (letras.indexOf(cadena[i])!=-1)
         contador++*/                                                      // Si la letra i de la cadena está dentro de letras que buscamos
      contador=(letras.indexOf(cadena[i])!=-1)?++contador:contador         // incrementamos contador !! OJO: no vale contador++ !!
   }
   return contador
}

/* Versión recursiva */
/* Siempre son más lentas que las versiones iterativas, pero en determinados tipos de problemas 
   es más fácil encontrar la solución programando de forma recursiva: la funcion se llama a si misma
   Hay que establecer siempre el caso base, el que hace que finalice la recursividad, sino corremos el peligro
   de que se ejecute de forma infinita y se agote la pila de datos (zona de memoria reservada para almacenar datos del programa)
*/
function contarLetra3(cadena,letra,indice,contador) {
   let encontrada=cadena.indexOf(letra,indice)
   if (encontrada!==-1)                                               /* Si encientra la letra */
       return contarLetra3(cadena,letra,encontrada+1,++contador)      /* vuelvo a buscar, pero desde donde la encontré y aumentando el contador */
    else
       return contador
}

//console.log(contarVocales("Una casa de color verde"))
//console.log(contarLetra1("Una casa de color verde","e"))
//console.log(contarLetras2("Una casa de color verde","aeiou"))
//console.log(contarLetra3("Una casa de color verde","d",0,0))
