export default function Juguetes() {
  return (
<div className="pagina-juguetes">
  <main>
    <section className="banner">
      <img src="/imagenes/perritos.jpg" alt="Perritos jugando" />
    </section>
    <section className="catalogo">
      <aside className="filtros">
        <h2>Filtrar juguetes</h2>
        <h3>Mascota</h3>
        <label>
          <input type="checkbox" />
          Perros
        </label>
        <label>
          <input type="checkbox" />
          Gatos
        </label>
        <h3>Edad</h3>
        <label>
          <input type="checkbox" />
          Cachorro
        </label>
        <label>
          <input type="checkbox" />
          Adulto
        </label>
        <h3>Tamaño</h3>
        <label>
          <input type="checkbox" />
          Pequeño
        </label>
        <label>
          <input type="checkbox" />
          Mediano
        </label>
        <label>
          <input type="checkbox" />
          Grande
        </label>
      </aside>
      <section className="productos">
        <div className="buscador">
          <input type="text" id="buscadorJuguetes" placeholder="Buscar juguete..." />
          <i className="bi bi-search" />
        </div>
        <div id="mensajeCarrito" className="mensaje-carrito">
        </div>
        <div className="producto">
          <img src="/imagenes/Juguetes/MordedorDehueso.jpg" alt="Mordedor de hueso" />
          <h3>Mordedor de hueso</h3>
          <p>S/ 25.90</p>
          <button>
            Agregar al carrito
          </button>
        </div>
        <div className="producto">
          <img src="/imagenes/Juguetes/MordedorDental.png" alt="Mordedor Dental" />
          <h3>Mordedor Dental</h3>
          <p>S/ 18.90</p>
          <button>
            Agregar al carrito
          </button>
        </div>
        <div className="producto">
          <img src="/imagenes/Juguetes/MordedorNylon.png" alt="Mordedor de Nylon" />
          <h3>Mordedor de nylon</h3>
          <p>S/ 30.90</p>
          <button>
            Agregar al carrito
          </button>
        </div>
        <div className="producto">
          <img src="/imagenes/Juguetes/MordedorPollo.jpg" alt="Mordedor de pollo" />
          <h3>Mordedor de Pollo</h3>
          <p>S/ 27.90</p>
          <button>
            Agregar al carrito
          </button>
        </div>
        <div className="producto">
          <img src="/imagenes/Juguetes/PelotaGoma.png" alt="Pelota de Goma" />
          <h3>Pelota de Goma</h3>
          <p>S/ 22.90</p>
          <button>
            Agregar al carrito
          </button>
        </div>
        <div className="producto">
          <img src="/imagenes/Juguetes/PelotaTenis.png" alt="Pelota de Tenis" />
          <h3>Pelota de tenis</h3>
          <p>S/ 35.90</p>
          <button>
            Agregar al carrito
          </button>
        </div>
        <div className="producto">
          <img src="/imagenes/Juguetes/PelotaSonido.jpg" alt="Pelota de Sonido" />
          <h3>Pelota de Sonido</h3>
          <p>S/ 22.90</p>
          <button>
            Agregar al carrito
          </button>
        </div>
        <div className="producto">
          <img src="/imagenes/Juguetes/PelotaDispensadora.webp" alt="Pelota Dispensadora" />
          <h3>Pelota Dispensadora</h3>
          <p>S/ 45.90</p>
          <button>
            Agregar al carrito
          </button>
        </div>
        <div className="producto">
          <img src="/imagenes/Juguetes/PelucheParaperro.png" alt="Peluche para perro" />
          <h3>Peluche para perro forma de ositos</h3>
          <p>S/ 22.90</p>
          <button>
            Agregar al carrito
          </button>
        </div>
        <div className="producto">
          <img src="/imagenes/Juguetes/PeluchePerro.jpg" alt="Peluche para perros" />
          <h3>Peluche para perros forma de patito</h3>
          <p>S/ 22.90</p>
          <button>
            Agregar al carrito
          </button>
        </div>
        <div className="producto">
          <img src="/imagenes/Juguetes/Peluchepollo.jpg" alt="Peluche para perros forma de pollo" />
          <h3>Peluche para perros forma de pollo a la brasa</h3>
          <p>S/ 22.90</p>
          <button>
            Agregar al carrito
          </button>
        </div>
        <div className="producto">
          <img src="/imagenes/Juguetes/PeluchePrros.png" alt="Peluche para perros" />
          <h3>Peluche para perros forma de puercoespin</h3>
          <p>S/ 45.90</p>
          <button>
            Agregar al carrito
          </button>
        </div>
        <div className="producto">
          <img src="/imagenes/Juguetes/CuadradoParaGatos.jpg" alt="Cuadrado para gatos" />
          <h3>Cuadrado para gatos</h3>
          <p>S/ 22.90</p>
          <button>
            Agregar al carrito
          </button>
        </div>
        <div className="producto">
          <img src="/imagenes/Juguetes/RatonParagatos.webp" alt="Ratón para gatos" />
          <h3>Ratón para gatos</h3>
          <p>S/ 22.90</p>
          <button>
            Agregar al carrito
          </button>
        </div>
        <div className="producto">
          <img src="/imagenes/Juguetes/TunelParaGato.jpg" alt="Túnel para gatos" />
          <h3>Túnel para gatos</h3>
          <p>S/ 22.90</p>
          <button>
            Agregar al carrito
          </button>
        </div>
        <div className="producto">
          <img src="/imagenes/Juguetes/VaritaJugueteLoro.webp" alt="Varita juguete para loros" />
          <h3>Varita juguete para loros</h3>
          <p>S/ 45.90</p>
          <button>
            Agregar al carrito
          </button>
        </div>
      </section>
    </section>
  </main>
</div>
  )
}

