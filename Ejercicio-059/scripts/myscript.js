/***************************************************************************************************************
*  
*   Objetivo: Record Collection
*
*   Tenemos un objeto literal que representa nuestra coleccion de albunes musicales. 
*   Cada album tiene un único identidicador con su clave y varias propiedades. No todos los albunes tienen completa toda la informacion.
*
*   La funcion updateRecords toma el objeto discos, que contiene la colección musical de discos musicales, un id, que representa un disco concreto, 
*   una propiedad (prop, como artista o canciones), y un valor. 
*
*   Hay que completar la funcion empleando las siguientes reglas  para modificar el objeto que se pasa a la función:
*
*   La funcion debe devolver la coleccion de albunes completa
*   Si prop no es canciones y su valor no es una cadena vacia, actualiza o establece el valor del prop de ese album.
*   Si prop es canciones pero el album no tiene la propiedad canciones, crea un array vacio y añade el valor a el.
*   Si prop es canciones y su valor no es una cadena vacia, añade su valor al final del array canciones.
*   Si valor es una cadena vacia, borra la propiedad prop del album.
*
*   Note: Se emplea una copia del objeto recordCollection para las pruebas
*
*    Salida  : 
*
*    After updateRecords(recordCollection, 5439, "artista", "ABBA"), El artista debe ser la cadena ABBA
*    After updateRecords(recordCollection, 5439, "canciones", "Take a Chance on Me"), canciones debería tener como ultimo elemento la cadena Take a Chance on Me.
*    After updateRecords(recordCollection, 2548, "artista", ""), El artista no debería tener valor
*    After updateRecords(recordCollection, 1245, "canciones", "Addicted to Love"), canciones debería tener en el ultimo elemento la cadena Addicted to Love.
*    After updateRecords(recordCollection, 2468, "canciones", "Free"), canciones debería tener como primer elemento la cadena 1999.
*    After updateRecords(recordCollection, 2548, "canciones", ""), canciones no debería tener valores
*    After updateRecords(recordCollection, 1245, "tituloDisco", "Riptide"), tituloDisco debería ser la cadena Riptide
*
***************************************************************************************************************/

const recordCollection = {
    2548: {
      tituloDisco: 'Slippery When Wet',
      artista: 'Bon Jovi',
      canciones: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      tituloDisco: '1999',
      artista: 'Prince',
      canciones: ['1999', 'Little Red Corvette']
    },
    1245: {
      tituloDisco: 'Robert Palmer',
      canciones: []
    },
    5439: {
      tituloDisco: 'ABBA Gold'
    }
  };
  
function updateRecords(discos, id, prop, value) {
  return discos;
}
  
updateRecords(recordCollection, 5439, 'artista', 'ABBA');
updateRecords(recordCollection, 5439, "canciones", "Take a Chance on Me")
updateRecords(recordCollection, 2548, "artista", "")
updateRecords(recordCollection, 1245, "canciones", "Addicted to Love")
updateRecords(recordCollection, 2468, "canciones", "Free")
updateRecords(recordCollection, 2548, "canciones", "")
updateRecords(recordCollection, 1245, "tituloDisco", "Riptide")
