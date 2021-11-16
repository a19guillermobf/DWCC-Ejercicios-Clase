/***************************************************************************************************************
*  
*   Objetivo: Juan y su familia se fueron en vacaciones a 3 restaurantes diferentes. Las facturas fueron de
*             XX, YY y ZZ euros. Para darle al camarero una propina justa Juan se otorgará un 20% de la factura 
*             como propina si la factura es menor de 50 euros, 15% si esta entre 50 y 200 euros y 10% si es mayor 
*             de 200 euros. 
*
*   Entrada : Tres valores reales que representa las facturas, p.ej.: 124, 48, 268 euros
*
*
*   Salida  : Mostrar por consola el valor de cada factura con el valor apropiado de propina
*
*
***************************************************************************************************************/

function calcularPropina(cantidad) {
    switch (true) {
        case cantidad<50: return (0.2*cantidad).toFixed(2)
        case cantidad>=50&&cantidad<200: return (0.15*cantidad).toFixed(2)
        case cantidad>=200: return (0.1*cantidad).toFixed(2)
    }
}

let factura1 = {restaurante: "El pollo loco",montante:124,propina: calcularPropina(this.montante)}
let factura2 = {restaurante: "El rey del calamar",montante:48,propina: calcularPropina(this.montante)}
let factura3 = {restaurante: "El delicuous",montante:268,propina: calcularPropina(this.montante)}

/*
let factura1 = {
    restaurante: "El pollo loco",
    montante:124,
    propina: function () {    
        switch (true) {
            case (this.montante<50): return (0.2*this.montante).toFixed(2)
            case (this.montante>=50&&this.montante<200): return (0.15*this.montante).toFixed(2)
            case (this.montante>=200): return (0.1*this.montante).toFixed(2)
    }
}
}

let factura2 = {
    restaurante: "El rey del calamar",
    montante:48,
    propina: function () {    
        switch (true) {
            case (this.montante<50): return (0.2*this.montante).toFixed(2)
            case (this.montante>=50&&this.montante<200): return (0.15*this.montante).toFixed(2)
            case (this.montante>=200): return (0.1*this.montante).toFixed(2)
    }
}
}

let factura3 = {
    restaurante: "El delicuous",
    montante:268,
    propina: function () {    
        switch (true) {
            case (this.montante<50): return (0.2*this.montante).toFixed(2)
            case (this.montante>=50&&this.montante<200): return (0.15*this.montante).toFixed(2)
            case (this.montante>=200): return (0.1*this.montante).toFixed(2)
    }
}
}
*/
let facturas=[factura1,factura2,factura3]

/*
for (let factura of facturas) {
    console.log(`La factura del restaurante "${factura.restaurante}" es de ${factura.montante}. La propina será de ${calcularPropina(factura.montante)}`)
}*/

facturas.forEach((factura)=>console.log(`La factura del restaurante "${factura.restaurante}" es de ${factura.montante}. La propina será de ${calcularPropina(factura.montante)}`))
//facturas.forEach((factura)=>console.log(`La factura del restaurante "${factura.restaurante}" es de ${factura.montante}. La propina será de ${factura.propina()}`))

