import React, {Component} from 'react';

class Search extends Component{
    constructor(props){
        super(props);
        this.state={
            value:'',
            resultados: []
        }
    }

    evitarDefault(evento){
        evento.preventDefault();
    }

    guardarDatos(evento){
        this.setState({
          value: evento.target.value,  
        })
    }

    obtenerDatos() {
        let url = `https://api.themoviedb.org/3/search/movie?api_key=923e730c041add0f009363ab43cb392a&query=${this.state.value}&page=1&include_adult=false`;

        if(this.state.value === '') {
            return
        }

        fetch(url)
        .then(response => response.json())
        .then( data => this.props.buscar(data.results) )
        .catch(error => console.log(error))
    }

    render(){
        return(
            <form onSubmit={(evento)=>this.evitarDefault(evento)} className='formSearch' action='submit'>
                <input placeholder="Search" onChange={(evento)=>this.guardarDatos(evento)} type="text" name="usuario" value={this.state.value.toUpperCase()} className="inputSearch"/>
                <button type="submit" className='botonL' onClick={(datos) => this.obtenerDatos(datos)}> <i className="fa-solid fa-magnifying-glass"></i> </button>
            </form>
        )
    }
}

export default Search;