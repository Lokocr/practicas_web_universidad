let mes = parseInt( prompt("Introduce un mes del 1 al 12"));
let montoCompra = parseFloat( prompt("Introduce el monto de la compra"));

const descuento = 0.15;
let montoFinalCompra = 0;

if(mes === 10 ){
    montoFinalCompra = montoCompra - ( montoCompra * descuento);
}
else 
{
    montoFinalCompra = montoCompra;
}

console.log(`El monto final de la compra es ${montoFinalCompra}`);
