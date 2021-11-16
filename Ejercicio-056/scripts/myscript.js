/***************************************************************************************************************
*  
*   Objetivo: Crear una lista de la compra. Es un array multidimensional. El primer elemento
*             de cada subarray es una cadena con el nombre del producto a comprar, el segundo
*             elemento representa la cantidad
*
*                    ["Chocolate",3]
*
*   Entrada : 
*
*
*   Salida  : 
*
*
***************************************************************************************************************/

function leerEntero(msg,limite1,limite2) {
    let numero
    do {
       numero=prompt(msg)
    } while (isNaN(numero)||!Number.isInteger(parseFloat(numero))||parseInt(numero)<limite1||parseInt(numero)>limite2)
    return parseInt(numero)
}

const productosVector=["Chocolate","Leche","Harina","Aceite","Azucar","Tomate","Cereales","Patatas","Lechuga","Pescado","Carne"]
const cantidadesProductos=[1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9]

const aleatorio = (min,max) => Math.floor(min+(max-min)*Math.random())

let nProductos=leerEntero("Numero de productos de la lista",1,10)
const lista=Array.from({length:nProductos},el=>[productosVector[aleatorio(0,productosVector.length)],cantidadesProductos[aleatorio(0,cantidadesProductos.length)]])

console.log(lista)