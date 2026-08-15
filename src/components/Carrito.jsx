import { useCarrito } from '../context/CarritoContext.jsx'

export default function Carrito() {
  const { productos, abierto, cerrar, eliminar, total } = useCarrito()
  return (
    <aside className={`panel-carrito ${abierto ? 'activo' : ''}`} aria-hidden={!abierto}>
      <div className="carrito-header"><h2>Mi carrito</h2><button type="button" onClick={cerrar}>×</button></div>
      <div className="lista-carrito">
        {productos.length === 0 && <p className="carrito-vacio">Tu carrito está vacío.</p>}
        {productos.map((producto, indice) => (
          <article className="item-carrito" key={`${producto.nombre}-${indice}`}>
            <img src={producto.imagen} alt={producto.nombre} />
            <div><h4>{producto.nombre}</h4><p>S/ {producto.precio.toFixed(2)}</p></div>
            <button type="button" className="eliminar-producto" onClick={() => eliminar(indice)}>×</button>
          </article>
        ))}
      </div>
      <div className="carrito-total"><strong>Total:</strong><span>S/ {total.toFixed(2)}</span></div>
    </aside>
  )
}
