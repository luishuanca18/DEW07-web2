import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <section className="footer-hoja-informativa">
        <div className="hoja-informativa-texto">
          <h3>¡Únete a la familia PetLove! 🐾</h3>
          <p>Suscríbete y recibe un 10% de descuento en tu primera compra</p>
        </div>

        <div className="hoja-informativa-form">
          <input
            type="email"
            placeholder="Ingresa tu correo electrónico..."
          />
          <button type="button">Suscribirme</button>
        </div>
      </section>

      <div className="footer-contenedor">
        <section className="footer-columna footer-marca">
          <Link className="footer-logo" to="/">
            <img src="./imagenes/logo.png" alt="PetLove Logo" />
          </Link>

          <p className="slogan-footer">
            Todo para tu mejor amigo en un solo lugar.
          </p>

          <div className="footer-redes">
            <a href="#"><i className="bi bi-facebook"></i></a>
            <a href="#"><i className="bi bi-instagram"></i></a>
            <a href="#"><i className="bi bi-whatsapp"></i></a>
            <a href="#"><i className="bi bi-tiktok"></i></a>
          </div>
        </section>

        <section className="footer-columna">
          <h3>Categorías</h3>
          <Link to="/comida">Comidas</Link>
          <Link to="/ropa">Ropa</Link>
          <Link to="/accesorios">Accesorios</Link>
          <Link to="/juguetes">Juguetes</Link>
          <Link to="/higiene">Higiene</Link>
          <Link to="/promociones">Promociones</Link>
        </section>

        <section className="footer-columna">
          <h3>Información</h3>
          <a href="#">Nosotros</a>
          <a href="#">Envíos y entregas</a>
          <a href="#">Métodos de pago</a>
          <a href="#">Cambios y devoluciones</a>
          <a href="#">Términos y condiciones</a>
          <a href="#">Política de privacidad</a>
        </section>

        <section className="footer-columna">
          <h3>Atención al Cliente</h3>
          <a href="#">Preguntas frecuentes</a>
          <a href="#">Guía de tallas</a>
          <a href="#">Cuidados de tu mascota</a>
          <Link to="/contacto">Contacto</Link>

          <p className="atencion-horario">
            <i className="bi bi-clock"></i>
            Lunes a Sábado: 8am - 8pm
          </p>
        </section>
      </div>

      <div className="footer-bottom">
        <p className="copyright">
          © 2024 PetLove. Todos los derechos reservados.
        </p>

        <div className="metodos-pago">
          <img src="./imagenes/visa.png" alt="Visa" />
          <img src="./imagenes/Mastercard.png" alt="Mastercard" />
          <img src="./imagenes/Yape.png" alt="Yape" />
          <img src="./imagenes/Plin.png" alt="Plin" />
        </div>
      </div>
    </footer>
  )
}

