/***************************************************************************************************************
*  
*   Objetivo: Solicita al usuario el porcentaje de acierto en un examen tipo test y muestra la cualificación según la nota
*             según la siguiente tabla
*
*                Cualificación    Porcentaje
*                     A             90-100
*                     B             80-90
*                     C             70-79
*                     D             60-69
*                     F             0-59
*
*   Entrada : nota
*
*
*   Salida  : El examen se cualifica con un XXX
*
*
***************************************************************************************************************/

function leerPorcentaje() {
    let numero
    do {
       numero=prompt(`Dame el porcentaje de acierto: `)
    } while (isNaN(numero)||parseFloat(numero)<0||parseFloat(numero)>100)
    return parseFloat(numero)
}

porcentaje=leerPorcentaje()
salida="El porcentaje de aciertos en el test se cualifica con un "
switch (true) {
    case (porcentaje>=90): salida+=" A"
                           break;
    case (porcentaje>=80): salida+=" B"                        
                           break;
    case (porcentaje>=70): salida+=" C"                        
                           break;
    case (porcentaje>=60): salida+=" D"                        
                           break;
    default: salida+=" F"
}

document.write(salida)