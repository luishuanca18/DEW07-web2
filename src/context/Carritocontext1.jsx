import { createContext, useContext, useState , useEffect } from "react";

const DatosDelCarrito = createContext();


export function ProveedorCarrito(props) {
    const textoGuardado = localStorage.getItem('petlove-carrito')
    const productosGuardados = JSON.parse(textoGuardado) || []

    const[productos, setProductos] = useState(productosGuardados)
    const [carritoAbierto, setCarritoAbierto] = useState(false)

    useEffect(function () {
        const productosConvertidosEnTexto = JSON.stringify(productos)

        localStorage.setItem('petlove-carrito', productosConvertidosEnTexto)
    }, [productos])
    function agregarProducto(productoNuevo) {
        setProductos([...productos, productoNuevo])    

    }

    function abrirCarrito() {
        setCarritoAbierto(true)
    }

    function cerrarCarrito() {
        setCarritoAbierto(false)
    }

    function eliminarProducto(posicionEliminar) {

        const productosRestantes = []

        for (let posicion = 0; posicion < productos.length; posicion++) {

            if ( posicion !== posicionEliminar) {
                productosRestantes.push(productos[posicion])
                
            }
            
        }

        setProductos(productosRestantes)
        
    }

    let total = 0

    for (let posicion = 0; posicion < productos.length; posicion++) {
    total = total + productos[posicion].precio
    }

    const informacionCarrito = {

    productos: productos,
    carritoAbierto: carritoAbierto,
    agregarProducto: agregarProducto,
    eliminarProducto: eliminarProducto,
    abrirCarrito: abrirCarrito,
    cerrarCarrito: cerrarCarrito,
    total: total

    }

    return (
    <DatosDelCarrito.Provider value={informacionCarrito}>
      {props.children}
    </DatosDelCarrito.Provider>
    )
}   


    export function useCarrito() {
      return useContext(DatosDelCarrito)
    }
    
