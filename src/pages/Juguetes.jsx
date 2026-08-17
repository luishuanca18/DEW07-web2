import { useState } from "react";
import { useCarrito } from "../context/CarritoContext.jsx";

const productos = [
  {
    nombre: "Mordedor de hueso",
    precio: 25.90,
    imagen: "./imagenes/Juguetes/MordedorDehueso.jpg",
    mascota: "perros",
    edad: "adulto",
    tamaño: "grande",
  },
  {
    nombre: "Mordedor Dental",
    precio: 18.90,
    imagen: "./imagenes/Juguetes/MordedorDental.png",
    mascota: "perros",
    edad: "adulto",
    tamaño: "mediano",
  },
  {
    nombre: "Mordedor de nylon",
    precio: 30.90,
    imagen: "./imagenes/Juguetes/MordedorNylon.png",
    mascota: "perros",
    edad: "adulto",
    tamaño: "grande",
  },
  {
    nombre: "Mordedor de Pollo",
    precio: 27.90,
    imagen: "./imagenes/Juguetes/MordedorPollo.jpg",
    mascota: "perros",
    edad: "cachorro",
    tamaño: "mediano",
  },
  {
    nombre: "Pelota de Goma",
    precio: 22.90,
    imagen: "./imagenes/Juguetes/PelotaGoma.png",
    mascota: "perros",
    edad: "cachorro",
    tamaño: "pequeño",
  },
  {
    nombre: "Pelota de tenis",
    precio: 35.90,
    imagen: "./imagenes/Juguetes/PelotaTenis.png",
    mascota: "perros",
    edad: "adulto",
    tamaño: "mediano",
  },
  {
    nombre: "Pelota de Sonido",
    precio: 22.90,
    imagen: "./imagenes/Juguetes/PelotaSonido.jpg",
    mascota: "perros",
    edad: "cachorro",
    tamaño: "pequeño",
  },
  {
    nombre: "Pelota Dispensadora",
    precio: 45.90,
    imagen: "./imagenes/Juguetes/PelotaDispensadora.webp",
    mascota: "perros",
    edad: "adulto",
    tamaño: "grande",
  },
  {
    nombre: "Peluche para perro forma de ositos",
    precio: 22.90,
    imagen: "./imagenes/Juguetes/PelucheParaperro.png",
    mascota: "perros",
    edad: "cachorro",
    tamaño: "mediano",
  },
  {
    nombre: "Peluche para perros forma de patito",
    precio: 22.90,
    imagen: "./imagenes/Juguetes/PeluchePerro.jpg",
    mascota: "perros",
    edad: "cachorro",
    tamaño: "mediano",
  },
  {
    nombre: "Peluche para perros forma de pollo a la brasa",
    precio: 22.90,
    imagen: "./imagenes/Juguetes/Peluchepollo.jpg",
    mascota: "perros",
    edad: "adulto",
    tamaño: "grande",
  },
  {
    nombre: "Peluche para perros forma de puercoespin",
    precio: 45.90,
    imagen: "./imagenes/Juguetes/PeluchePrros.png",
    mascota: "perros",
    edad: "adulto",
    tamaño: "grande",
  },
  {
    nombre: "Cuadrado para gatos",
    precio: 22.90,
    imagen: "./imagenes/Juguetes/CuadradoParaGatos.jpg",
    mascota: "gatos",
    edad: "adulto",
    tamaño: "mediano",
  },
  {
    nombre: "Ratón para gatos",
    precio: 22.90,
    imagen: "./imagenes/Juguetes/RatonParagatos.webp",
    mascota: "gatos",
    edad: "cachorro",
    tamaño: "pequeño",
  },
  {
    nombre: "Túnel para gatos",
    precio: 22.90,
    imagen: "./imagenes/Juguetes/TunelParaGato.jpg",
    mascota: "gatos",
    edad: "adulto",
    tamaño: "grande",
  },
  {
    nombre: "Varita juguete para gatos",
    precio: 45.90,
    imagen: "./imagenes/Juguetes/VaritaJugueteLoro.webp",
    mascota: "gatos",
    edad: "adulto",
    tamaño: "mediano",
  },
];

