import React, { Component } from 'react';

class Genres extends Component {

    constructor(props) {
        super(props);
        this.state = {
            genres : [],
        }
    }

    componentDidMount() {
        let url = 'https://api.themoviedb.org/3/genre/movie/list?api_key=923e730c041add0f009363ab43cb392a&language=en-US';
        fetch(url)
        .then(response => response.json())
        .then(data => this.setState({
            genres: data.genres
        }, console.log(data)))
        .catch(error => console.log(error))
        }

        render () {
            return(
                    <section>
                            <div className="titleGenres">
                                <h1>Genres</h1>
                            </div>
                            <ul className="genresBox">
                            {
                                this.state.genres.length === 0 ?
                                    <div className='divLoader'>
                                        <iframe src="Internet Waiting Sticker for iOS & Android | GIPHY" className='loaderFrame' frameBorder="0" allowFullScreen title='loader'></iframe>
                                    </div>
                                :
                                    this.state.genres.map((genres, idx) => <li key={genres.name + idx}><h2>{genres.name}</h2></li>)
                            }
                            </ul>
                    </section>
            )

        }
} 


export default Genres