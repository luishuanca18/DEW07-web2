import { useState } from "react"

export default function FiltrosCatalogo(props) {
  return (
    <aside className="sidebar-filtros">
      <h3>{props.tituloFiltro}</h3>

      {props.contenidoFiltro}
    </aside>
  )
}
