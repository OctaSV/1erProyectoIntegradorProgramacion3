import React, { Component } from "react";

import MovieCard from "../MovieCard/MovieCard";
import Loader from '../Loader/Loader';
import FormFilter from "../Forms/FormFilter/FormFilter";

import {Link} from 'react-router-dom'

class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            moviesUpComing: [],
            moviesUpComingBkp: [],
            moviesPopulars: [],
            moviesPopularsBkp: [],
            nextPage: 1,
            filmsBillEnd: 4,
            filmsPopularsEnd: 4
        }
    }

    componentDidMount() {
        //Populars
        let urlPopulars = 'https://api.themoviedb.org/3/movie/popular?api_key=923e730c041add0f009363ab43cb392a&language=en-US&page=1';
        fetch(urlPopulars)
        .then(response => response.json())
        .then(data => this.setState({
            moviesPopulars: data.results,
            moviesPopularsBkp: data.results
        }))
        .catch(error => console.log(error))
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

    morePopulars(){
        this.setState({
            filmsPopularsEnd: this.state.filmsPopularsEnd + 4
        })
    }

    moreBill(){
        this.setState({
            filmsBillEnd: this.state.filmsBillEnd + 4
        })
    }

    movieFilter(filteredText){
        let moviesPopularsFiltered = this.state.moviesPopularsBkp.filter((oneMovie)=> oneMovie.title.toLowerCase().includes(filteredText.toLowerCase()))
        let moviesUpComingFiltered = this.state.moviesUpComingBkp.filter((oneMovie)=> oneMovie.title.toLowerCase().includes(filteredText.toLowerCase()))
        this.setState({
            moviesUpComing: moviesUpComingFiltered,
            moviesPopulars: moviesPopularsFiltered
        })
    }

    render () {
        return(
            <React.Fragment>
                        {
                            //HOME
                            this.props.movieType === undefined ?
                                <>
                                    {this.state.moviesPopulars.length === 0 || this.state.moviesUpComing.length === 0 ?
                                        <Loader/>
                                    :
                                        <>
                                            <section>
                                                <div className="titleFilmsBox">
                                                    <h1>BILLBOARDS</h1>
                                                </div>                        
                                                <ul className="filmsBox">
                                                    {
                                                        this.state.moviesUpComing.slice(0, this.state.filmsBillEnd).map((movie, idx) => <li key={movie.title + idx}><MovieCard title={movie.title} img={'https://image.tmdb.org/t/p/w300/' + movie.poster_path} info={movie.overview} id={movie.id}/></li>)    
                                                    }
                                                </ul>                            
                                                {
                                                    this.state.filmsBillEnd >= 20 ?
                                                    <Link to="/all/billboard"><button className="buttonMoreAll">ALL</button></Link>
                                                    :
                                                    <button className="buttonMore" type="button" onClick={()=> this.moreBill()}>MORE</button>
                                                }                  
                                            </section>
                                            <section>
                                                <div className="titleFilmsBox">
                                                    <h1>POPULARS</h1>
                                                </div>
                                                <ul className="filmsBox">
                                                    {
                                                        this.state.moviesPopulars.slice(0, this.state.filmsPopularsEnd).map((movie, idx) => <li key={movie.title + idx} ><MovieCard title={movie.title} img={'https://image.tmdb.org/t/p/w300/' + movie.poster_path} info={movie.overview} id={movie.id}/></li>)
                                                    }
                                                </ul>
                                                {
                                                    this.state.filmsPopularsEnd >= 20 ?
                                                    <Link to="/all/populars"><button className="buttonMoreAll">ALL</button></Link>
                                                    :
                                                    <button className="buttonMore" type="button" onClick={()=> this.morePopulars()}>MORE</button>
                                                }
                                            </section>
                                        </>
                                    }
                                </>
                            :
                                <>
                                    {
                                        //ALL BILLBOARDS FILMS
                                        this.props.movieType === '/all/billboard' ?
                                            <section className="body">
                                                <div className="formAll">
                                                    <h1 className="titleForm">BILLBOARD MOVIES</h1>
                                                    <FormFilter hola={'hola'} movieFilter={(filteredText)=> this.movieFilter(filteredText)}/>
                                                </div>
                                                {this.state.moviesUpComing.length === 0 ?
                                                    <Loader/>
                                                :
                                                    <>
                                                        <ul className="filmsBox">
                                                            {
                                                                this.state.moviesUpComing.map((movie, idx) => <li key={movie.title + idx}><MovieCard title={movie.title} img={'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/' + movie.poster_path} info={movie.overview} id={movie.id}/></li> )    
                                                            }
                                                        </ul>
                                                        <button className="buttonMore" type="button" onClick={()=> this.More()}>MORE</button>
                                                    </>
                                                }
                                            </section>
                                        : 
                                            <>
                                                {
                                                    //ALL POPULARS FILMS
                                                    this.props.movieType === '/all/populars' ?
                                                        <section className="body">
                                                            <div className="formAll">
                                                                <h1 className="titleForm">POPULARS MOVIES</h1>
                                                                <FormFilter movieFilter={(filteredText)=> this.movieFilter(filteredText)}/>
                                                            </div>
                                                            {this.state.moviesPopulars.length === 0 ?
                                                                <Loader/>
                                                            :
                                                                <>
                                                                    <ul className="filmsBox">
                                                                        {
                                                                            this.state.moviesPopulars.map((movie, idx) => <li key={movie.title + idx}><MovieCard title={movie.title} img={'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/' + movie.poster_path} info={movie.overview} id={movie.id}/></li> )    
                                                                        }
                                                                    </ul>
                                                                    <button className="buttonMore" type="button" onClick={()=> this.More()}>MORE</button>
                                                                </>
                                                            }
                                                        </section>                                                      
                                                    :
                                                        false
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
