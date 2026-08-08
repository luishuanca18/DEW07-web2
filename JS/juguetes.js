// ==========================================
// JAVASCRIPT - SECCIÓN JUGUETES
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    // ==========================================
    // ELEMENTOS DEL HTML
    // ==========================================

    const productos = document.querySelectorAll(".producto");
    const numeroCarrito = document.querySelector(".carrito-numero");
    const carrito = document.querySelector(".carrito-compra");

    const buscador = document.querySelector("#buscadorJuguetes");
    const mensajeCarrito = document.querySelector("#mensajeCarrito");


    // ==========================================
    // VARIABLES DEL CARRITO
    // ==========================================

    let cantidadCarrito = 0;
    let totalCompra = 0;


    // ==========================================
    // AGREGAR PRODUCTOS AL CARRITO
    // ==========================================

    productos.forEach(function (producto) {

        const boton = producto.querySelector("button");

        boton.addEventListener("click", function () {

            // Obtener nombre del producto
            const nombre = producto.querySelector("h3").textContent;

            // Obtener precio del producto
            const precioTexto = producto.querySelector("p").textContent;

            // Convertir el precio a número
            const precio = parseFloat(
                precioTexto.replace("S/", "").trim()
            );


            // Aumentar cantidad del carrito
            cantidadCarrito++;

            // Sumar precio al total
            totalCompra += precio;


            // Actualizar número del carrito
            numeroCarrito.textContent = cantidadCarrito;


            // Mostrar mensaje dentro de la página
mensajeCarrito.textContent =
    "✅ " + nombre + " agregado al carrito";

mensajeCarrito.style.opacity = "1";
mensajeCarrito.style.transform = "translateX(0)";

setTimeout(function () {
    mensajeCarrito.style.opacity = "0";
    mensajeCarrito.style.transform = "translateX(100px)";
}, 2500);


            // Mostrar información en consola
            console.log("Producto:", nombre);
            console.log("Precio: S/", precio.toFixed(2));
            console.log("Cantidad:", cantidadCarrito);
            console.log("Total: S/", totalCompra.toFixed(2));

        });

    });


    // ==========================================
    // MOSTRAR CARRITO
    // ==========================================

    carrito.addEventListener("click", function () {

        if (cantidadCarrito === 0) {

            alert("Tu carrito está vacío.");

        } else {

            alert(
                "🛒 CARRITO DE COMPRA\n\n" +
                "Cantidad de productos: " +
                cantidadCarrito +
                "\nTotal: S/ " +
                totalCompra.toFixed(2)
            );

        }

    });


    // ==========================================
    // BUSCADOR DE PRODUCTOS
    // ==========================================

    buscador.addEventListener("input", function () {

        // Obtener texto escrito por el usuario
        const textoBuscado = buscador.value.toLowerCase();


        // Revisar todos los productos
        productos.forEach(function (producto) {

            // Obtener nombre del producto
            const nombreProducto = producto
                .querySelector("h3")
                .textContent
                .toLowerCase();


            // Comprobar si coincide con la búsqueda
            if (nombreProducto.includes(textoBuscado)) {

                producto.style.display = "block";

            } else {

                producto.style.display = "none";

            }

        });

    });

});