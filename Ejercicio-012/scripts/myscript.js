/***************************************************************************************************************
*  
*   Objetivo: Pedimos reiteradamente cadenas al usuario hasta que la cadena de texto introducida es "cancelar". 
*
*
*   Entrada : cadenas de texto
*
*
*   Salida  : Cada cadena introducida se muestra en un párrafo del documento HTML
*
*
***************************************************************************************************************/

/*
let cadena
let salida=""
do {
    cadena=prompt(`Dame una cadena: `)
    if (cadena!=="cancelar")
        salida+=cadena+" "
} while (cadena!=="cancelar")
*/

/*
let cadena=prompt(`Dame una cadena: `)
let salida=""
while (cadena!=="cancelar") {
  salida+=cadena+" "
  cadena=prompt(`Dame una cadena: `)
}
*/

let cadena
let salida=""
for (;;) {
    cadena=prompt(`Dame una cadena: `)
    if (cadena!=="cancelar")
        salida+=cadena+" "
    else
        break;
}

document.write(salida)