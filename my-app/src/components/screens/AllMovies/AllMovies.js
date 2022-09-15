import React, { Component } from "react";

import '../AllMovies/AllMovies.css'

import Movies from "../../Movies/Movies";

class SeeAll extends Component{
    constructor(props) {
        super(props);
        this.state = {
            moviesPopulars: [],
            moviesPopularsBkp: [],
            moviesUpComing: [],
            moviesUpComingBkp: [],
            nextPage: 1,
            value: ''
        }
    }

    More() {
      this.setState({
        nextPage: this.state.nextPage + 1
      })
      console.log(this.state.nextPage)
        //Popular
        let urlPopulars = `https://api.themoviedb.org/3/movie/popular?api_key=923e730c041add0f009363ab43cb392a&language=en-US&page=${this.state.nextPage + 1}`;
        fetch(urlPopulars)
            .then(response => response.json())
            .then(data => this.setState(
                {
                  moviesPopulars: this.state.moviesPopulars.concat(data.results),
                  moviesPopularsBkp: this.state.moviesPopularsBkp.concat(data.results)       
                }
            ))
            .then(()=> {
              //UpComing
              let urlUpComing = `https://api.themoviedb.org/3/movie/upcoming?api_key=923e730c041add0f009363ab43cb392a&language=en-US&page=${this.state.nextPage + 1}`;
              fetch(urlUpComing)
                  .then(response => response.json())
                  .then(data => this.setState(
                      {
                        moviesUpComing: this.state.moviesUpComing.concat(data.results),
                        moviesPopularsBkp: this.state.moviesUpComingBkp.concat(data.results)
                      }
                  ))
                  .catch(error => console.log(error))              
            })
          .catch(error => console.log(error))
    }

    render(){
      return(
          <Movies more={()=> this.More()} movieType={this.props.location.pathname}/>
      )
    }

}

export default SeeAll;