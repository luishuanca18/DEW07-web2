export default function Contacto() {
  return (
<div className="pagina-contacto">
  <main className="main-contacto">
    <section className="encabezado-contacto">
      <h1>Contáctanos</h1>
      <p>Estamos para ayudarte. Escríbenos o visítanos.</p>
    </section>
    <section className="contenedor-contacto">
      <div className="info-contacto-card">
        <h2>Información de contacto</h2>
        <div className="item-contacto">
          <div className="icono-contacto"><i className="bi bi-geo-alt" /></div>
          <div className="texto-item-contacto">
            <h4>Dirección</h4>
            <p>Av. PetLove 123, Lima</p>
          </div>
        </div>
        <div className="item-contacto">
          <div className="icono-contacto"><i className="bi bi-whatsapp" /></div>
          <div className="texto-item-contacto">
            <h4>Teléfono / WhatsApp</h4>
            <p>+51 987 654 321</p>
          </div>
        </div>
        <div className="item-contacto">
          <div className="icono-contacto"><i className="bi bi-envelope" /></div>
          <div className="texto-item-contacto">
            <h4>Email</h4>
            <p>hola@petlove.pe</p>
          </div>
        </div>
        <div className="item-contacto">
          <div className="icono-contacto"><i className="bi bi-clock" /></div>
          <div className="texto-item-contacto">
            <h4>Horario</h4>
            <p>Lunes a sábado, 9:00 am - 8:00 pm</p>
          </div>
        </div>
        <div className="redes-contacto">
          <h4>Síguenos</h4>
          <div className="iconos-redes-contacto">
            <a href="#"><i className="bi bi-facebook" /></a>
            <a href="#"><i className="bi bi-instagram" /></a>
            <a href="#"><i className="bi bi-whatsapp" /></a>
            <a href="#"><i className="bi bi-tiktok" /></a>
          </div>
        </div>
      </div>
      <div className="form-contacto-card">
        <h2>Envíanos un mensaje</h2>
        <div className="form-grupo">
          <label htmlFor="nombre">Nombre completo</label>
          <input type="text" id="nombre" placeholder="Escribe aquí..." />
        </div>
        <div className="form-grupo">
          <label htmlFor="email">Correo electrónico</label>
          <input type="email" id="email" placeholder="Escribe aquí..." />
        </div>
        <div className="form-grupo">
          <label htmlFor="asunto">Asunto</label>
          <input type="text" id="asunto" placeholder="Escribe aquí..." />
        </div>
        <div className="form-grupo">
          <label htmlFor="mensaje">Mensaje</label>
          <textarea id="mensaje" rows={5} placeholder="Escribe aquí..." defaultValue={""} />
        </div>
        <button type="button" className="btn-enviar-contacto">Enviar mensaje</button>
      </div>
    </section>
    <section className="seccion-faq">
      <h2>Preguntas frecuentes</h2>
      <div className="contenedor-faq">
        <div className="faq-item">
          <span>¿Cuánto demora el envío?</span>
          <i className="bi bi-plus-lg" />
        </div>
        <div className="faq-item">
          <span>¿Qué métodos de pago aceptan?</span>
          <i className="bi bi-plus-lg" />
        </div>
        <div className="faq-item">
          <span>¿Puedo cambiar un producto?</span>
          <i className="bi bi-plus-lg" />
        </div>
        <div className="faq-item">
          <span>¿Cómo verifico mi pedido?</span>
          <i className="bi bi-plus-lg" />
        </div>
      </div>
    </section>
  </main>
</div>
  )
}

