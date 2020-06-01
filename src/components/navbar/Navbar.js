import './navbar.scss'
import logo from '../../assets/images/logo.svg'
import React, { Component } from 'react'
import { Link } from "react-scroll";

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
                        <Link
                            className="nav-link"
                            activeClass="active"
                            to="home"
                            spy={true}
                            smooth={true}
                            duration={500}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="nav-link"
                            activeClass="active"
                            to="projects"
                            spy={true}
                            smooth={true}
                            duration={500}
                        >
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="nav-link"
                            activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            duration={500}
                        >
                            Contact
                        </Link>
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