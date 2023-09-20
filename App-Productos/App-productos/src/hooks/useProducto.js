import React, { useEffect, useState } from 'react'
import { obtenerProductos } from "../servicios/ProductoServicio"

export default function useProducto() {

    const [productos, setProductos] = useState([])
    const [favoritos, setFavoritos] = useState([])

    useEffect(() => {
        obtenerProductos().then(data => {
            //console.log(data)
            setProductos(data)
        })
    }, [])

    function agregarAFavoritos(elemento) {
        const newFavoritos = [...favoritos, elemento]
        setFavoritos(newFavoritos);
    }

    function eliminarDeFavoritos(elemento) {
        const newFavoritos = favoritos.filter(e => e.id !== elemento.id)
        setFavoritos(newFavoritos)
    }

    return { productos, favoritos, agregarAFavoritos, eliminarDeFavoritos }
}
