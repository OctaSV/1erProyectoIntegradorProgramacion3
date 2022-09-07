import React, { Component } from "react";
import MovieCard from "../MovieCard/MovieCard";

class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            moviesUpcoming: [],
            moviesPopulars: []
        }
    }

    componentDidMount() {
        //Populars
        let urlPopulars = 'https://api.themoviedb.org/3/movie/popular?api_key=923e730c041add0f009363ab43cb392a&language=en-US&page=1';
        fetch(urlPopulars)
        .then(response => response.json())
        .then( data => this.setState({
            moviesPopulares : data.results
        }))
        .catch(error => console.log(error))

        //UpComing
        let urlUpComing = 'https://api.themoviedb.org/3/movie/upcoming?api_key=923e730c041add0f009363ab43cb392a&language=en-US&page=1';
        fetch(urlUpComing)
        .then(response => response.json())
        .then(data => this.setState({
            moviesUpcoming : data.results
        }))
        .catch(error => console.log(error))
    }

    render () {
            if (this.state.moviesPopulars !== [] || this.state.moviesUpcoming !== []) {
                    return (
                        <React.Fragment>
                            <section>
                                <div className="titleFilmsBox">
                                    <h1>Cartelera</h1>
                                    <button className="botonH">Ver todas</button>   
                                </div>
                                <ul className="filmsBox">
                                    {
                                        this.state.moviesUpcoming.map((movie, idx) => <li key={movie.title + idx}><MovieCard title={movie.title} img={'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/' + movie.poster_path} info={movie.overview}/></li> )    
                                    }
                                </ul>
                            </section>
                            <section>
                                <div className="titleFilmsBox">
                                    <h1>Populares</h1>
                                    <button className="botonH">Ver todas</button>   
                                </div>
                                <ul className="filmsBox">
                                    {
                                        this.state.moviesPopulars.map((movie, idx) => <li key={movie.title + idx} ><MovieCard title={movie.title} img={'https://www.themoviedb.org/t/p/w185_and_h450_bestv2/' + movie.poster_path} info={movie.overview}/></li>)
                                    }
                                </ul>
                            </section>
                        </React.Fragment>
                    ) 
            }
            else{
                return(
                    <div className='divLoader'>
                        <iframe src="Internet Waiting Sticker for iOS & Android | GIPHY" className='loaderFrame' frameBorder="0" allowFullScreen title='loader'></iframe>
                    </div>
                )
            }


    }
} 


export default Movies;
