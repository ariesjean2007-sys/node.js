// Catálogo de productos tecnológicos disponibles
const productos = [
    { id: 1, nombre: "Laptop Gamer", precio: 2500 },
    { id: 2, nombre: "Smartphone 5G", precio: 1200 },
    { id: 3, nombre: "Audífonos Bluetooth", precio: 150 },
    { id: 4, nombre: "Teclado Mecánico", precio: 300 },
    { id: 5, nombre: "Monitor 4K", precio: 800 }
];

/**
 * Calcula el desglose para una Boleta (la tienda asume/incluye el IGV en el total).
 * @param {number} montoTotal 
 */
function calcularBoleta(montoTotal) {
    if (montoTotal === undefined || typeof montoTotal !== 'number' || montoTotal <= 0) {
        console.log("Error: El monto total debe ser un número válido mayor a cero.");
        return;
    }

    const subtotal = montoTotal / 1.18;
    const igv = montoTotal - subtotal;

    return {
        tipo: "BOLETA DE VENTA",
        subtotal: subtotal,
        igv: igv,
        total: montoTotal
    };
}

/**
 * Calcula el desglose para una Factura (calcula IGV sobre el monto base/subtotal).
 * @param {number} subtotal 
 */
function calcularFactura(subtotal) {
    if (subtotal === undefined || typeof subtotal !== 'number' || subtotal <= 0) {
        console.log("Error: El subtotal debe ser un número válido mayor a cero.");
        return;
    }

    const igv = subtotal * 0.18;
    const total = subtotal + igv;

    return {
        tipo: "FACTURA ELECTRÓNICA",
        subtotal: subtotal,
        igv: igv,
        total: total
    };
}

// Exportar productos y funciones
module.exports.productos = productos;
module.exports.calcularBoleta = calcularBoleta;
module.exports.calcularFactura = calcularFactura;