<<<<<<< HEAD
﻿import FiltrosCatalogo from "../components/FiltrosCatalogo";
import { useState } from "react";
import { useCarrito } from "../context/CarritoContext.jsx";

export default function Accesorios() {
    const carrito = useCarrito()
    
    const [categoriaElegida, setCategoriaElegida] = useState('todas')
    const[mascotaElegida, setMascotaElegida] = useState('todas')
    const [presentacionElegida, setPresentacionElegida] = useState('todas')
    const [materialElegido, setMaterialElegido] = useState('todas')
    const [tamanioElegido, setTamanioElegido] = useState('todas')
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

    function cambiarMaterial(evento) {
      setMaterialElegido(evento.target.value)
    }

    function cambiarTamanio(evento) {
      setTamanioElegido(evento.target.value)
    }
  
    function LimpiarFiltro() {
      setCategoriaElegida('todas')
      setMascotaElegida('todas')
      setPresentacionElegida('todas')
      setMaterialElegido('todas')
      setTamanioElegido('todas')
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

    function agregarCollarDeNylon() {
      const producto = {
        nombre: 'Collar de nylon',
        precio: 19.90,
        imagen: '/imagenes/Accesorios/collar.jpg',
      }

      carrito.agregar(producto)
      carrito.abrir()
    }

    function agregarCorreaRetractil() {
      const producto = {
        nombre: 'Correa retráctil',
        precio: 49.90,
        imagen: '/imagenes/Accesorios/correa.jpg',
      }

      carrito.agregar(producto)
      carrito.abrir()
  }

    function agregarCamaAcolchada() {
      const producto = {
        nombre: 'Cama acolchada',
        precio: 79.90,
        imagen: '/imagenes/Accesorios/cama.jpg',
      }

        carrito.agregar(producto)
        carrito.abrir()

    }
    
    function agregarPlatoDeAcero() {
      const producto = {
        nombre: 'Plato de acero',
        precio: 15.90,
        imagen: '/imagenes/Accesorios/plato.jpg',
      }

        carrito.agregar(producto)
        carrito.abrir()
    }

    function agregarTransportadora() {
      const producto = {
        nombre: 'Transportadora',
        precio: 89.90,
        imagen: '/imagenes/Accesorios/transportadora.jpg',
      }

        carrito.agregar(producto)
        carrito.abrir()
    }

    function agregarArnesAjustable() {
      const producto = {
        nombre: 'Arnes ajustable',
        precio: 34.90,
        imagen: '/imagenes/Accesorios/arnes.jpg',
      }

        carrito.agregar(producto)
        carrito.abrir()
    }

    function agregarCamaCuero() {
      const producto = {
        nombre: 'Cama de cuero',
        precio: 104.90,
        imagen: '/imagenes/Accesorios/camaCuero.jpg',
      }

        carrito.agregar(producto)
        carrito.abrir()
    }

    function agregarCollarCuero() {
      const producto = {
        nombre: 'Collar de cuero',
        precio: 48.90,
        imagen: '/imagenes/Accesorios/collarCuero.jpg',
      }

        carrito.agregar(producto)
        carrito.abrir()
    }

    function agregarCorreaCuero() {
      const producto = {
        nombre: 'Correa de cuero',
        precio: 48.90,
        imagen: '/imagenes/Accesorios/correaCuero.jpg',
      }

        carrito.agregar(producto)
        carrito.abrir()
    }

    function agregarPlatoPlastico() {
      const producto = {
        nombre: 'Plato de plástico',
        precio: 7.90,
        imagen: '/imagenes/Accesorios/platoPlastico.jpg',
      }

        carrito.agregar(producto)
        carrito.abrir()
    }

    function agregarTransportadoraAcero() {
      const producto = {
        nombre: 'Transportadora de acero',
        precio: 150.90,
        imagen: '/imagenes/Accesorios/transportadoraAcero.jpg',
      }

        carrito.agregar(producto)
        carrito.abrir()
    }

    function agregarArnesCuero() {
      const producto = {
        nombre: 'Arnés de cuero',
        precio: 120.90,
        imagen: '/imagenes/Accesorios/arnesCuero.jpg',
      }

        carrito.agregar(producto)
        carrito.abrir()
    }

=======
export default function Accesorios() {
>>>>>>> 15c075b01a8b6ec09a6eea50fec0a98ce33913f0
  return (
<div className="pagina-accesorios">
  <main className="main-catalogo">
    <section className="seccion-encabezado-catalogo">
      <p className="breadcrumb"><a href="#/">Inicio</a> &gt; <span>Accesorios</span></p>
      <div className="encabezado-contenido">
        <div className="texto-encabezado">
          <h1>Accesorios para tu mascota</h1>
          <p>Collares, correas, camas, platos y transportadoras</p>
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
      <aside className="sidebar-filtros">
        <h3>Filtrar por</h3>
        <div className="grupo-filtro">
          <h4>Categoría</h4>
          <label><input type="radio" name="categoria" value="collares" onChange={cambiarCategoria} checked={categoriaElegida === 'collares'}/>{" "} Collares</label>
          <label><input type="radio" name="categoria" value="correas" onChange={cambiarCategoria} checked={categoriaElegida === 'correas'}/>{" "} Correas</label>
          <label><input type="radio" name="categoria" value="camas" onChange={cambiarCategoria} checked={categoriaElegida === 'camas'}/>{" "} Camas</label>
          <label><input type="radio" name="categoria" value="platos" onChange={cambiarCategoria} checked={categoriaElegida === 'platos'}/>{" "} Platos</label>
          <label><input type="radio" name="categoria" value="transportadoras" onChange={cambiarCategoria} checked={categoriaElegida === 'transportadoras'}/>{" "} Transportadoras</label>
          <label><input type="radio" name="categoria" value="arneses" onChange={cambiarCategoria} checked={categoriaElegida === 'arneses'}/>{" "} Arneses</label>

        </div>
        <div className="grupo-filtro">
          <h4>Material</h4>
          <label><input type="radio" name="material" value="nylon" onChange={cambiarMaterial} checked={materialElegido === 'nylon'}/>{" "} Nylon</label>
          <label><input type="radio" name="material" value="cuero" onChange={cambiarMaterial} checked={materialElegido === 'cuero'}/>{" "} Cuero</label>
          <label><input type="radio" name="material" value="acero" onChange={cambiarMaterial} checked={materialElegido === 'acero'}/>{" "} Acero</label>
          <label><input type="radio" name="material" value="plastico" onChange={cambiarMaterial} checked={materialElegido === 'plastico'}/>{" "} Plástico</label>
        </div>
        <div className="grupo-filtro">
          <h4>Tamaño</h4>
          <label><input type="radio" name="tamanio" value="pequenio" onChange={cambiarTamanio} checked={tamanioElegido === 'pequenio'}/>{" "} Pequeño</label>
          <label><input type="radio" name="tamanio" value="mediano" onChange={cambiarTamanio} checked={tamanioElegido === 'mediano'}/>{" "} Mediano</label>
          <label><input type="radio" name="tamanio" value="grande" onChange={cambiarTamanio} checked={tamanioElegido === 'grande'}/>{" "} Grande</label>
        </div>
        <button type="button" className="btn-limpiar-filtros" onClick={LimpiarFiltro}>Limpiar filtros</button>
      </aside>
      <section className="grid-productos-catalogo">
        {(categoriaElegida === 'todas' || categoriaElegida === 'collares') &&
            (materialElegido === 'todas' || materialElegido === 'nylon') &&
            (tamanioElegido === 'todas' || tamanioElegido === 'pequenio') && (

        <div className="card-producto-item" style={{order: obtenerOrdenProducto(19.90,1)}}>
          <div className="imagen-producto-item">
            <img src="./imagenes/Accesorios/collar.jpg" alt="Collar de nylon" />
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
              <button type="button" className="btn-agregar-carrito" onClick={agregarCollarDeNylon}><i className="bi bi-cart-plus" /></button>
            </div>
          </div>
        </div>
        )}

        {(categoriaElegida === 'todas' || categoriaElegida === 'correas') &&
            (materialElegido === 'todas' || materialElegido === 'nylon') &&
            (tamanioElegido === 'todas' || tamanioElegido === 'pequenio') && (
        <div className="card-producto-item" style={{ order: obtenerOrdenProducto(49.90, 2) }}>
          <div className="imagen-producto-item">
            <img src="./imagenes/Accesorios/correa.jpg" alt="Correa retractil" />
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
              <button type="button" className="btn-agregar-carrito" onClick={agregarCorreaRetractil}><i className="bi bi-cart-plus" /></button>
            </div>
          </div>
        </div>
        )}

        {(categoriaElegida === 'todas' || categoriaElegida === 'camas') &&
            (materialElegido === 'todas' || materialElegido === 'nylon') &&
            (tamanioElegido === 'todas' || tamanioElegido === 'mediano') && (
        <div className="card-producto-item" style={{ order: obtenerOrdenProducto(79.90, 3) }}>
          <div className="imagen-producto-item">
            <img src="./imagenes/Accesorios/cama.jpg" alt="Cama acolchada" />
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
              <button type="button" className="btn-agregar-carrito" onClick={agregarCamaAcolchada}><i className="bi bi-cart-plus" /></button>
            </div>
          </div>
        </div>
        )}
        {(categoriaElegida === 'todas' || categoriaElegida === 'platos') &&
            (materialElegido === 'todas' || materialElegido === 'acero') &&
            (tamanioElegido === 'todas' || tamanioElegido === 'pequenio') && (
        <div className="card-producto-item" style={{ order: obtenerOrdenProducto(15.90, 4) }}>
          <div className="imagen-producto-item">
            <img src="./imagenes/Accesorios/plato.jpg" alt="Plato de acero" />
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
              <button type="button" className="btn-agregar-carrito" onClick={agregarPlatoDeAcero}><i className="bi bi-cart-plus" /></button>
            </div>
          </div>
        </div>
        )}
        {(categoriaElegida === 'todas' || categoriaElegida === 'transportadoras') &&
            (materialElegido === 'todas' || materialElegido === 'plastico') &&
            (tamanioElegido === 'todas' || tamanioElegido === 'grande') && (
        <div className="card-producto-item" style={{ order: obtenerOrdenProducto(89.90, 5) }}>
          <div className="imagen-producto-item">
            <img src="./imagenes/Accesorios/transportadora.jpg" alt="Transportadora" />
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
              <button type="button" className="btn-agregar-carrito" onClick={agregarTransportadora}><i className="bi bi-cart-plus" /></button>
            </div>
          </div>
        </div>
        )}
        {(categoriaElegida === 'todas' || categoriaElegida === 'arneses') &&
            (materialElegido === 'todas' || materialElegido === 'nylon') &&
            (tamanioElegido === 'todas' || tamanioElegido === 'mediano') && (
        <div className="card-producto-item" style={{ order: obtenerOrdenProducto(34.90, 6) }}>
          <div className="imagen-producto-item">
            <img src="./imagenes/Accesorios/arnes.jpg" alt="Arnes ajustable" />
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
              <button type="button" className="btn-agregar-carrito" onClick={agregarArnesAjustable}><i className="bi bi-cart-plus" /></button>
            </div>
          </div>
        </div>
        )}
        {(categoriaElegida === 'todas' || categoriaElegida === 'camas') &&
            (materialElegido === 'todas' || materialElegido === 'cuero') &&
            (tamanioElegido === 'todas' || tamanioElegido === 'grande') && (
        <div className="card-producto-item" style={{ order: obtenerOrdenProducto(104.90, 7) }}>
          <div className="imagen-producto-item">
            <img src="/imagenes/Accesorios/camaCuero.jpg" alt="Cama de cuero" />
          </div>
          <div className="info-producto-item">
            <h3>Cama de cuero</h3>
            <p className="subtitulo-producto">Varios colores</p>
            <p className="precio-producto">S/ 104.90</p>
            <div className="pie-card-producto">
              <div className="estrellas">
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
              </div>
              <button type="button" className="btn-agregar-carrito" onClick={agregarCamaCuero}><i className="bi bi-cart-plus" /></button>
            </div>
          </div>
        </div>
        )}
        {(categoriaElegida === 'todas' || categoriaElegida === 'collares') &&
            (materialElegido === 'todas' || materialElegido === 'cuero') &&
            (tamanioElegido === 'todas' || tamanioElegido === 'pequenio') && (
        <div className="card-producto-item" style={{ order: obtenerOrdenProducto(48.90, 8) }}>
          <div className="imagen-producto-item">
            <img src="/imagenes/Accesorios/collarCuero.jpg" alt="Collar de cuero" />
          </div>
          <div className="info-producto-item">
            <h3>Collar de cuero</h3>
            <p className="subtitulo-producto">Ajustable</p>
            <p className="precio-producto">S/ 48.90</p>
            <div className="pie-card-producto">
              <div className="estrellas">
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
              </div>
              <button type="button" className="btn-agregar-carrito" onClick={agregarCollarCuero}><i className="bi bi-cart-plus" /></button>
            </div>
          </div>
        </div>
        )}
        {(categoriaElegida === 'todas' || categoriaElegida === 'correas') &&
            (materialElegido === 'todas' || materialElegido === 'cuero') &&
            (tamanioElegido === 'todas' || tamanioElegido === 'pequenio') && (
        <div className="card-producto-item" style={{ order: obtenerOrdenProducto(48.90, 9) }}>
          <div className="imagen-producto-item">
            <img src="/imagenes/Accesorios/correaCuero.jpg" alt="Correa de cuero" />
          </div>
          <div className="info-producto-item">
            <h3>Correa de cuero</h3>
            <p className="subtitulo-producto">2 metros</p>
            <p className="precio-producto">S/ 48.90</p>
            <div className="pie-card-producto">
              <div className="estrellas">
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
              </div>
              <button type="button" className="btn-agregar-carrito" onClick={agregarCorreaCuero}><i className="bi bi-cart-plus" /></button>
            </div>
          </div>
        </div>
        )}
        {(categoriaElegida === 'todas' || categoriaElegida === 'platos') &&
            (materialElegido === 'todas' || materialElegido === 'plastico') &&
            (tamanioElegido === 'todas' || tamanioElegido === 'mediano') && (
        <div className="card-producto-item" style={{ order: obtenerOrdenProducto(7.90, 10) }}>
          <div className="imagen-producto-item">
            <img src="/imagenes/Accesorios/platoPlastico.jpg" alt="Plato de plástico" />
          </div>
          <div className="info-producto-item">
            <h3>Plato de plástico</h3>
            <p className="subtitulo-producto">Movible</p>
            <p className="precio-producto">S/ 7.90</p>
            <div className="pie-card-producto">
              <div className="estrellas">
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
              </div>
              <button type="button" className="btn-agregar-carrito" onClick={agregarPlatoPlastico}><i className="bi bi-cart-plus" /></button>
            </div>
          </div>
        </div>
        )}
        {(categoriaElegida === 'todas' || categoriaElegida === 'transportadoras') &&
            (materialElegido === 'todas' || materialElegido === 'acero') &&
            (tamanioElegido === 'todas' || tamanioElegido === 'grande') && (
        <div className="card-producto-item" style={{ order: obtenerOrdenProducto(150.90, 11) }}>
          <div className="imagen-producto-item">
            <img src="/imagenes/Accesorios/transportadoraAcero.jpg" alt="Transportadora de acero" />
          </div>
          <div className="info-producto-item">
            <h3>Transportadora de acero</h3>
            <p className="subtitulo-producto">Antioxidable</p>
            <p className="precio-producto">S/ 150.90</p>
            <div className="pie-card-producto">
              <div className="estrellas">
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
              </div>
              <button type="button" className="btn-agregar-carrito" onClick={agregarTransportadoraAcero}><i className="bi bi-cart-plus" /></button>
            </div>
          </div>
        </div>
        )}
        {(categoriaElegida === 'todas' || categoriaElegida === 'arneses') &&
            (materialElegido === 'todas' || materialElegido === 'cuero') &&
            (tamanioElegido === 'todas' || tamanioElegido === 'grande') && (
        <div className="card-producto-item" style={{ order: obtenerOrdenProducto(120.90, 12) }}>
          <div className="imagen-producto-item">
            <img src="/imagenes/Accesorios/arnesCuero.jpg" alt="Arnés de cuero" />
          </div>
          <div className="info-producto-item">
            <h3>Arnés de cuero</h3>
            <p className="subtitulo-producto">Varios Colores</p>
            <p className="precio-producto">S/ 120.90</p>
            <div className="pie-card-producto">
              <div className="estrellas">
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
              </div>
              <button type="button" className="btn-agregar-carrito" onClick={agregarArnesCuero}><i className="bi bi-cart-plus" /></button>
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


