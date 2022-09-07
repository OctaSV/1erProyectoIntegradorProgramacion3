import React, {Component} from 'react';

class Form extends Component{
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
        console.log(this.props);
        return(
            <form onSubmit={(e)=>this.noDefault(e)} action="">
                <input onChange={(e)=> this.getData(e)} type="text" value={this.state.value.toLocaleUpperCase()} />
            </form>
        )
    }
}

export default Form;