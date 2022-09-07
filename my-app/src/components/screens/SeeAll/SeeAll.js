import React, { Component } from "react";

import Form from "../../Form/Form";

import '../SeeAll/SeeAll.css'

/* import Genres from "../../Genres/Genres"; */

import MovieCard from "../../MovieCard/MovieCard";

class SeeAll extends Component{
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            moviesBkp: []
        }
    }

    componentDidMount() {
        //Populars
        let urlPopulars = 'https://api.themoviedb.org/3/movie/popular?api_key=923e730c041add0f009363ab43cb392a&language=en-US&page=1';
        fetch(urlPopulars)
        .then(response => response.json())
        .then( data => this.setState({
            movies: data.results,
            moviesBkp: data.results
        }, console.log(data)))
        .catch(error => console.log(error))
    }

    movieFilter(filteredText){
        let moviesFiltered = this.state.moviesBkp.filter((oneMovie)=> oneMovie.title.toLowerCase().includes(filteredText.toLowerCase()))
        this.setState({
            movies: moviesFiltered
        })
    }
        
    render(){
        return(
            <section className="body">
                <div className="form">
                    <Form movieFilter={(filteredText)=> this.movieFilter(filteredText)}/>
                </div>
                <ul className="filmsBox">
                    {
                        this.state.movies.map((movie, idx) => <li key={movie.title + idx}><MovieCard title={movie.title} img={'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/' + movie.poster_path} info={movie.overview}/></li> )    
                    }
                </ul>
            </section>
        )
    }

        /*if (this.props.location.pathname === 'allFilms') {
            return(
                <React.Fragment>
                    <main className="body">
                        <Films/>     
                    </main>
                </React.Fragment>
            )
        }    
        else if (this.props.location.pathname === 'allSeries') {
            return(
                <React.Fragment>
                    <main className="body">
                        <Series/>     
                    </main>
                </React.Fragment>
            )
        } */
}

export default SeeAll;