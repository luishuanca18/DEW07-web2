document.addEventListener("DOMContentLoaded", function () {

    const productos = document.querySelectorAll(".producto");
    const numeroCarrito = document.querySelector(".carrito-numero");
    const carrito = document.querySelector(".carrito-compra");

    const buscador = document.querySelector("#buscadorJuguetes");
    const mensajeCarrito = document.querySelector("#mensajeCarrito");

    let cantidadCarrito = 0;
    let totalCompra = 0;


    productos.forEach(function (producto) {

        const boton = producto.querySelector("button");

        boton.addEventListener("click", function () {

            const nombre = producto.querySelector("h3").textContent;

            const precioTexto = producto.querySelector("p").textContent;

            const precio = parseFloat(
                precioTexto.replace("S/", "").trim()
            );

            cantidadCarrito++;
            totalCompra += precio;


            numeroCarrito.textContent = cantidadCarrito;

mensajeCarrito.textContent =
    "✅ " + nombre + " agregado al carrito";

mensajeCarrito.style.opacity = "1";
mensajeCarrito.style.transform = "translateX(0)";

setTimeout(function () {
    mensajeCarrito.style.opacity = "0";
    mensajeCarrito.style.transform = "translateX(100px)";
}, 2500);

            console.log("Producto:", nombre);
            console.log("Precio: S/", precio.toFixed(2));
            console.log("Cantidad:", cantidadCarrito);
            console.log("Total: S/", totalCompra.toFixed(2));

        });

    });


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


    buscador.addEventListener("input", function () {

        const textoBuscado = buscador.value.toLowerCase();

        productos.forEach(function (producto) {

            const nombreProducto = producto
                .querySelector("h3")
                .textContent
                .toLowerCase();

            if (nombreProducto.includes(textoBuscado)) {

                producto.style.display = "block";

            } else {

                producto.style.display = "none";

            }

        });

    });

});