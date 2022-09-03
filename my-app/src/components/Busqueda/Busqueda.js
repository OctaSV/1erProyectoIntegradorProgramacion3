import React, {Component} from 'react';

class Busqueda extends Component{
    constructor(props){
        super(props);
        this.state={
            value:''
        }
    }

    evitarDefault(evento){
        evento.preventDefault();
        console.log('Evitando el envío');
    }

    obtenerDatos(evento){
        this.setState({
          value: evento.target.value,  
        }, () => console.log(this.state.value))
    }


    render(){
        return(
            <form onSubmit={(evento)=>this.evitarDefault(evento)} className='fa-solid fa-magnifying-glass'>
                <input onChange={(evento)=>this.obtenerDatos(evento)} type="text" name="usuario" value={this.state.value} className='input'/>
                <button type="submit" className='botonL' > <i className="fa-solid fa-magnifying-glass"></i> </button>
            </form>
        )
    }
}


export default Busqueda;