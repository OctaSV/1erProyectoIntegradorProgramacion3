import React from 'react'
import '../Header/Header.css'

import {Link} from 'react-router-dom'

function Header() {
    

    /* BIENVENIDA A USUARIO */
    /*let nombreUsuario = prompt('Bienvenido! ¿Cúal es tu nombre?');
    if (nombreUsuario !== '') {
        let bienvenida = document.getElementById('welcome');
        bienvenida.innerText = `Bienvenid@ ${nombreUsuario}!`
        bienvenida.style.textTransform = 'uppercase';
    } else{
        let bienvenida = document.getElementById('welcome');
        bienvenida.innerText = `Bienvenid@!`
        bienvenida.style.textTransform = 'uppercase';
    } */


    return(
        <header>
            <ul className='navBar'>
                <img src='logoPag.png' className='logoPag' alt='logo'></img>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/all/billboard'>Billboard</Link></li>
                <li><Link to='/all/populars'>Populars</Link></li>
                <li><Link to='/favorites'>Favorites</Link></li>
            </ul>
            

            
        </header>
    )
}

export default Header;