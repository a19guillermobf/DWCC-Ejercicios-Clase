/***************************************************************************************************************
*  
*   Objetivo: Crear un objeto persona con nombre y edad y un metodo que determine si es mayor o no de edad
*
*
*   Entrada : 
*
*
*   Salida  : 
*
*
***************************************************************************************************************/

const persona={
    nombre:"Juan",
    edad: 33,
    mayorDeEdad: function () { return this.edad>18 } 
}

console.log(persona.mayorDeEdad())