import React from "react";
import './Home.css'


function Home(){
    return(
        <React.Fragment>
           <div className="HeadP">
                <h1>En cartel</h1>
                <button className="botonH">Ver todas</button>   
                
           <ul className="listapelis">
           <li></li>
           <li></li>
           <li></li>
           <li></li>
           <li></li>
           
           </ul>

           </div>

                <div className="HeadC">
                <h1>Populares</h1>
                <button className="botonH">Ver todas</button>
            <ul className="listapelis">

            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            </ul>

            </div>

        </React.Fragment>
    )
}

export default Home;