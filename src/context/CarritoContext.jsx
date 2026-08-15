import { createContext, useContext, useEffect, useState } from 'react'

const CarritoContext = createContext()

export function CarritoProvider(props) {
  const productosGuardados = JSON.parse(localStorage.getItem('petlove-carrito')) || []

  const [productos, setProductos] = useState(productosGuardados)
  const [abierto, setAbierto] = useState(false)

  useEffect(function () {
    localStorage.setItem('petlove-carrito', JSON.stringify(productos))
  }, [productos])

  function abrirCarrito() {
    setAbierto(true)
  }

  function cerrarCarrito() {
    setAbierto(false)
  }

  function agregarProducto(producto) {
    setProductos([...productos, producto])
  }

  function eliminarProducto(indice) {
    const productosRestantes = productos.filter(function (producto, posicion) {
      return posicion !== indice
    })

    setProductos(productosRestantes)
  }

  let total = 0

  for (let posicion = 0; posicion < productos.length; posicion++) {
    total = total + productos[posicion].precio
  }

  const datosDelCarrito = {
    productos: productos,
    abierto: abierto,
    abrir: abrirCarrito,
    cerrar: cerrarCarrito,
    agregar: agregarProducto,
    eliminar: eliminarProducto,
    total: total
  }

  return (
    <CarritoContext.Provider value={datosDelCarrito}>
      {props.children}
    </CarritoContext.Provider>
  )
}

export function useCarrito() {
  return useContext(CarritoContext)
}
