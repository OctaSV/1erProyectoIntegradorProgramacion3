import React from "react";

import'../NotFound/NotFound.css'

function NotFound(){

    return(
        <React.Fragment>
            <ul className="notFound">
                <li><h1>404</h1></li>
                <li><h2>NOT FOUND</h2></li>
                <li><h3>NO ES POR ACÁ REY</h3></li>
            </ul>
        </React.Fragment>
    )

}

export default NotFound;