import FiltrosCatalogo from "../components/FiltrosCatalogo";
import { useState } from "react";
import { useCarrito } from "../context/CarritoContext.jsx";

export default function Higiene() {
  const carrito = useCarrito()
  
  const [categoriaElegida, setCategoriaElegida] = useState('todas')
  const[mascotaElegida, setMascotaElegida] = useState('todas')
  const [presentacionElegida, setPresentacionElegida] = useState('todas')
  const [ordenElegido, setOrdenElegido] = useState('mas-vendidos')
  
   function cambiarCategoria(evento) {
    setCategoriaElegida(evento.target.value)
  }

  function cambiarMascota(evento) {
    setMascotaElegida(evento.target.value)
  }

  function cambiarPresentacion(evento) {
    setPresentacionElegida(evento.target.value)
  }

  function LimpiarFiltro() {
    setCategoriaElegida('todas')
    setMascotaElegida('todas')
    setPresentacionElegida('todas')
    setOrdenElegido('mas-vendidos')
  }

  function cambiarOrden(evento) {
    setOrdenElegido(evento.target.value)
  }
  function obtenerOrdenProducto(precio,posicionInicial ) {

    if (ordenElegido === "precio-bajo") {
      return precio *100 
    }
    if (ordenElegido === "precio-alto") {
      return precio * -100
    }
    return posicionInicial
  }

  function agregarShampoo() {
    const producto = {
      nombre: 'Shampoo Mimaskot',
      precio: 24.90,
      imagen: '/imagenes/shampo-perro.webp'
    }

    carrito.agregar(producto)
    carrito.abrir()
  }

  function agregarAcondicionador() {
    const producto = {
      nombre: 'Acondicionador',
      precio: 22.90,
      imagen: '/imagenes/acondicionador-perro.jpg'
    }

    carrito.agregar(producto)
    carrito.abrir()
  }

  function agregarLimpiezaDental() {
    const producto = {
      nombre: 'Limpieza dental',
      precio: 18.90,
      imagen: '/imagenes/limpieza-dental.webp'
    }

    carrito.agregar(producto)
    carrito.abrir()
  }

  function agregarToallitas() {
    const producto = {
      nombre: 'Toallitas húmedas',
      precio: 16.90,
      imagen: '/imagenes/toallas-higienicas.jpg'
    }

    carrito.agregar(producto)
    carrito.abrir()
  }

  function agregarPerfume() {
    const producto = {
      nombre: 'Perfume mascotas',
      precio: 28.90,
      imagen: '/imagenes/perfume.jpg'
    }

    carrito.agregar(producto)
    carrito.abrir()
  }

  function agregarCepillo() {
    const producto = {
      nombre: 'Cepillo removedor',
      precio: 19.90,
      imagen: '/imagenes/cepillo.png'
    }

    carrito.agregar(producto)
    carrito.abrir()
  }

  return (
    <div className="pagina-higiene">
      <main className="main-catalogo">
        <section className="seccion-encabezado-catalogo">
          <p className="paginacion">
            <a href="#/">Inicio</a> &gt; <span>Higiene</span>
          </p>
          <div className="encabezado-contenido">
            <div className="texto-encabezado">
              <h1>Higiene y cuidado</h1>
              <p>
                Productos para mantener a tu mascota limpia, sana y perfumada.
              </p>
            </div>
            <div className="ordenar-desplegable">
              <select name="ordenar" id="ordenar" value={ordenElegido} onChange={cambiarOrden}>
                <option value="mas-vendidos">Ordenar por: Más vendidos</option>
                <option value="precio-bajo">Precio: menor a mayor</option>
                <option value="precio-alto">Precio: mayor a menor</option>
              </select>
            </div>
          </div>
        </section>
        <section className="contenedor-catalogo">
          <FiltrosCatalogo
           
            tituloFiltro="Filtrar por"
            contenidoFiltro={
              <>
                <div className="grupo-filtro">
                  <h4>Categoría</h4>
                  <label>
                    <input type="radio" name="categoria" value="shampoo" onChange={cambiarCategoria} checked={categoriaElegida === 'shampoo'}/>{" "}
                    Shampoo
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="categoria"
                      value="acondicionador"
                      onChange={cambiarCategoria}
                      checked={categoriaElegida === 'acondicionador'}
                    />{" "}
                    Acondicionador
                  </label>
                  <label>
                    <input type="radio" name="categoria" value="dental" onChange={cambiarCategoria} checked={categoriaElegida === 'dental'} />{" "}
                    Limpieza dental
                  </label>
                  <label>
                    <input type="radio" name="categoria" value="toallitas" onChange={cambiarCategoria} checked={categoriaElegida === 'toallitas'} />{" "}
                    Toallitas
                  </label>
              <label>
                <input type="radio" name="categoria" value="perfumes" onChange={cambiarCategoria} checked={categoriaElegida === 'perfumes'} />{" "}
                Perfumes
              </label>
              <label>
                <input type="radio" name="categoria" value="cepillos" onChange={cambiarCategoria} checked={categoriaElegida === 'cepillos'} />{" "}
                Cepillos
              </label>
                </div>

                <div className="grupo-filtro">
                  <h4>Mascota</h4>
                  <label>
                    <input type="radio" name="mascota" value="perros" onChange={cambiarMascota} checked={mascotaElegida === 'perros'} /> Perros
                  </label>
                  <label>
                    <input type="radio" name="mascota" value="gatos" onChange={cambiarMascota} checked={mascotaElegida === 'gatos'} /> Gatos
                  </label>
                </div>

                <div className="grupo-filtro">
                  <h4>Presentación</h4>
                  <label>
                    <input type="radio" name="presentacion" value="pequena" onChange={cambiarPresentacion} checked={presentacionElegida === 'pequena'} /> Pequeña
                  </label>
                  <label>
                    <input type="radio" name="presentacion" value="mediana" onChange={cambiarPresentacion} checked={presentacionElegida === 'mediana'} /> Mediana
                  </label>
                  <label>
                    <input type="radio" name="presentacion" value="grande" onChange={cambiarPresentacion} checked={presentacionElegida === 'grande'} /> Grande
                  </label>
                </div>

                <button type="button" className="btn-limpiar-filtros" onClick={LimpiarFiltro}> 
                  Limpiar filtros
                </button>
              </>
            }
          />


          <section className="grid-productos-catalogo">

           {(categoriaElegida === 'todas' || categoriaElegida === 'shampoo') &&
            (mascotaElegida === 'todas' || mascotaElegida === 'gatos') &&
            (presentacionElegida === 'todas' || presentacionElegida === 'pequena') && (

            <div className="card-producto-item" style={{order: obtenerOrdenProducto(24.90,1)}}>
              <div className="imagen-producto-item">
                <img src="./imagenes/shampo-perro.webp" alt="Shampoo Mimaskot" />
              </div>
              <div className="info-producto-item">
                <h3>Shampoo Mimaskot</h3>
                <p className="subtitulo-producto">Pelaje brillante</p>
                <p className="precio-producto">S/ 24.90</p>
                <div className="pie-card-producto">
                  <div className="estrellas">
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                  </div>
                  <button type="button" className="btn-agregar-carrito" onClick={agregarShampoo}>
                    <i className="bi bi-cart-plus" />
                  </button>
                </div>
              </div>
            </div>
           )}

           {(categoriaElegida === 'todas' || categoriaElegida === 'acondicionador') &&
            (mascotaElegida === 'todas' || mascotaElegida === 'gatos') &&
            (presentacionElegida === 'todas' || presentacionElegida === 'pequena') && (
            <div className="card-producto-item" style={{ order: obtenerOrdenProducto(22.90, 2) }}>
              <div className="imagen-producto-item">
                <img src="./imagenes/acondicionador-perro.jpg" alt="Acondicionador" />
              </div>
              <div className="info-producto-item">
                <h3>Acondicionador</h3>
                <p className="subtitulo-producto">Suavidad y cuidado</p>
                <p className="precio-producto">S/ 22.90</p>
                <div className="pie-card-producto">
                  <div className="estrellas">
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                  </div>
                  <button type="button" className="btn-agregar-carrito" onClick={agregarAcondicionador}>
                    <i className="bi bi-cart-plus" />
                  </button>
                </div>
              </div>
            </div>
           )}

            {(categoriaElegida === 'todas' || categoriaElegida === 'dental') &&
             (mascotaElegida === 'todas' || mascotaElegida === 'gatos') &&
             (presentacionElegida === 'todas' || presentacionElegida === 'mediana') && (
            <div className="card-producto-item" style={{ order: obtenerOrdenProducto(18.90, 3) }}>
              <div className="imagen-producto-item">
                <img src="./imagenes/limpieza-dental.webp" alt="Limpieza dental" />
              </div>
              <div className="info-producto-item">
                <h3>Limpieza dental</h3>
                <p className="subtitulo-producto">Uso frecuente</p>
                <p className="precio-producto">S/ 18.90</p>
                <div className="pie-card-producto">
                  <div className="estrellas">
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                  </div>
                  <button type="button" className="btn-agregar-carrito" onClick={agregarLimpiezaDental}>
                    <i className="bi bi-cart-plus" />
                  </button>
                </div>
              </div>
            </div>
            )}

            {(categoriaElegida === 'todas' || categoriaElegida === 'toallitas') &&
             (mascotaElegida === 'todas' || mascotaElegida === 'perros') &&
             (presentacionElegida === 'todas' || presentacionElegida === 'mediana') && (
            <div className="card-producto-item" style={{ order: obtenerOrdenProducto(16.90, 4) }}>
              <div className="imagen-producto-item">
                <img src="./imagenes/toallas-higienicas.jpg" alt="Toallitas húmedas" />
              </div>
              <div className="info-producto-item">
                <h3>Toallitas húmedas</h3>
                <p className="subtitulo-producto">Paquete práctico</p>
                <p className="precio-producto">S/ 16.90</p>
                <div className="pie-card-producto">
                  <div className="estrellas">
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                  </div>
                  <button type="button" className="btn-agregar-carrito" onClick={agregarToallitas}>
                    <i className="bi bi-cart-plus" />
                  </button>
                </div>
              </div>
            </div>
            )}

            {(categoriaElegida === 'todas' || categoriaElegida === 'perfumes') &&
             (mascotaElegida === 'todas' || mascotaElegida === 'perros') &&
             (presentacionElegida === 'todas' || presentacionElegida === 'grande') && (
            <div className="card-producto-item" style={{ order: obtenerOrdenProducto(28.90, 5) }}>
              <div className="imagen-producto-item">
                <img src="imagenes/perfume.jpg" alt="Perfume mascotas" />
              </div>
              <div className="info-producto-item">
                <h3>Perfume mascotas</h3>
                <p className="subtitulo-producto">Aroma suave</p>
                <p className="precio-producto">S/ 28.90</p>
                <div className="pie-card-producto">
                  <div className="estrellas">
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                  </div>
                  <button type="button" className="btn-agregar-carrito" onClick={agregarPerfume}>
                    <i className="bi bi-cart-plus" />
                  </button>
                </div>
              </div>
            </div>
            )}

            {(categoriaElegida === 'todas' || categoriaElegida === 'cepillos') &&
             (mascotaElegida === 'todas' || mascotaElegida === 'perros') &&
             (presentacionElegida === 'todas' || presentacionElegida === 'grande') && (
            <div className="card-producto-item" style={{ order: obtenerOrdenProducto(19.90, 6) }}>
              <div className="imagen-producto-item">
                <img src="imagenes/cepillo.png" alt="Cepillo removedor" />
              </div>
              <div className="info-producto-item">
                <h3>Cepillo removedor</h3>
                <p className="subtitulo-producto">Para el pelaje</p>
                <p className="precio-producto">S/ 19.90</p>
                <div className="pie-card-producto">
                  <div className="estrellas">
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                  </div>
                  <button type="button" className="btn-agregar-carrito" onClick={agregarCepillo}>
                    <i className="bi bi-cart-plus" />
                  </button>
                </div>
              </div>
            </div>
            )}
          </section>
        </section>
        <section className="franjas-garantias">
          <div className="contenedor-garantias">
            <div className="garantia-item">
              <i className="bi bi-tree" />
              <div className="texto-garantia">
                <h4>Ingredientes de calidad</h4>
                <p>para una nutrición completa</p>
              </div>
            </div>
            <div className="garantia-item">
              <i className="bi bi-award" />
              <div className="texto-garantia">
                <h4>Marcas originales</h4>
                <p>y 100% garantizadas</p>
              </div>
            </div>
            <div className="garantia-item">
              <i className="bi bi-shield-lock" />
              <div className="texto-garantia">
                <h4>Compra 100% segura</h4>
                <p>Tus datos protegidos</p>
              </div>
            </div>
            <div className="garantia-item">
              <i className="bi bi-patch-check" />
              <div className="texto-garantia">
                <h4>Variedad de sabores</h4>
                <p>a tu mascota le encantarán</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

