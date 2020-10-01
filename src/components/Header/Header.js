import React, {Component} from 'react'
import {NavLink, withRouter} from "react-router-dom";
import './Header.css'
import cart from '../assets/cart.svg'


class Header extends Component {


    render() {
        return (
            <div className="header-wrapper">
                <div className='header-logo'>
                    <img src={cart} alt=""/>
                    <span>My Grosery List</span>
                </div>
                <div className="header-links">
                    <NavLink to="/list" activeClassName="header-link-active" className="header-link">List</NavLink>
                    <NavLink to="/entries" activeClassName="header-link-active" className="header-link">Entries</NavLink>
                </div>
            </div>
        )
    }
}

export default withRouter(Header)