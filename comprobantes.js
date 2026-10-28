function calcularBoleta(montoTotal) {
    if (montoTotal === undefined) {
        console.log("Error: es obligatorio el monto total");
        return;
    }

    if (typeof montoTotal !== 'number') {
        console.log("Error: el valor para el monto total debe ser numérico");
        return;
    }

    // Desglose para Boleta (IGV 18% incluido)
    const subtotal = montoTotal / 1.18;
    const igv = montoTotal - subtotal;

    return {
        subtotal: subtotal,
        igv: igv,
        total: montoTotal
    };
}

function calcularFactura(subtotal) {
    if (subtotal === undefined) {
        console.log("Error: es obligatorio el subtotal");
        return;
    }

    if (typeof subtotal !== 'number') {
        console.log("Error: el valor para el subtotal debe ser numérico");
        return;
    }

    // Desglose para Factura (Calculando IGV 18%)
    const igv = subtotal * 0.18;
    const total = subtotal + igv;

    return {
        subtotal: subtotal,
        igv: igv,
        total: total
    };
}

module.exports.calcularBoleta = calcularBoleta;
module.exports.calcularFactura = calcularFactura;