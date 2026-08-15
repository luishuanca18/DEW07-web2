import {Route, Routes } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Inicio from './pages/Inicio.jsx'
import Comida from './pages/Comida.jsx'
import Ropa from './pages/Ropa.jsx'
import Accesorios from './pages/Accesorios.jsx'
import Juguetes from './pages/Juguetes.jsx'
import Higiene from './pages/Higiene.jsx'
import Promociones from './pages/Promociones.jsx'
import Contacto from './pages/Contacto.jsx'

export default function App() {
  return (
    <Routes>
      {/*<Route
        path="/"
        element={
          <>
            <Header />
            <Inicio />
            <Footer />
            <Carrito />
          </>
        }
      /> */}
      <Route element={<Layout />}>
        <Route path="/" element={<Inicio />} />
        <Route path="/comida" element={<Comida />} />
        <Route path="/ropa" element={<Ropa />} />
        <Route path="/accesorios" element={<Accesorios />} />
        <Route path="/juguetes" element={<Juguetes />} />
        <Route path="/higiene" element={<Higiene />} />
        <Route path="/promociones" element={<Promociones />} />
        <Route path="/contacto" element={<Contacto />} />
      </Route>
    </Routes>
  )
}





