import React, { Component } from "react";

import './Home.css';

import Search from '../../Forms/Search/Search.js';
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
            <div className="formAll">
                <h1 className="titleForm">MOVIES</h1>
                <Search buscar={(datos) => this.searchResults(datos)} />
            </div>
            {
                this.state.busqueda ? 
                    <>
                        <button className="goBack" onClick={() => this.setState({busqueda: false})}> Go back </button>
                        {
                                this.state.pelisBuscadas.length === 0 ?
                                <h1>No se encontraron resultados para tu búsqueda</h1>
                            :
                                <ul className="filmsBox">
                                    {
                                        this.state.pelisBuscadas.map((unaPeli, idx) => <li key={unaPeli.title + idx}><MovieCard key={unaPeli.title + idx} title={unaPeli.title} img={'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/' + unaPeli.poster_path} info={unaPeli.overview}/></li>) 
                                    }
                                </ul>
                        }
                    </>
                :
                    <Movies />
            }
      </section>
        
    )
}}

export default Home;
