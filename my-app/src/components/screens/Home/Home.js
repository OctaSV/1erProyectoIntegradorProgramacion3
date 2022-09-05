import React, { Component } from "react";
import './Home.css';
import Search from '../../Search/Search.js';
import Upcoming from "../../Upcoming/Upcoming";
import Popular from "../../Popular/Popular";


class Home extends Component{




render() {
    return(
        <React.Fragment>
            <main className="body">
                <Search />
                <Popular />
                <Upcoming/>
            </main>
        </React.Fragment>
    )
}}

export default Home;