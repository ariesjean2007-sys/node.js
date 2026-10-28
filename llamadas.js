const modulo = require("./comprobantes.js");

console.log("--- CASO 1: Cliente pide BOLETA (Monto total: 300) ---");
const boletaResultado = modulo.calcularBoleta(300);
if (boletaResultado) {
    console.log(`Subtotal : ${boletaResultado.subtotal.toFixed(2)}`);
    console.log(`Total    : ${boletaResultado.total.toFixed(2)}`);
}

console.log("\n--- CASO 2: Empresario pide FACTURA (Monto base: 300) ---");
const facturaResultado = modulo.calcularFactura(300);
if (facturaResultado) {
    console.log(`Subtotal : ${facturaResultado.subtotal.toFixed(2)}`);
    console.log(`IGV      : ${facturaResultado.igv.toFixed(2)}`);
    console.log(`Total    : ${facturaResultado.total.toFixed(2)}`);
}