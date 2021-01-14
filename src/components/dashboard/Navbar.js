import { Component } from "react"
import React from 'react'
import { Link } from "react-router-dom";
import { Icon } from 'react-materialize';
import './navbar.css'
import Logo from '../assets/ptslogo.png'
class Navbar extends Component {
    render() {
        return (
            <div className="navbar-fixed">
                <nav>
                    <div className="nav-wrapper black">
                        <Link to="/"><div className="logo left"><img className="logoimg" src={Logo} width="25%" alt="Platform Tech Solutions"></img></div></Link>
                        <span className="sidenav-trigger hide-on-large-only right" data-target="slide-out"><Icon>menu</Icon></span>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><Link className="white-text  center-align" to="/">Home</Link></li>
                            <li><Link className="white-text " to="/about">About</Link></li>
                            <li><Link className="white-text" to="/ourwork">Our Work</Link></li>
                            <li><Link className="white-text" to="/events">Events</Link></li>
                            <li><Link className="white-text" to="/contact">Register</Link></li>
                            <li><Link className="white-text" to="/contact">Login</Link></li>
                            <li><Link className="white-text" to="/contact">Contact</Link></li>

                        </ul>
                    </div>
                </nav>
                <ul className="sidenav black" id="slide-out">
                    <li><Link className="sidenav-close white-text" to="/">Home</Link></li>
                    <li><Link className="sidenav-close white-text " to="/about">About</Link></li>
                    <li><Link className="sidenav-close white-text" to="/ourwork">Our Work</Link></li>
                    <li><Link className="sidenav-close white-text" to="/events">Events</Link></li>
                    <li><Link className="sidenav-close white-text" to="/contact">Register</Link></li>
                    <li><Link className="sidenav-close white-text" to="/contact">Login</Link></li>
                    <li><Link className="sidenav-close white-text" to="/contact">Contact</Link></li>
                </ul>
            </div>
        );
    }
}
export default Navbar;