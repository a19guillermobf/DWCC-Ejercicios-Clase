/***************************************************************************************************************
*  
*   Objetivo: Mostrar la serie de fibonacci hasta el número indicado por el usuario
*             Cada elemento de la serie se calcula sumando los dos anteriores. Se empieza con 0 y 1
*
*   Entrada : n
*
*
*   Salida  : 0,1,1,2,3,5,8,13,....
*
*
***************************************************************************************************************/

function leerEntero() {
    let numero
    do {
       numero=prompt(`Dame un número entero positivo: `)
    } while (isNaN(numero)||!Number.isInteger(parseFloat(numero))||parseInt(numero)<0)
    return parseInt(numero)
}

/* Version recursiva */
function fibonacci1(n) {
    if (n===0)
       return 0
    else {
        if (n===1)
           return 1
        else
           return fibonacci1(n-1)+fibonacci1(n-2)
    }
}

/* Version iterativa con do...while */
function fibonacci2(n) {
    if (n<=1)
        return n
    else {
       let x=0;let y=1
       let z;let i=0
       do {
          z=x+y
          x=y;y=z
          i++
       } while (i<n-1)
       return z
    }
}

/* Version iterativa con while...do */
function fibonacci3(n) {
    if (n<=1)
        return n
    else {
       let x=0;let y=1
       let z=1;let i=1
       while (i<=n-1) {
          z=x+y
          x=y;y=z
          i++
       }
       return z
    }
}

/* Version iterativa con for */
function fibonacci4(n) {
    if (n<=1)
        return n
    else {
        let x=0;let y=1
        let z;
        for (let i=0;i<n-1;i++) {
            z=x+y
            x=y;y=z
        }
        return z
    }
}

/* Version iterativa con arrays */
function fibonacci5(n) {
    const x=[0,1]
    if (n<=x.length-1)
        return x[n]
    else
       for (let i=2;i<=n;i++)
          x.push(x[i-1]+x[i-2])
    return x[x.length-1]
}

/* Vamos calculando el número de fibonacci correspondiente a la posicion n
   y lo vamos imprimiendo. 
   Es menos eficiente si lo que queremos es imprimir todos los fibonacci hasta uno concreto. En tal caso
   es preferible emplear imprimirSalida2
*/
function imprimirSalida1(n,f) {
    let salida=""
    for (let i=0;i<=n;i++) {
        salida+=`${f(i)} `
        console.log(f(i))
    }
    document.write(salida)
}

/* Vamos imprimiendo según generamos los números de fibonacci */
function imprimirSalida2(n) {
    let x=0;let y=1
    let z
    let salida
    salida=(n>=1)?`${x} ${y} `:`${x}`
    for (let i=0;i<n-1;i++) {
        z=x+y
        x=y;y=z
        salida+=`${z} `
    }
    console.log(salida)
    document.write(salida)
}

let n=leerEntero()
//imprimirSalida(n,fibonacci1)
//imprimirSalida2(n)