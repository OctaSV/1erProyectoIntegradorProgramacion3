import React, { Component } from "react";
import './MovieCard.css'
import { Link } from 'react-router-dom'

class MovieCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            favText: 'Agregar a favoritos',
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
                    favText: 'Quitar de favoritos'
                })
            } else {
                this.setState({
                    favText: 'Agregar a favoritos'
                })
            }
        }
    }

    agregarQuitarFavs(id){
        // console.log('agregando y quitando');

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
                favText: 'Agregar a favoritos'
            })
        } else {
            favoritos.push(this.props.id);
            this.setState({
                favText: 'Quitar de favoritos'
            })
        }

        let favsToString = JSON.stringify(favoritos)
        localStorage.setItem('favoritos', favsToString)

        console.log(localStorage);
    }

    render(){
    return ( 
            <ul id="film">
                <Link to={`/movie/detail/${this.props.id}`}>
                    <li className="movieTitle"><h3>{this.props.title}</h3></li>
                    {this.props.img.includes(null) ? 
                        <li><div className="styleGiphy"><iframe src="https://giphy.com/embed/21xxijoZGAS4zPpDT9" frameBorder="0" class="giphy-embed" title="giphNoMovie"></iframe></div></li>
                    :
                        <li className="movieImg"><img alt="imgFilm" src={this.props.img}/></li>
                    }
                    {/*<li><img alt="imgFilm" src={props.img !== null ? props.img : props}/></li>*/}             
                </Link>
                    <div className="buttonscards">
                        {this.state.verDesc ? 
                        <section>                            
                            <li className="filmDescription">Overview: {this.props.info}</li> 
                            <button className='more' onClick={() => this.esconder()}>Ver menos</button>
                        </section>
                        :                                                 
                        <button className='more' onClick={() => this.mostrar()}>Ver mas</button>                         
                        
                    } 
                    <button onClick={() => this.agregarQuitarFavs(this.props.id)} className="buttonscards">{this.state.favText}</button>
                    </div>
                
            </ul>
    )
    }
}

export default MovieCard;