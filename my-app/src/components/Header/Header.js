import React from 'react'
import Busqueda from '../Busqueda/Busqueda.js';
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
                <li><Link to='/favorites'>Favorites</Link></li>
                <li><Link to='/films'>Films</Link></li>
                <li><Link to='/series'>Series</Link></li>
            </ul>
            <Busqueda/>
            <ul className='user'>
                <li><p id='welcome'>user name</p></li>
            </ul>
            
        </header>
    )
}

export default Header;