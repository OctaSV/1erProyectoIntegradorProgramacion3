import React, { Component } from "react";
import FilmCard from "../FilmCard/FilmCard";

class Popular extends Component {


    constructor(props) {
        super(props);
        this.state = {
            peliculasPopulares : [],
        }
    }

    //popus
    componentDidMount() {
        let url = 'https://api.themoviedb.org/3/movie/popular?api_key=923e730c041add0f009363ab43cb392a&language=en-US&page=1';
        fetch(url)
        .then(response => response.json())
        .then( data => this.setState({
            peliculasPopulares : data.results,

        }))
        .catch(error => console.log(error))
        }

        render () {
            return (
                <React.Fragment>
                    <div className="HeadP">
                        <h1>Populares</h1>
                        <button className="botonH">Ver todas</button>   
                    </div>
                    <section className="listapelis">
                    {
                        this.state.peliculasPopulares === 0 ?
                        <p></p> :
                        this.state.peliculasPopulares.map( (unaPeli, idx) => <FilmCard id={unaPeli + idx} title={unaPeli.title} img={'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/' + unaPeli.poster_path} info={unaPeli.overview}/> )
                        
                    }
                    </section>
                </React.Fragment>

            ) 
        }
} 


export default Popular;
