import React from "react";

import '../AllMovies/AllMovies.css';

import Movies from "../../Movies/Movies";

function AllMovies(props){
  return(
    <Movies movieType={props.location.pathname}/>
  )
}

export default AllMovies;