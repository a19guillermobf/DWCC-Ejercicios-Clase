/***************************************************************************************************************
*  
*   Objetivo: Comprobar si la cadena introducida por el usuario es un palíndromo (se lee igual al revés).
*             P.j: Dabale arroz a la zorra el abad
*
*
*   Entrada : Cadena de texto
*
*
*   Salida  : La cadena .... (es|no es) un palíndromo
*
*
***************************************************************************************************************/

function palindromo1(cadena) {
    let cadena1=cadena.toUpperCase().replaceAll(" ","").split('').reverse().join('')  /* Eliminamos los espacios, convertimos en array, invertimos
                                                                                          el orden del array y volvemos a convertir en cadena */

    //let cadena1=cadena.toUpperCase().replace(/ /gi,"").split('').reverse().join('')   // Lo mismo con expresiones regulares
    let limite=(cadena1.length%2==0)?cadena1.length/2:(cadena1.length-1)/2           /* Vamos a recorrer la cadena hasta la mitad, pero el limite
                                                                                        depende de si el número de caracteres de la cadena es par
                                                                                        o impar 
                                                                                    */
    for (i=0;i<limite;i++)
       if (cadena1[i]!==cadena1[cadena1.length-i-1])                                 /* Comparamos el caracter inicial con el ultimo, el segundo
                                                                                        caracter con el penultimo, etc.
                                                                                     */
          return false                                                               /* Si hay alguno que no coincide, devolvemos false */
    return true                                                                      /* Si llegamos hasta aqui es que no hay ninguna difenencia
                                                                                        por lo que devolvemos true 
                                                                                    */
}

function palindromo2(cadena) {
    
    let cadena1=cadena.toUpperCase().replaceAll(" ","")                                 // Cadena sin espacios
    let cadena2=cadena.toUpperCase().replaceAll(" ","").split('').reverse().join('')    // Cadena al reves sin espacios
    for (i=0;i<cadena1.length;i++)                                                      // Recorremos la cadena y comparamos cada letra
       if (cadena1[i]!==cadena2[i])                                                     // Si hay alguna diferente, salimos y ==> false
          return false
    //return cadena1===cadena2
    return true                                                                         // Si llegamos aqui, es que todas son iguales ==> true
}

/* Recursiva */
function palindromo3(cadena) {
    let cadena1=cadena.toUpperCase().replaceAll(" ","")                            // Cadena sin espacios
    if (cadena.length==1)                                                          // Si la cadena tiene 1 caracter devolvemos true. Es el caso base
       return true                                                                 // Si llegamos aqui es que todas las llamadas a la funcion son true
    else {
        if (cadena[0]==cadena[cadena.length-1])                                    // Comparamos la primera letra con la ultima. Si son iguales empleo el 
            return true&&palindromo3(cadena.substring(1,cadena.length-1))          // operador cortocircuito and con la funcion con el resultado de llamar       
        else                                                                       // a la función con la cadena a la que se le quita la primera y ultima letra
            return false                                                           // Si son diferentes, la funcion devuelve false */
    }
}

//console.log(palindromo1("Dabale   arroz a la zorra el abad"))
//console.log(palindromo2("Dabale   arroz a la zorra el abad"))
//console.log(palindromo3("Dabale   arroz a la zorra el abad"))
