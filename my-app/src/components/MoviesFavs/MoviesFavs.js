import React, { Component } from 'react'
// import MovieCard from '../MovieCard/MovieCard'

class MoviesFavs extends Component {
    constructor(){
        super();
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
        }
    }

    render(){
        return(
            <React.Fragment>
                <h2>Favoritos</h2>
                <ul></ul>
            </React.Fragment>
        )
    }
}

export default MoviesFavs