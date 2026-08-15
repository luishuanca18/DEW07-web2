import { Outlet } from 'react-router-dom'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Carrito from './Carrito.jsx'


export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <Carrito />
    </>
  )
}
