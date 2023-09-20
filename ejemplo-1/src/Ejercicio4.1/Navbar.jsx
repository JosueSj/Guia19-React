import React from "react";
import { Link } from "react-router-dom";
import './Style.css'

export function Navbar(){

    return(
        <div>
            <Link className="link" to={"/hola"}>Main1</Link>
            <Link className="link" to={"/chau"}>Main2</Link>
        </div>
    )
}