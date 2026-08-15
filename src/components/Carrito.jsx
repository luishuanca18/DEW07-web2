import { useCarrito } from '../context/CarritoContext.jsx'

export default function Carrito() {
  const carrito = useCarrito()
  const faltaParaEnvioGratis = Math.max(0, 80 - carrito.total)
  const porcentajeEnvio = Math.min(100, (carrito.total / 80) * 100)

  return (
    <aside className={`panel-carrito ${carrito.abierto ? 'activo' : ''}`} aria-hidden={!carrito.abierto}>
      <div className="carrito-header">
        <div>
          <h2>Mi carrito</h2>
          <p>{carrito.productos.length} productos seleccionados</p>
        </div>
        <button type="button" onClick={carrito.cerrar} aria-label="Cerrar carrito">×</button>
      </div>

      <div className="envio-gratis-carrito">
        <div className="texto-envio-carrito">
          <span><i className="bi bi-truck" /> Envío gratis desde S/ 80</span>
          <strong>
            {faltaParaEnvioGratis === 0
              ? '¡Envío gratis!'
              : `Faltan S/ ${faltaParaEnvioGratis.toFixed(2)}`}
          </strong>
        </div>
        <div className="barra-envio-carrito">
          <div style={{ width: `${porcentajeEnvio}%` }} />
        </div>
      </div>

      <div className="lista-carrito">
        {carrito.productos.length === 0 && <p className="carrito-vacio">Tu carrito está vacío.</p>}
        {carrito.productos.map((producto, indice) => (
          <article className="item-carrito" key={`${producto.nombre}-${indice}`}>
            <img src={producto.imagen} alt={producto.nombre} />
            <div className="datos-producto-carrito">
              <h4>{producto.nombre}</h4>
              <p>S/ {producto.precio.toFixed(2)}</p>
              <div className="cantidad-producto-carrito">
                <button type="button" onClick={() => carrito.disminuir(indice)}>−</button>
                <span>{producto.cantidad || 1}</span>
                <button type="button" onClick={() => carrito.aumentar(indice)}>+</button>
              </div>
            </div>
            <button type="button" className="eliminar-producto" onClick={() => carrito.eliminar(indice)} aria-label={`Eliminar ${producto.nombre}`}>
              <i className="bi bi-trash3" />
            </button>
          </article>
        ))}
      </div>

      <div className="carrito-total">
        <span>Subtotal</span>
        <strong>S/ {carrito.total.toFixed(2)}</strong>
      </div>
      <p className="nota-envio-carrito">El envío se calcula al finalizar la compra.</p>
      <button type="button" className="btn-finalizar-compra">Finalizar compra</button>
      <button type="button" className="btn-seguir-comprando" onClick={carrito.cerrar}>Seguir comprando</button>
    </aside>
  )
}
