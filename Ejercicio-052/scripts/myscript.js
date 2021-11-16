/***************************************************************************************************************
*  
*   Objetivo: Crear un array con objetos persona y determinar cuantos son mayores de edad
*             Devolver el promedio de edad total
*             Devolver el promedio de las personas mayores de edad
*             Devolver el promedio de las personas menores de edad
*
*   Entrada : 
*
*
*   Salida  : 
*
*
***************************************************************************************************************/

function leerEntero() {
    let numero
    do {
       numero=prompt(`Dame un numero entero positivo: `)
    } while (isNaN(numero)||!Number.isInteger(parseFloat(numero))||parseInt(numero)<0)
    return parseInt(numero)
}

const nombres=["Juan","Ana","Pepe","Rosa","Luis","Fernanda","Maria","Antonio","Ricardo","Cristina","Marta"]
const personas=Array.from({length:leerEntero()},()=>{return {nombre:nombres[Math.floor(Math.random()*nombres.length)],edad:Math.floor(Math.random()*50)}})

let edadMedia=personas.reduce((anterior,actual)=>{ return {nombre:"",edad:anterior.edad+actual.edad}}).edad/personas.length
personasMayor18=personas.filter((el)=>el.edad>=18)
personasMenor18=personas.filter((el)=>el.edad<18)

let edadMediaMayor18
let edadMediaMenor18

switch(true) {
    case (personasMayor18.length>1): edadMediaMayor18=personasMayor18.reduce((anterior,actual)=>{ return {nombre:"",edad:anterior.edad+actual.edad}}).edad/personasMayor18.length
                                    break
    case personasMayor18.length===1: edadMediaMayor18=personasMayor18[0].edad
                                    break
    default: edadMediaMayor18="No hay personas mayores de 18"
}

switch(true) {
    case (personasMenor18.length>1): edadMediaMenor18=personasMenor18.reduce((anterior,actual)=>{ return {nombre:"",edad:anterior.edad+actual.edad}}).edad/personasMenor18.length
                                    break
    case personasMenor18.length===1: edadMediaMenor18=personasMenor18[0].edad
                                    break
    default: edadMediaMenor18="No hay personas menores de 18"
}

console.log(personas)
console.log(personasMayor18)
console.log(personasMenor18)

console.log(edadMedia)
console.log(edadMediaMayor18)
console.log(edadMediaMenor18)

















