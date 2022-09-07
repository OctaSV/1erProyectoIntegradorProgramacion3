import React from "react";
import './MovieCard.css'


function MovieCard (props){
    return ( 
            <ul id="film">
                <li><h3 >{props.title}</h3></li>
                <li><img alt="imgFilm" src={props.img}/></li>
                <li className="filmDescription">{props.info}</li>
                <li><button>Ver descripcion</button></li>
                <li><button>Agregar favoritos</button></li>
            </ul>
    )
}

export default MovieCard;