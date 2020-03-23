import './navbar.scss'
import React, { Component } from 'react'
import { Link, NavLink } from "react-router-dom";

class Navbar extends Component {

    handleBurgerClick = () => {
        document.querySelector('.nav-list').classList.toggle('nav-display')
        document.querySelector('.burger').classList.toggle('burger-toggle')
    }

    render() {
        return (
            <nav id="navbar">
                <Link exact className="logo" to="/">
                    Gustaf Ohlström
                </Link>
                <ul className="nav-list">
                    <li>
                        <NavLink exact className="nav-link" to="/">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link" to="/Projects">
                            Projects
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link" to="/About">
                            About
                        </NavLink>
                    </li>
                </ul>
                <div 
                    className="burger"
                    onClick={this.handleBurgerClick}
                >
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </nav>
        )
    }
}

export default Navbar