export default function Promociones() {
  return (
<div className="pagina-promociones">
  <main className="main-promociones">
    <section className="encabezado-promociones">
      <h1>Promociones y ofertas</h1>
      <p>Descuentos especiales en productos seleccionados.</p>
    </section>
    <section className="grid-promociones">
      <div className="card-banner-promo promo-alimentos">
        <div className="info-banner-promo">
          <h2>20% de descuento en alimentos</h2>
          <p>Oferta por tiempo limitado.</p>
          <a href="/comida" className="btn-banner-promo">Ver productos</a>
        </div>
        <div className="imagen-banner-promo">
          <img src="/imagenes/comidas-varias.png" alt="20% descuento alimentos" />
        </div>
      </div>
      <div className="card-banner-promo promo-higiene">
        <div className="info-banner-promo">
          <h2>15% de descuento en higiene</h2>
          <p>Oferta por tiempo limitado.</p>
          <a href="/higiene" className="btn-banner-promo">Ver productos</a>
        </div>
        <div className="imagen-banner-promo">
          <img src="/imagenes/higiene1.jpg" alt="15% descuento higiene" />
        </div>
      </div>
      <div className="card-banner-promo promo-juguetes">
        <div className="info-banner-promo">
          <h2>2x1 en juguetes seleccionados</h2>
          <p>Oferta por tiempo limitado.</p>
          <a href="/juguetes" className="btn-banner-promo">Ver productos</a>
        </div>
        <div className="imagen-banner-promo">
          <img src="/imagenes/Juguetes1.jpg" alt="2x1 juguetes" />
        </div>
      </div>
      <div className="card-banner-promo promo-delivery">
        <div className="info-banner-promo">
          <h2>Envío gratis desde S/ 120</h2>
          <p>Oferta por tiempo limitado.</p>
          <a href="/" className="btn-banner-promo">Ver productos</a>
        </div>
        <div className="imagen-banner-promo">
          <img src="/imagenes/carro-delivery.png" alt="Envio gratis" />
        </div>
      </div>
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
  )
}

