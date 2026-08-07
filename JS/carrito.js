document.addEventListener("DOMContentLoaded", function () {

    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    // ===========================
    // CREAR PANEL DEL CARRITO
    // ===========================

    const panel = document.createElement("div");
    panel.className = "panel-carrito";

    panel.innerHTML = `
        <div class="carrito-header">
            <h2>Mi carrito</h2>
            <button type="button" id="cerrar-carrito">×</button>
        </div>

        <div id="lista-carrito"></div>

        <div class="carrito-total">
            <strong>Total:</strong>
            <span id="total-carrito">S/ 0.00</span>
        </div>
    `;

    document.body.appendChild(panel);

    const listaCarrito = document.getElementById("lista-carrito");
    const totalCarrito = document.getElementById("total-carrito");


    // ===========================
    // GUARDAR
    // ===========================

    function guardarCarrito() {
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }


    // ===========================
    // ACTUALIZAR
    // ===========================

    function actualizarCarrito() {

        const contadores = document.querySelectorAll(".carrito-numero");

        contadores.forEach(function (contador) {
            contador.textContent = carrito.length;
        });

        listaCarrito.innerHTML = "";

        let total = 0;

        carrito.forEach(function (producto, indice) {

            total += producto.precio;

            const item = document.createElement("div");
            item.className = "item-carrito";

            item.innerHTML = `
                <img src="${producto.imagen}" alt="${producto.nombre}">

                <div>
                    <h4>${producto.nombre}</h4>
                    <p>S/ ${producto.precio.toFixed(2)}</p>
                </div>

                <button
                    type="button"
                    class="eliminar-producto"
                    data-indice="${indice}">
                    ×
                </button>
            `;

            listaCarrito.appendChild(item);
        });

        totalCarrito.textContent = "S/ " + total.toFixed(2);
    }


    // ===========================
    // TODOS LOS CLICS
    // ===========================

    document.addEventListener("click", function (event) {

        // ABRIR CARRITO
        const iconoCarrito = event.target.closest(".carrito-compra");

        if (iconoCarrito) {
            panel.classList.add("activo");
            return;
        }


        // CERRAR CARRITO
        if (event.target.closest("#cerrar-carrito")) {
            panel.classList.remove("activo");
            return;
        }


        // COMPRAR
        const botonComprar = event.target.closest(".btn-comprar");

        if (botonComprar) {

            const tarjeta = botonComprar.closest(".card");

            if (!tarjeta) {
                return;
            }

            const nombreElemento = tarjeta.querySelector("h3");
            const precioElemento = tarjeta.querySelector("h2");
            const imagenElemento = tarjeta.querySelector("img");

            if (!nombreElemento || !precioElemento || !imagenElemento) {
                return;
            }

            const nombre = nombreElemento.textContent.trim();

            const precio = parseFloat(
                precioElemento.textContent
                    .replace("S/", "")
                    .replace(",", "")
                    .trim()
            );

            const imagen = imagenElemento.src;

            carrito.push({
                nombre: nombre,
                precio: precio,
                imagen: imagen
            });

            guardarCarrito();
            actualizarCarrito();

            return;
        }


        // ELIMINAR PRODUCTO
        const botonEliminar = event.target.closest(".eliminar-producto");

        if (botonEliminar) {

            const indice = Number(botonEliminar.dataset.indice);

            carrito.splice(indice, 1);

            guardarCarrito();
            actualizarCarrito();
        }

    });


    // CARGAR CONTADOR AL ENTRAR
    actualizarCarrito();

});