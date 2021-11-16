/***************************************************************************************************************
*  
*   Objetivo: Profile Lookup
*
*    Tenemos un array de objetos que representa diferentes personas de nuestra lista de contactos.
*    La funcion lookUpProfile toma el nombre de un contacto y una propiedad (prop) como argumentos.
*    La funcion debe comprobar si el nombre el nombre pasado como argumento es el nombre de un contacto y 
*    la propiedad prop es una propiedad de ese contacto.
*    Si es cierto ambas cosas, debe devolver el valor de la propiedad
*    Si el nombre no corresponde con un contacto existente, devolverá una cadena con "No existe tal contacto".
*    Si prop no se corresponde con una propiedad validad de un contacto existente, devolverá la cadena "No existe tal propiedad".
*
*   Salida  : 
*
*       lookUpProfile("Kristian", "lastName") should return the string Vos
*       lookUpProfile("Sherlock", "likes") should return ["Intriguing Cases", "Violin"]
*       lookUpProfile("Harry", "likes") should return an array
*       lookUpProfile("Bob", "number") should return the string No such contact
*       lookUpProfile("Bob", "potato") should return the string No such contact
*       lookUpProfile("Akira", "address") should return the string No such property
*
***************************************************************************************************************/

var contactos = [
    {
        "nombre": "Akira",
        "apellidos": "Laine",
        "telefono": "0543236543",
        "gustos": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "nombre": "Harry",
        "apellidos": "Potter",
        "telefono": "0994372684",
        "gustos": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "nombre": "Sherlock",
        "apellidos": "Holmes",
        "telefono": "0487345643",
        "gustos": ["Intriguing Cases", "Violin"]
    },
    {
        "nombre": "Kristian",
        "apellidos": "Vos",
        "telefono": "unknown",
        "gustos": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(nombre, prop) {
}

lookUpProfile("Akira", "gustos");