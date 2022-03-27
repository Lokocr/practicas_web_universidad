const impuesto = 0.13;
let baseImponible = parseFloat( prompt("Introduce la base imponible"));
let codigoPromocion = prompt("Introduce el codigo de la promocion");


const IVA = baseImponible * impuesto;
const precioConIVA = baseImponible + IVA;

let montoDescuentoPromo = 0;

switch (codigoPromocion) {
    case "mitad":
        montoDescuentoPromo = baseImponible / 2;
        break;
    case "meno5":
        montoDescuentoPromo = baseImponible - 500;
        break;
    case "5porc":
        montoDescuentoPromo = baseImponible * 0.05;
        break;
    case "promo":
        montoDescuentoPromo = baseImponible % 2;
        break;

    default:
        break;
}

const montoTotal = baseImponible - montoDescuentoPromo;
const precioFinal = montoTotal + IVA;

console.info(`El monto de la base imponible es ${baseImponible}`);
console.info(`El monto del IVA es ${IVA}`);
console.info('El monto total con IVA es ' + precioConIVA);
console.info(`El codigo de la promocion es ${codigoPromocion}`);
console.info(`El monto del descuento es ${montoDescuentoPromo}`);1
console.info(`El monto total de la compra es ${precioFinal}`);
