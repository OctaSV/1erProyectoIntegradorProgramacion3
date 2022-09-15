import React, { Component } from 'react'
import {Route, Switch, Link} from 'react-router-dom'

class MovieDetail extends Component {

    

    constructor(props){
        super(props);
        this.state = {
            id: Number(props.match.params.id),
            dataMovie: {
                genres: []
            }
        }
    };

    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/movie/${this.state.id}?api_key=d1566b6a7005fc1288c0cf8495a15e2e&language=en-US`)
        .then(response => response.json())
        .then(info => this.setState({
            dataMovie: info
        }, () => console.log(info)))
        .catch(err => console.log(err))
    }

    render(){
        return(
            <React.Fragment>
                <h1>El titulo de la pelicula es: {this.state.dataMovie.title}</h1>
                <img src={`https://image.tmdb.org/t/p/w342/${this.state.dataMovie.poster_path}`} alt={`Portada de la pelicula ${this.state.dataMovie.title}`}/>
                <ul>
                    <li>Rating: {this.state.dataMovie.vote_average}</li>
                    <li>Fecha de estreno: {this.state.dataMovie.release_date}</li>
                    <li>Duracion: {this.state.dataMovie.runtime} minutos</li>
                    <li>Sinopsis: {this.state.dataMovie.overview}</li>
                    <ul>
                        Generos: {this.state.dataMovie.genres.map((generoUno, i) => <li key = {generoUno.id + i}> {generoUno.name} </li>)}
                    </ul>
                </ul>
            </React.Fragment>
            
        )
    }
}

export default MovieDetail