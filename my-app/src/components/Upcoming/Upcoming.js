import React, { Component } from "react";
import FilmCard from "../FilmCard/FilmCard";

class Upcoming extends Component {


    constructor(props) {
        super(props);
        this.state = {
            peliculasUpcoming : [],
        }
    }

    //popus
    componentDidMount() {
        let url = 'https://api.themoviedb.org/3/movie/upcoming?api_key=923e730c041add0f009363ab43cb392a&language=en-US&page=1';
        fetch(url)
        .then(response => response.json())
        .then( data => this.setState({
            peliculasUpcoming : data.results,

        }))
        .catch(error => console.log(error))
        }

        render () {
            return (
                <section>
                    <div className="titleFilmsBox">
                        <h1>Cartelera</h1>
                        <button className="botonH">Ver todas</button>   
                    </div>

                    <section className="filmsBox">
                        {
                            this.state.peliculasUpcoming === 0 ?
                            <p></p> :
                            this.state.peliculasUpcoming.map( (unaPeli, idx) => <li><FilmCard id={unaPeli + idx} title={unaPeli.title} img={'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/' + unaPeli.poster_path} info={unaPeli.overview}/></li> )
                                
                        }
                    </section>
                </section>

            ) 
        }
} 


export default Upcoming;
