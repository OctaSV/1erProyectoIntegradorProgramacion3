import React, { Component } from 'react'
import MovieCard from '../../MovieCard/MovieCard';

class MoviesFavs extends Component {
    constructor(props){
        super(props);
        this.state = {
            favoritos: []
        }
    }

    componentDidMount(){
        let favoritos = [];
        let recuperoStorage = localStorage.getItem('favoritos')

        if (recuperoStorage !== null) {
            let storageToArray = JSON.parse(recuperoStorage)
            favoritos = storageToArray

            console.log(favoritos);

            let peliculas = [];

            favoritos.map(unIdDelArray => (
            fetch(`https://api.themoviedb.org/3/movie/${unIdDelArray}?api_key=d1566b6a7005fc1288c0cf8495a15e2e&language=en-US`)
            .then(response => response.json())
            .then(info => {
                peliculas.push(info);
                this.setState({
                    favoritos: peliculas
                })
            })
            .catch(err => console.log(err)) 
            ))

            console.log(peliculas);

        }
    }

    render(){
        return(
            <React.Fragment>
                <section className='body'>
                    <h2>Favoritos</h2>
                    <ul className="filmsBox">
                        {
                            this.state.favoritos.map((unaPeli, i) => <li key={unaPeli.title + i}><MovieCard title={unaPeli.title} img={'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/' + unaPeli.poster_path} info={unaPeli.overview} id={unaPeli.id}/></li> )
                        }
                    </ul>
                </section>
            </React.Fragment>
        )
    }
}

export default MoviesFavs