import React from 'react';
import '../Header/Header.css';

import {Link} from 'react-router-dom';

function Header() {
    return(
        <header>
            <ul className='navBar'>
                <div className="logo">
                    <iframe src="https://giphy.com/embed/LITTI5SuHLpu9hvdFL" frameBorder="0" allowFullScreen title="logo"></iframe>
                </div>
                <div className='nav'>
                    <Link to='/'><li className='navItem'>Home</li></Link>
                    <Link to='/all/billboard'><li className='navItem'>Billboard</li></Link>
                    <Link to='/all/populars'><li className='navItem'>Populars</li></Link>
                    <Link to='/favorites'><li className='navItem'>Favorites</li></Link>                
                </div>
                <li className='lem'> ACTION! <i className="fa-solid fa-film"></i></li>
            </ul>
        </header>
    )
}

export default Header;