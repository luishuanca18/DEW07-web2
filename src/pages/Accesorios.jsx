export default function Accesorios() {
  return (
<div className="pagina-accesorios">
  <main className="main-catalogo">
    <section className="seccion-encabezado-catalogo">
      <p className="breadcrumb"><a href="/">Inicio</a> &gt; <span>Accesorios</span></p>
      <div className="encabezado-contenido">
        <div className="texto-encabezado">
          <h1>Accesorios para tu mascota</h1>
          <p>Collares, correas, camas, platos y transportadoras</p>
        </div>
        <div className="ordenar-desplegable">
          <select name="ordenar" id="ordenar">
            <option value="mas-vendidos">Ordenar por: Más vendidos</option>
            <option value="precio-bajo">Precio: menor a mayor</option>
            <option value="precio-alto">Precio: mayor a menor</option>
          </select>
        </div>
      </div>
    </section>
    <section className="contenedor-catalogo">
      <aside className="sidebar-filtros">
        <h3>Filtrar por</h3>
        <div className="grupo-filtro">
          <h4>Categoría</h4>
          <label><input type="checkbox" /> Collares</label>
          <label><input type="checkbox" /> Correas</label>
          <label><input type="checkbox" /> Camas</label>
          <label><input type="checkbox" /> Platos</label>
          <label><input type="checkbox" /> Transportadoras</label>
        </div>
        <div className="grupo-filtro">
          <h4>Material</h4>
          <label><input type="checkbox" /> Nylon</label>
          <label><input type="checkbox" /> Cuero</label>
          <label><input type="checkbox" /> Acero</label>
          <label><input type="checkbox" /> Plástico</label>
        </div>
        <div className="grupo-filtro">
          <h4>Tamaño</h4>
          <label><input type="checkbox" /> Pequeño</label>
          <label><input type="checkbox" /> Mediano</label>
          <label><input type="checkbox" /> Grande</label>
        </div>
        <button type="button" className="btn-limpiar-filtros">Limpiar filtros</button>
      </aside>
      <section className="grid-productos-catalogo">
        <div className="card-producto-item">
          <div className="imagen-producto-item">
            <img src="/imagenes/Accesorios/collar.jpg" alt="Collar de nylon" />
          </div>
          <div className="info-producto-item">
            <h3>Collar de nylon</h3>
            <p className="subtitulo-producto">Ajustable</p>
            <p className="precio-producto">S/ 19.90</p>
            <div className="pie-card-producto">
              <div className="estrellas">
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
              </div>
              <button type="button" className="btn-agregar-carrito"><i className="bi bi-cart-plus" /></button>
            </div>
          </div>
        </div>
        <div className="card-producto-item">
          <div className="imagen-producto-item">
            <img src="/imagenes/Accesorios/correa.jpg" alt="Correa retractil" />
          </div>
          <div className="info-producto-item">
            <h3>Correa retráctil</h3>
            <p className="subtitulo-producto">5 metros</p>
            <p className="precio-producto">S/ 49.90</p>
            <div className="pie-card-producto">
              <div className="estrellas">
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
              </div>
              <button type="button" className="btn-agregar-carrito"><i className="bi bi-cart-plus" /></button>
            </div>
          </div>
        </div>
        <div className="card-producto-item">
          <div className="imagen-producto-item">
            <img src="/imagenes/Accesorios/cama.jpg" alt="Cama acolchada" />
          </div>
          <div className="info-producto-item">
            <h3>Cama acolchada</h3>
            <p className="subtitulo-producto">Tamaño mediano</p>
            <p className="precio-producto">S/ 79.90</p>
            <div className="pie-card-producto">
              <div className="estrellas">
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
              </div>
              <button type="button" className="btn-agregar-carrito"><i className="bi bi-cart-plus" /></button>
            </div>
          </div>
        </div>
        <div className="card-producto-item">
          <div className="imagen-producto-item">
            <img src="/imagenes/Accesorios/plato.jpg" alt="Plato de acero" />
          </div>
          <div className="info-producto-item">
            <h3>Plato de acero</h3>
            <p className="subtitulo-producto">Antideslizante</p>
            <p className="precio-producto">S/ 15.90</p>
            <div className="pie-card-producto">
              <div className="estrellas">
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
              </div>
              <button type="button" className="btn-agregar-carrito"><i className="bi bi-cart-plus" /></button>
            </div>
          </div>
        </div>
        <div className="card-producto-item">
          <div className="imagen-producto-item">
            <img src="/imagenes/Accesorios/transportadora.jpg" alt="Transportadora" />
          </div>
          <div className="info-producto-item">
            <h3>Transportadora</h3>
            <p className="subtitulo-producto">Para perros y gatos</p>
            <p className="precio-producto">S/ 89.90</p>
            <div className="pie-card-producto">
              <div className="estrellas">
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
              </div>
              <button type="button" className="btn-agregar-carrito"><i className="bi bi-cart-plus" /></button>
            </div>
          </div>
        </div>
        <div className="card-producto-item">
          <div className="imagen-producto-item">
            <img src="/imagenes/Accesorios/arnes.jpg" alt="Arnes ajustable" />
          </div>
          <div className="info-producto-item">
            <h3>Arnés ajustable</h3>
            <p className="subtitulo-producto">Varios colores</p>
            <p className="precio-producto">S/ 34.90</p>
            <div className="pie-card-producto">
              <div className="estrellas">
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
              </div>
              <button type="button" className="btn-agregar-carrito"><i className="bi bi-cart-plus" /></button>
            </div>
          </div>
        </div>
      </section>
    </section>
    <section className="franjas-garantias">
      <div className="contenedor-garantias">
        <div className="garantia-item">
          <i className="bi bi-tree" />
          <div className="texto-garantia">
            <h4>Productos de calidad</h4>
            <p>Seleccionados con cuidado</p>
          </div>
        </div>
        <div className="garantia-item">
          <i className="bi bi-award" />
          <div className="texto-garantia">
            <h4>Marcas confiables</h4>
            <p>Buenas opciones para ellos</p>
          </div>
        </div>
        <div className="garantia-item">
          <i className="bi bi-shield-lock" />
          <div className="texto-garantia">
            <h4>Precios justos</h4>
            <p>Calidad al mejor precio</p>
          </div>
        </div>
        <div className="garantia-item">
          <i className="bi bi-patch-check" />
          <div className="texto-garantia">
            <h4>Clientes felices</h4>
            <p>Compra simple y segura</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</div>
  )
}

