
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from './components/Footer'
import Header from './components/Header'

import Producto from './components/Producto'
import useProducto from './hooks/useProducto'

function App() {
  const { productos, favoritos, agregarAFavoritos, eliminarDeFavoritos } = useProducto()

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Producto productos={productos} agregarAFavoritos={agregarAFavoritos} eliminarDeFavoritos={eliminarDeFavoritos} />} />
        <Route path="/favoritos" element={<Producto productos={favoritos} eliminarDeFavoritos={eliminarDeFavoritos} agregarAFavoritos={agregarAFavoritos} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
