import React, {Component} from "react";
import './FilmCard.css'


class FilmCard extends Component {

constructor(props) {
    super(props);
    this.state =  {
    }
}

render() {
    return ( 
        <article className="Peli">
            <h3 >{this.props.title}</h3>
            <img alt="imgFilm" src={this.props.img}/>
            <p>{this.props.info}</p>
           <button>Ver descripcion</button>
           <button>Agregar favoritos</button>
        </article>
    )
}}

export default FilmCard;