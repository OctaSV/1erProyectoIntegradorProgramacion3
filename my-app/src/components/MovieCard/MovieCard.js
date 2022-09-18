import React, { Component } from "react";

import './MovieCard.css'

import { Link } from 'react-router-dom'

class MovieCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            favText: <i className="fa-regular fa-heart"></i>,
            verDesc: false
        }
    };

    mostrar(){
        this.setState( {verDesc: true} )
    }
    esconder(){
        this.setState({verDesc: false} )
    }

    componentDidMount(){
        let favoritos = [];
        let recuperoStorage = localStorage.getItem('favoritos');
        if (recuperoStorage !== null) {
            let storageToArray = JSON.parse(recuperoStorage);
            favoritos = storageToArray

            if (favoritos.includes(this.props.id)) {
                this.setState({
                    favText: <i className="fa-solid fa-heart"></i>
                })
            } else {
                this.setState({
                    favText: <i className="fa-regular fa-heart"></i>
                })
            }
        }
    }

    agregarQuitarFavs(id){
        let favoritos = [];
        let recuperoStorage = localStorage.getItem('favoritos');

        if (recuperoStorage !== null) {
            let storageToArray = JSON.parse(recuperoStorage);
            favoritos = storageToArray
        }

        if (favoritos.includes(this.props.id)) {
            // favoritos = favoritos.filter(unIdDelArray => unIdDelArray !== id) //FORMA 1//
            let idAQuitar = favoritos.indexOf(this.props.id);
            favoritos.splice(idAQuitar, 1);
            this.setState({
                favText: <i className="fa-regular fa-heart"></i>
            })

            if (this.props.borrar) {
                this.props.borrar(this.props.id)
            }

        } else {
            favoritos.push(this.props.id);
            this.setState({
                favText: <i className="fa-solid fa-heart"></i>
            })
        }

        let favsToString = JSON.stringify(favoritos)
        localStorage.setItem('favoritos', favsToString)

        // console.log(localStorage);
    }

    render(){
          return ( 
                <ul id="film">
                    <Link to={`/movie/detail/${this.props.id}`}>
                        <li className="movieTitle">
                            <h3>{this.props.title}</h3>
                        </li>
                        {this.props.img.includes(null) ? 
                            <li>
                                <div className="styleGiphy">
                                    <iframe src="https://giphy.com/embed/21xxijoZGAS4zPpDT9" frameBorder="0" className="giphy-embed" title="giphNoMovie"></iframe>
                                </div>
                            </li>
                        :
                            <li className="movieImg"><img alt="imgFilm" src={this.props.img}/></li>
                        }
                        {/*<li><img alt="imgFilm" src={props.img !== null ? props.img : props}/></li>*/}             
                    </Link>
                    <div className="buttonscards">
                        {this.state.verDesc ? 
                        <section>                            
                            <li className="filmDescription">Overview: {this.props.info}</li> 
                            <button className='buttonCardsB' onClick={() => this.esconder()}><i className="fa-solid fa-xmark"></i></button>
                        </section>
                        :                                                 
                        <button className='buttonCardsB' onClick={() => this.mostrar()}><i className="fa-solid fa-align-justify"></i></button>                           
                        } 
                        <button onClick={() => this.agregarQuitarFavs(this.props.id)} className="buttonCardsB">{this.state.favText}</button>
                    </div>
                    
                </ul>
        )  
    }
}

export default MovieCard;
