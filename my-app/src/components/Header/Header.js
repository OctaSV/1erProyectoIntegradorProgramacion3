import React from 'react'

import {Link} from 'react-router-dom'

function Header() {
    return(
        <header>
            <ul>
                <li><img src='' alt='logo'></img></li>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/favorites'>Favorites</Link></li>
                <li><Link to='/films'>Films</Link></li>
                <li><Link to='/series'>Series</Link></li>
            </ul>
        </header>
    )
}

export default Header;