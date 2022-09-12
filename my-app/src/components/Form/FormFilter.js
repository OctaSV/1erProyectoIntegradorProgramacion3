import React, {Component} from 'react';

class FormFilter extends Component{
    constructor(props){
        super(props);
        this.state={
            value:''
        }
    }

    noDefault(e){
        e.preventDefault();
    }

    getData(e){
        this.setState({
          value: e.target.value,  
        }, ()=> this.props.movieFilter(this.state.value))
    }

    render(){
        return(
            <form className='formAll' onSubmit={(e)=>this.noDefault(e)} action="submit">
                <input placeholder="Search" onChange={(e)=> this.getData(e)} type="text" value={this.state.value.toLocaleUpperCase()} />
            </form>
        )
    }
}

export default FormFilter;