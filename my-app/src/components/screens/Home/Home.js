import React, { Component } from "react";
import './Home.css';
import Search from '../../Search/Search.js';
import MovieCard from "../../MovieCard/MovieCard";
import Movies from '../../Movies/Movies'


class Home extends Component{
    constructor(){
        super();
        this.state = {
            pelisBuscadas: [],
            busqueda: false
        }
}

searchResults(datos) {
    this.setState ({
        pelisBuscadas: datos,
        busqueda: true
    })
}


render() {
    return(
        <section className="body">
            <Search buscar={(datos) => this.searchResults(datos)}  />
            {
                this.state.busqueda ? 
                    <>
                        <button  onClick={() => this.setState({busqueda: false})}> Volver </button>
                        {
                            this.state.pelisBuscadas.length === 0 ?
                            <h1>No se encontraron resultados</h1>
                            :
                            this.state.pelisBuscadas.map((unaPeli, idx) => <MovieCard key={unaPeli.title + idx} title={unaPeli.title} img={'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/' + unaPeli.poster_path} info={unaPeli.overview}/>) 
                        }
                    </>
                :
                <><Movies/></>
            }
      </section>
        
    )
}}

export default Home;
