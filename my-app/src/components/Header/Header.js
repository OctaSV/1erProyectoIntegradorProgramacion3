import React from 'react'
import '../Header/Header.css'

import {Link} from 'react-router-dom'

function Header() {
    return(
        <header>
            <ul className='navBar'>
                <div className="logo"><iframe src="https://giphy.com/embed/LITTI5SuHLpu9hvdFL" frameBorder="0" allowFullScreen title="logo"></iframe></div>
                <div className='nav'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/all/billboard'>Billboard</Link></li>
                    <li><Link to='/all/populars'>Populars</Link></li>
                    <li><Link to='/favorites'>Favorites</Link></li>
                </div>
                <li className='lem'> ACTION! <i class="fa-solid fa-film"></i></li>
            </ul>
            

            
        </header>
    )
}

export default Header;