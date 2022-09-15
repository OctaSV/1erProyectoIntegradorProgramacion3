import React, { useState } from "react";

import './MovieCard.css'

function MovieCard (props){
    
    const [isActive, setIsActive] = useState(false)

    return ( 
            <ul id="film">
                <li className="movieTitle">
                    <h3>{props.title}</h3>
                </li>
                {props.img.includes(null) ? 
                    <li>
                        <div className="styleGiphy">
                            <iframe src="https://giphy.com/embed/21xxijoZGAS4zPpDT9" frameBorder="0" class="giphy-embed" title="giphNoMovie"></iframe>
                        </div>
                    </li>
                :
                    <li className="movieImg"><img alt="imgFilm" src={props.img}/></li>
                }
                <li className="filmDescription" style={{display: isActive ? 'block' : 'none'}}>{props.info !== '' ? props.info : 'Nothing to see'}</li>
                <li>
                    <div className="buttonsCards">
                        <button onClick={() => setIsActive(!isActive)} className='buttonCardsB'> {isActive ? <i class="fa-solid fa-xmark"></i> : <i class="fa-solid fa-align-justify"></i>}</button> 
                        <button className="buttonCardsB"><i class="fa-regular fa-heart"></i></button> 
                    </div>
                </li>
            </ul>
    )
}

export default MovieCard;