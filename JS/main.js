document.addEventListener("DOMContentLoaded", () => {
    
    // --- FILTRADO DE PRODUCTOS ---
    const checkboxes = document.querySelectorAll(".filtro-input");
    const cards = document.querySelectorAll(".productos .card");
    const btnLimpiar = document.getElementById("btnLimpiarFiltros");

    function aplicarFiltros() {
        // Obteniene los valores seleccionados agrupados por categoría
        const filtrosSeleccionados = {
            mascota: [],
            marca: [],
            tipo: []
        };

        checkboxes.forEach(cb => {
            if (cb.checked) {
                filtrosSeleccionados[cb.dataset.filtro].push(cb.value);
            }
        });

        // Recorre cada tarjeta para ver si cumple con los filtros
        cards.forEach(card => {
            const mascotaCard = card.dataset.mascota;
            const marcaCard = card.dataset.marca;
            const tipoCard = card.dataset.tipo;

            const cumpleMascota = filtrosSeleccionados.mascota.length === 0 || filtrosSeleccionados.mascota.includes(mascotaCard);
            const cumpleMarca = filtrosSeleccionados.marca.length === 0 || filtrosSeleccionados.marca.includes(marcaCard);
            const cumpleTipo = filtrosSeleccionados.tipo.length === 0 || filtrosSeleccionados.tipo.includes(tipoCard);

            // Si cumple con todas las categorías seleccionadas, se muestra; si no, se oculta
            if (cumpleMascota && cumpleMarca && cumpleTipo) {
                card.style.display = "flex";
            } else {
                card.style.display = "none";
            }
        });
    }

    // Cambios en los checkboxes
    checkboxes.forEach(cb => {
        cb.addEventListener("change", aplicarFiltros);
    });

    // Botón para limpiar filtros
    if (btnLimpiar) {
        btnLimpiar.addEventListener("click", () => {
            checkboxes.forEach(cb => cb.checked = false);
            cards.forEach(card => card.style.display = "flex");
        });
    }

});