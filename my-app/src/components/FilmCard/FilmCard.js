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
            <ul id="film">
                <li><h3 >{this.props.title}</h3></li>
                <li><img alt="imgFilm" src={this.props.img}/></li>
                <li><p>{this.props.info}</p></li>
                <li><button>Ver descripcion</button></li>
                <li><button>Agregar favoritos</button></li>
            </ul>
    )
}}

export default FilmCard;