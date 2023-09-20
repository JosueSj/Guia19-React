import Elemento from './Elemento'

export default function Producto({productos, agregarAFavoritos, eliminarDeFavoritos}) {
  
//const {productos} = useProducto()

return (
    <div className='productos'>
      {
      productos.length > 0 ? productos.map(producto => 
      <Elemento key={producto.id} elemento={producto} agregarAFavoritos={agregarAFavoritos} eliminarDeFavoritos={eliminarDeFavoritos}/>)
      :
      <p>No hay productos en la lista</p>
    
    }

    </div>
  )
}
