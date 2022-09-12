import React from "react";
import './MovieCard.css'


function MovieCard (props){
    return ( 
            <ul id="film">
                <li className="movieTitle"><h3>{props.title}</h3></li>
                {props.img.includes(null) ? 
                    <li><div className="styleGiphy"><iframe src="https://giphy.com/embed/21xxijoZGAS4zPpDT9" frameBorder="0" class="giphy-embed" title="giphNoMovie"></iframe></div></li>
                :
                    <li className="movieImg"><img alt="imgFilm" src={props.img}/></li>
                }
                {/*<li><img alt="imgFilm" src={props.img !== null ? props.img : props}/></li>*/}             
                <li className="filmDescription">{props.info}</li>
                <li className="buttonsCards"><button>Extra</button> <button>Favorites</button></li>
            </ul>
    )
}

export default MovieCard;