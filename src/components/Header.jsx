import { Link } from 'react-router-dom'
import { useCarrito } from '../context/CarritoContext.jsx'

export default function Header() {
  const carrito = useCarrito()

  return (
    <header className="header">
      <section className="topBar">
        <div className="contenedor-topBar">
          <div className="lado1">
            <i className="bi bi-truck"></i>
            <p>Envíos a todo Lima Metropolitana</p>
          </div>

          <div className="lado2">
            <i className="bi bi-shield-check"></i>
            <p>Pagos 100% seguros</p>
          </div>

          <div className="lado3">
            <i className="bi bi-headset"></i>
            <p>Atención 24/7</p>
          </div>
        </div>

        <div className="lado4">
          <p>Síguenos</p>
          <a href="#"><i className="bi bi-facebook"></i></a>
          <a href="#"><i className="bi bi-whatsapp"></i></a>
          <a href="#"><i className="bi bi-instagram"></i></a>
        </div>
      </section>

      <section className="navbar-principal">
        <Link className="imagen" to="/">
          <img src="./imagenes/logo.png" alt="Logo PetLove" />
        </Link>

        <nav className="menus">
          <Link to="/">Inicio</Link>
          <Link to="/comida">Comida</Link>
          <Link to="/ropa">Ropa</Link>
          <Link to="/accesorios">Accesorios</Link>
          <Link to="/juguetes">Juguetes</Link>
          <Link to="/higiene">Higiene</Link>
          <Link to="/promociones">Promociones</Link>
          <Link to="/contacto">Contacto</Link>
        </nav>

        <div className="iconos">
          <i className="bi bi-search"></i>
          <i className="bi bi-heart"></i>
          <i className="bi bi-person"></i>

          <button
            className="carrito-compra boton-icono"
            type="button"
            onClick={carrito.abrir}
            aria-label="Abrir carrito"
          >
            <i className="bi bi-cart3"></i>
            <span className="carrito-numero">
              {carrito.productos.length}
            </span>
          </button>
        </div>
      </section>
    </header>
  )
}

