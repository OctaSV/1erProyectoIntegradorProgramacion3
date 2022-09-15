import React, { useState } from "react";
import './MovieCard.css'
import { Link } from 'react-router-dom'

function MovieCard (props){
    
const [isActive, setIsActive] = useState(false)

const handleClick = () => {
 //   setIsActive(current => !current)
}
    return ( 
            <ul id="film">
                <Link to={`/movie/detail/${props.id}`}>
                    <li className="movieTitle"><h3>{props.title}</h3></li>
                    {props.img.includes(null) ? 
                        <li><div className="styleGiphy"><iframe src="https://giphy.com/embed/21xxijoZGAS4zPpDT9" frameBorder="0" class="giphy-embed" title="giphNoMovie"></iframe></div></li>
                    :
                        <li className="movieImg"><img alt="imgFilm" src={props.img}/></li>
                    }
                    {/*<li><img alt="imgFilm" src={props.img !== null ? props.img : props}/></li>*/}             
                    <li className="filmDescription" style={{display: isActive ? 'block' : 'none'}}>{props.info}</li>
                    <div className="buttonscards">
                    <li onClick={handleClick}><button onClick={() => setIsActive(!isActive)} className='buttonscards'> {isActive ? 'Hide Extra' : 'Extra'}   </button> 
                    <button className="buttonscards">Add Favorites</button></li> </div>
                </Link>
                
            </ul>
    )
}

export default MovieCard;