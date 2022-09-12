import React, { Component } from "react";
import './Home.css';
import Search from '../../Search/Search.js';

import Movies from '../../Movies/Movies'

class Home extends Component{
render() {
    return(
        <section className= "body">
            <Search />
            <Movies />
        </section>
    )
}}

export default Home;