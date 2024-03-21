import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import home from '../../assets/svg/home.svg'
import search from '../../assets/svg/Search.svg'
import icon from '../../assets/svg/icon.svg'
import exit from '../../assets/images/exit.png'
import "./Header.css"

function Header() {
    return (
        <header className="header">
            <img src={logo} />
            <p></p>
            <nav className="nav">
                <Link to='/'>
                <img className='homeLink' src={home} />
                </Link>
                <Link to='/search'>
                    <img src={search} />
                </Link>
                <Link to="/icon">
                    <img src={icon} />
                </Link>
            </nav>
            <Link to='/exit'>
                <img src={exit} className='footer' />
            </Link>


        </header>

    )
}

export default Header