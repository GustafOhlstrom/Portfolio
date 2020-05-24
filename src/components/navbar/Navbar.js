import './navbar.scss'
import logo from '../../assets/images/logo.svg'
import React, { Component } from 'react'

class Navbar extends Component {

    handleBurgerClick = () => {
        document.querySelector('.nav-list').classList.toggle('nav-display')
        document.querySelector('.burger').classList.toggle('burger-toggle')
    }

    render() {
        return (
            <nav id="navbar">
                <a href="/" className="nav-link">
                    <img className="logo" src={logo} title="Logo" alt="Logo"/>
                </a>
                <ul className="nav-list">
                    <li>
                        <a href="/" className="nav-link">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#projects" className="nav-link">
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="nav-link">
                            Contact
                        </a>
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