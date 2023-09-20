import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import NoFavImg from "../img/heart_10110348.png"
import FavImg from "../img/like_1000621.png"
import useProducto from '../hooks/useProducto';

export default function Elemento({elemento, agregarAFavoritos, eliminarDeFavoritos}) {

const [favorito, setFavorito] = useState(false)



function handleClick(){
    if(favorito){
        eliminarDeFavoritos(elemento)
        setFavorito(false)
    }else{
        agregarAFavoritos(elemento)
        setFavorito(true)
    }
}

    return (
        <div className='elemento'>
            
            <Link to={"/"}> <img src={elemento.image} alt="" /></Link>
            <div className='info'>
                <p>{elemento.title}</p>
                <mark>${elemento.price}</mark>
            </div>

            {/* <img className='fav-icon' src={FavImg} alt=""/> */}
           {favorito ?
            <img className='fav-icon' src={NoFavImg} onClick={handleClick} alt=""/>
            :
            <img className='fav-icon' src={FavImg} onClick={handleClick} alt=""/>
            }

        </div>
    )
}
