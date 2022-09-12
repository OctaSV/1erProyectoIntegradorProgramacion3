import React, { Component } from "react";

import MovieCard from "../MovieCard/MovieCard";
import Loader from '../Loader/Loader';
import FormFilter from "../Form/FormFilter";

class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            moviesUpComing: [],
            moviesUpComingBkp: [],
            moviesPopulars: [],
            moviesPopularsBkp: [],
            nextPage: 1
        }
    }

    componentDidMount() {
        //Populars
        let urlPopulars = 'https://api.themoviedb.org/3/movie/popular?api_key=923e730c041add0f009363ab43cb392a&language=en-US&page=1';
        fetch(urlPopulars)
        .then(response => response.json())
        .then( data => this.setState({
            moviesPopulars : data.results
        }))
        .catch(error => console.log(error))

        //UpComing
        let urlUpComing = 'https://api.themoviedb.org/3/movie/upcoming?api_key=923e730c041add0f009363ab43cb392a&language=en-US&page=1';
        fetch(urlUpComing)
        .then(response => response.json())
        .then(data => this.setState({
            moviesPopulars: data.results,
            moviesPopularsBkp: data.results
        }))
        .then(() => {
            //Upcoming
            let urlUpComing = 'https://api.themoviedb.org/3/movie/upcoming?api_key=923e730c041add0f009363ab43cb392a&language=en-US&page=1';
            fetch(urlUpComing)
            .then(response => response.json())
            .then(data => this.setState({
                moviesUpComing: data.results,
                moviesUpComingBkp: data.results
            }))
            .catch(error => console.log(error))
            })
        .catch(error => console.log(error))
    }

    More() {
        this.setState({
          nextPage: this.state.nextPage + 1
        })
        console.log(this.state.nextPage)
        let urlPopulars = `https://api.themoviedb.org/3/movie/popular?api_key=923e730c041add0f009363ab43cb392a&language=en-US&page=${this.state.nextPage + 1}`;
        fetch(urlPopulars)
            .then(response => response.json())
            .then( data => this.setState(
                {
                    moviesPopulars: this.state.moviesPopulars.concat(data.results)
                }
            ))
            .then(()=> {
            let urlUpComing = `https://api.themoviedb.org/3/movie/upcoming?api_key=923e730c041add0f009363ab43cb392a&language=en-US&page=${this.state.nextPage + 1}`;
            fetch(urlUpComing)
                .then(response => response.json())
                .then(data => this.setState(
                    {
                        moviesUpComing: this.state.moviesUpComing.concat(data.results)
                    }
                ))
                .catch(error => console.log(error))
            })
            .catch(error => console.log(error))
    }

/*     moreHome(){
        
    } */

    movieFilter(filteredText){
        let moviesPopularsFiltered = this.state.moviesPopularsBkp.filter((oneMovie)=> oneMovie.title.toLowerCase().includes(filteredText.toLowerCase()))
        let moviesUpComingFiltered = this.state.moviesUpComingBkp.filter((oneMovie)=> oneMovie.title.toLowerCase().includes(filteredText.toLowerCase()))
        this.setState({
            moviesUpComing: moviesUpComingFiltered,
            moviesPopulars: moviesPopularsFiltered
        })
    }

    render () {
        console.log(this.state);
        return(
            <React.Fragment>
                {
                    this.props.movieType === '/all/billboard' || this.props.movieType === '/all/populars' ?
                        <div className="formAll">
                            <FormFilter movieFilter={(filteredText)=> this.movieFilter(filteredText)}/>
                        </div>
                    :
                    false
                }
                {
                    this.state.moviesPopulars.length === 0 && this.state.moviesUpComing.length === 0 ?
                        <Loader/>
                    :
                    <>
                        {
                            //HOME
                            this.props.movieType === undefined ?
                                <>
                                    <section>
                                        <div className="titleFilmsBox">
                                            <h1>BILLBOARDS</h1>
                                        </div>                        
                                        <ul className="filmsBox">
                                            {
                                                this.state.moviesUpComing.slice(0, 4).map((movie, idx) => <li key={movie.title + idx}><MovieCard title={movie.title} img={'https://image.tmdb.org/t/p/w300/' + movie.poster_path} info={movie.overview}/></li> )    
                                            }
                                        </ul>                            
                                        <button className="buttonMore" type="button" onClick={()=> this.moreHome()}>MORE</button>                    
                                    </section>
                                    <section>
                                        <div className="titleFilmsBox">
                                            <h1>POPULARS</h1>
                                        </div>
                                        <ul className="filmsBox">
                                            {
                                                this.state.moviesPopulars.slice(0, 4).map((movie, idx) => <li key={movie.title + idx} ><MovieCard title={movie.title} img={'https://image.tmdb.org/t/p/w300/' + movie.poster_path} info={movie.overview}/></li>)
                                            }
                                        </ul>
                                        <button className="buttonMore" type="button" onClick={()=> this.moreHome()}>MORE</button>
                                    </section>
                                </>
                            :
                                <>
                                    {
                                        //ALL BILLBOARDS FILMS
                                        this.props.movieType === '/all/billboard' ?
                                            <>
                                                <section className="body">
                                                    <ul className="filmsBox">
                                                    {
                                                        this.state.moviesUpComing.map((movie, idx) => <li key={movie.title + idx}><MovieCard title={movie.title} img={'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/' + movie.poster_path} info={movie.overview}/></li> )    
                                                    }
                                                    </ul>
                                                    <button className="buttonMore" type="button" onClick={()=> this.More()}>MORE</button>
                                                </section>
                                            </>
                                        : 
                                            <>
                                                {
                                                    //ALL POPULARS FILMS
                                                    this.props.movieType === '/all/populars' ?
                                                        <section className="body">
                                                        <ul className="filmsBox">
                                                            {
                                                                this.state.moviesPopulars.map((movie, idx) => <li key={movie.title + idx}><MovieCard title={movie.title} img={'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/' + movie.poster_path} info={movie.overview}/></li> )    
                                                            }
                                                        </ul>
                                                        <button className="buttonMore" type="button" onClick={()=> this.More()}>MORE</button>
                                                        </section>
                                                    :
                                                    false
                                                }
                                            </> 
                                    }  
                                </>
                            
                            }
                    </>
                }
            </React.Fragment>
        )
    }
} 


export default Movies;
