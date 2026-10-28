const readline = require("readline");
const modulo = require("./comprobantes.js");

// Crear la interfaz para recibir datos por consola
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("=================================================");
console.log("    TIENDA DE TECNOLOGÍA - CATÁLOGO DE PRODUCTOS  ");
console.log("=================================================");

// Mostrar el catálogo
modulo.productos.forEach((p) => {
    console.log(`${p.id}. ${p.nombre} - S/ ${p.precio.toFixed(2)}`);
});
console.log("=================================================\n");

// 1. Preguntar por la elección del producto
rl.question("Ingrese el número del producto que desea comprar: ", (opcionProducto) => {
    const idSeleccionado = parseInt(opcionProducto);
    const productoEncontrado = modulo.productos.find(p => p.id === idSeleccionado);

    if (!productoEncontrado) {
        console.log("Error: Producto no válido.");
        rl.close();
        return;
    }

    console.log(`\nHas seleccionado: ${productoEncontrado.nombre} por S/ ${productoEncontrado.precio.toFixed(2)}`);

    // 2. Preguntar el tipo de comprobante
    console.log("\n¿Qué tipo de comprobante desea?");
    console.log("1. Boleta");
    console.log("2. Factura");

    rl.question("Elija una opción (1 o 2): ", (opcionComprobante) => {
        let comprobante;

        if (opcionComprobante === "1") {
            // El precio del producto actúa como el monto total que incluye IGV
            comprobante = modulo.calcularBoleta(productoEncontrado.precio);
        } else if (opcionComprobante === "2") {
            // El precio del producto actúa como subtotal más IGV
            comprobante = modulo.calcularFactura(productoEncontrado.precio);
        } else {
            console.log("Error: Opción de comprobante no válida.");
            rl.close();
            return;
        }

        // 3. Imprimir el comprobante generado
        if (comprobante) {
            console.log("\n=================================================");
            console.log(`            COMPROBANTE: ${comprobante.tipo}`);
            console.log("=================================================");
            console.log(`Producto        : ${productoEncontrado.nombre}`);
            console.log(`Subtotal        : S/ ${comprobante.subtotal.toFixed(2)}`);
            console.log(`IGV (18%)       : S/ ${comprobante.igv.toFixed(2)}`);
            console.log(`Monto Total     : S/ ${comprobante.total.toFixed(2)}`);
            console.log("=================================================");
            console.log("      ¡Gracias por su compra en la tienda!       \n");
        }

        rl.close();
    });
});