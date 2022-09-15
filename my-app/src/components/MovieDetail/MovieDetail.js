import React, { Component } from 'react'


class MovieDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: Number(props.match.params.id),
            dataMovie: {
                genres: []
            },
            favText: <i class="fa-regular fa-heart"></i>
        }
    };

    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/movie/${this.state.id}?api_key=d1566b6a7005fc1288c0cf8495a15e2e&language=en-US`)
        .then(response => response.json())
        .then(info => this.setState({
            dataMovie: info
        }, () => console.log(info)))
        .catch(err => console.log(err))

        let favoritos = [];
        let recuperoStorage = localStorage.getItem('favoritos');

        if (recuperoStorage !== null) {
            let storageToArray = JSON.parse(recuperoStorage);
            favoritos = storageToArray

            if (favoritos.includes(this.state.id)) {
                this.setState({
                    favText: <i class="fa-solid fa-xmark"></i>
                })
            } else {
                this.setState({
                    favText: <i class="fa-regular fa-heart"></i>
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

        if (favoritos.includes(id)) {
            // favoritos = favoritos.filter(unIdDelArray => unIdDelArray !== id) //FORMA 1//
            let idAQuitar = favoritos.indexOf(id);
            favoritos.splice(idAQuitar, 1);
            this.setState({
                favText: <i class="fa-regular fa-heart"></i>
            })
        } else {
            favoritos.push(id);
            this.setState({
                favText: <i class="fa-solid fa-xmark"></i>
            })
        }

        let favsToString = JSON.stringify(favoritos)
        localStorage.setItem('favoritos', favsToString)

        console.log(localStorage);
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
                <button onClick={() => this.agregarQuitarFavs(this.state.id)}>{this.state.favText}</button>
            </React.Fragment>
            
        )
    }
}

export default MovieDetail