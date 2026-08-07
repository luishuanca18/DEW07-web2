document.addEventListener("DOMContentLoaded", function () {

    // BOTONES DE MASCOTA
    const botonPerros = document.getElementById("boton-perros");
    const botonGatos = document.getElementById("boton-gatos");

    // TEXTO
    const textoMascota = document.getElementById("texto-mascota");

    // TODOS LOS PRODUCTOS
    const productos = document.querySelectorAll("#productos-ropa .card");

    // TODOS LOS FILTROS
    const filtros = document.querySelectorAll(".filtro-input");

    // BOTÓN LIMPIAR
    const botonLimpiar = document.getElementById("Limpiar-filtros");

    // POR DEFECTO MOSTRAMOS PERROS
    let mascotaSeleccionada = "perro";


    function obtenerFiltrosSeleccionados(tipo) {

        return Array.from(
            document.querySelectorAll(
                `.filtro-input[data-filtro="${tipo}"]:checked`
            )
        ).map(function (filtro) {
            return filtro.value;
        });

    }


    function mostrarProductos() {

        const tiposSeleccionados = obtenerFiltrosSeleccionados("tipo");
        const tallasSeleccionadas = obtenerFiltrosSeleccionados("talla");
        const coloresSeleccionados = obtenerFiltrosSeleccionados("color");


        productos.forEach(function (producto) {

            const mascotaProducto = producto.dataset.mascota;
            const tipoProducto = producto.dataset.tipo;
            const tallaProducto = producto.dataset.talla;
            const colorProducto = producto.dataset.color;


            // FILTRO MASCOTA
            const coincideMascota =
                mascotaProducto === mascotaSeleccionada;


            // FILTRO TIPO
            const coincideTipo =
                tiposSeleccionados.length === 0 ||
                tiposSeleccionados.includes(tipoProducto);


            // FILTRO TALLA
            const coincideTalla =
                tallasSeleccionadas.length === 0 ||
                tallasSeleccionadas.includes(tallaProducto);


            // FILTRO COLOR
            const coincideColor =
                coloresSeleccionados.length === 0 ||
                coloresSeleccionados.includes(colorProducto);


            // MOSTRAR / OCULTAR
            if (
                coincideMascota &&
                coincideTipo &&
                coincideTalla &&
                coincideColor
            ) {

                producto.style.display = "block";

            } else {

                producto.style.display = "none";

            }

        });

    }


    // BOTÓN PERROS
    botonPerros.addEventListener("click", function () {

        mascotaSeleccionada = "perro";

        botonPerros.classList.add("activo-mascota");
        botonGatos.classList.remove("activo-mascota");

        textoMascota.innerHTML =
            "🐾 Mostrando productos para <strong>Perros</strong>";

        mostrarProductos();

    });


    // BOTÓN GATOS
    botonGatos.addEventListener("click", function () {

        mascotaSeleccionada = "gato";

        botonGatos.classList.add("activo-mascota");
        botonPerros.classList.remove("activo-mascota");

        textoMascota.innerHTML =
            "🐾 Mostrando productos para <strong>Gatos</strong>";

        mostrarProductos();

    });


    // FILTROS
    filtros.forEach(function (filtro) {

        filtro.addEventListener("change", mostrarProductos);

    });


    // LIMPIAR FILTROS
    botonLimpiar.addEventListener("click", function () {

        filtros.forEach(function (filtro) {
            filtro.checked = false;
        });

        mostrarProductos();

    });


    // MOSTRAR PERROS AL CARGAR
    mostrarProductos();

});