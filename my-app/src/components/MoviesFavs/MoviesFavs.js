import React, { Component } from 'react'
import MovieCard from '../MovieCard/MovieCard'
import './MoviesFavs.css'
import Loader from '../Loader/Loader';

class MoviesFavs extends Component {
    constructor(props){
        super(props);
        this.state = {
            favoritos: [],
            loading: true
        }
    }

    componentDidMount(){
        let favoritos = [];
        let recuperoStorage = localStorage.getItem('favoritos')

        console.log(recuperoStorage);

        if (recuperoStorage !== null) {

            console.log('if');

            let storageToArray = JSON.parse(recuperoStorage)
            favoritos = storageToArray

            if (favoritos.length === 0) {
                this.setState({
                    loading: false
                })
            }

            // console.log(favoritos);

            let peliculas = [];

            favoritos.map(unIdDelArray => (
            fetch(`https://api.themoviedb.org/3/movie/${unIdDelArray}?api_key=d1566b6a7005fc1288c0cf8495a15e2e&language=en-US`)
            .then(response => response.json())
            .then(info => {
                peliculas.push(info);
                this.setState({
                    favoritos: peliculas,
                    loading: false
                })
            })
            .catch(err => console.log(err)) 
            ))

            // console.log(peliculas);
        } else {

            console.log('else');

            this.setState({
                loading: false
            })
        }
    }

    borrarPelicula(idPeliABorrar){
        let arrayFiltrado = this.state.favoritos.filter(unaPeli => unaPeli.id !== idPeliABorrar)

        this.setState({
            favoritos: arrayFiltrado
        })
    }

    render(){
        return(
            <React.Fragment>
                {this.state.loading ? 

                <Loader/> 

                : 
                
                this.state.favoritos.length === 0 ? 

                <div className='container-favs'>
                    <h1 className='titulo-no-fav'>Aún no hay películas favoritas</h1>
                    <p className='agrega-fav'>¡Comenza a agregar ahora!</p>
                </div>
                

                :

                <section className='body'>
                    <h1>FAVORITAS</h1>
                    <ul className="filmsBox">
                        {
                            this.state.favoritos.map((unaPeli, i) => <li key={unaPeli.title + i}><MovieCard title={unaPeli.title} img={'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/' + unaPeli.poster_path} info={unaPeli.overview} id={unaPeli.id} borrar={(id) => this.borrarPelicula(id)}/></li> )
                        }
                    </ul>
                </section>}
            </React.Fragment>
            
        )
    }
}

export default MoviesFavs