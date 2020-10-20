import React from 'react'
import './Header.scss'
import cart from '../assets/cart.svg'


const Header = () => (
    <header className="header">
        <img className='header-logo' src={cart} alt=""/>
        <span>My Grosery List</span>
    </header>
)

export default Header