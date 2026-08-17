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

  function aumentarCantidad(indice) {
    const productosActualizados = [...productos]
    const cantidadActual = productosActualizados[indice].cantidad || 1

    productosActualizados[indice] = {
      ...productosActualizados[indice],
      cantidad: cantidadActual + 1
    }

    setProductos(productosActualizados)
  }

  function disminuirCantidad(indice) {
    const productosActualizados = [...productos]
    const cantidadActual = productosActualizados[indice].cantidad || 1

    if (cantidadActual > 1) {
      productosActualizados[indice] = {
        ...productosActualizados[indice],
        cantidad: cantidadActual - 1
      }

      setProductos(productosActualizados)
    }
  }

  function vaciarCarrito() {
    setProductos([])
  }

  let total = 0

  for (let posicion = 0; posicion < productos.length; posicion++) {
    const cantidad = productos[posicion].cantidad || 1
    total = total + productos[posicion].precio * cantidad
  }

  const datosDelCarrito = {
    productos: productos,
    abierto: abierto,
    abrir: abrirCarrito,
    cerrar: cerrarCarrito,
    agregar: agregarProducto,
    eliminar: eliminarProducto,
    aumentar: aumentarCantidad,
    disminuir: disminuirCantidad,
    vaciar: vaciarCarrito,
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