export default function Juguetes() {
  const carrito = useCarrito();

  const [busqueda, setBusqueda] = useState("");
  const [mascotaElegida, setMascotaElegida] = useState("todas");
  const [edadElegida, setEdadElegida] = useState("todas");
  const [tamañoElegido, setTamañoElegido] = useState("todos");

  function agregarAlCarrito(producto) {
    carrito.agregar(producto);
    carrito.abrir();
  }

  function limpiarFiltros() {
    setBusqueda("");
    setMascotaElegida("todas");
    setEdadElegida("todas");
    setTamañoElegido("todos");
  }

  const productosFiltrados = productos.filter((producto) => {
    const coincideBusqueda = producto.nombre
      .toLowerCase()
      .includes(busqueda.toLowerCase());

    const coincideMascota =
      mascotaElegida === "todas" ||
      producto.mascota === mascotaElegida;

    const coincideEdad =
      edadElegida === "todas" ||
      producto.edad === edadElegida;

    const coincideTamaño =
      tamañoElegido === "todos" ||
      producto.tamaño === tamañoElegido;

    return (
      coincideBusqueda &&
      coincideMascota &&
      coincideEdad &&
      coincideTamaño
    );
  });

  return (
    <div className="pagina-juguetes">
      <main>

        <section className="banner">
          <img
            src="./imagenes/peroygatomascota.png"
            alt="Perritos jugando"
          />
        </section>

        <section className="catalogo">

          <aside className="filtros">
            <h2>Filtrar juguetes</h2>

            <h3>Mascota</h3>

            <label>
              <input
                type="radio"
                name="mascota"
                checked={mascotaElegida === "todas"}
                onChange={() => setMascotaElegida("todas")}
              />
              Todas
            </label>

            <label>
              <input
                type="radio"
                name="mascota"
                checked={mascotaElegida === "perros"}
                onChange={() => setMascotaElegida("perros")}
              />
              Perros
            </label>

            <label>
              <input
                type="radio"
                name="mascota"
                checked={mascotaElegida === "gatos"}
                onChange={() => setMascotaElegida("gatos")}
              />
              Gatos
            </label>
            <h3>Edad</h3>

            <label>
              <input
                type="radio"
                name="edad"
                checked={edadElegida === "todas"}
                onChange={() => setEdadElegida("todas")}
              />
              Todas
            </label>

            <label>
              <input
                type="radio"
                name="edad"
                checked={edadElegida === "cachorro"}
                onChange={() => setEdadElegida("cachorro")}
              />
              Cachorro
            </label>

            <label>
              <input
                type="radio"
                name="edad"
                checked={edadElegida === "adulto"}
                onChange={() => setEdadElegida("adulto")}
              />
              Adulto
            </label>

            <h3>Tamaño</h3>

            <label>
              <input
                type="radio"
                name="tamaño"
                checked={tamañoElegido === "todos"}
                onChange={() => setTamañoElegido("todos")}
              />
              Todos
            </label>

            <label>
              <input
                type="radio"
                name="tamaño"
                checked={tamañoElegido === "pequeño"}
                onChange={() => setTamañoElegido("pequeño")}
              />
              Pequeño
            </label>

            <label>
              <input
                type="radio"
                name="tamaño"
                checked={tamañoElegido === "mediano"}
                onChange={() => setTamañoElegido("mediano")}
              />
              Mediano
            </label>

            <label>
              <input
                type="radio"
                name="tamaño"
                checked={tamañoElegido === "grande"}
                onChange={() => setTamañoElegido("grande")}
              />
              Grande
            </label>

            <button
              type="button"
              onClick={limpiarFiltros}
            >
              Limpiar filtros
            </button>
          </aside>

          <section className="productos">

            <div className="buscador">
              <input
                type="text"
                id="buscadorJuguetes"
                placeholder="Buscar juguete..."
                value={busqueda}
                onChange={(evento) =>
                  setBusqueda(evento.target.value)
                }
              />

              <i className="bi bi-search" />
            </div>

            {productosFiltrados.length === 0 ? (
              <p>No se encontraron juguetes.</p>
            ) : (
              productosFiltrados.map((producto) => (
                <div
                  className="producto"
                  key={producto.nombre}
                >
                  <img
                    src={producto.imagen}
                    alt={producto.nombre}
                  />

                  <h3>{producto.nombre}</h3>

                  <p>
                    S/ {producto.precio.toFixed(2)}
                  </p>

                  <button
                    type="button"
                    onClick={() =>
                      agregarAlCarrito(producto)
                    }
                  >
                    Agregar al carrito
                  </button>
                </div>
              ))
            )}

          </section>

        </section>

      </main>
    </div>
  );
}



