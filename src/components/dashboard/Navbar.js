import { Component } from "react"
import React from 'react'
import { Link } from "react-router-dom";
import { Icon } from 'react-materialize';
import './navbar.css'
import Logo from '../assets/ptslogo.png'
import SignedInLinks from './signlinks/signedinlinks'
import SignedOutLinks from './signlinks/signedoutlinks'
class Navbar extends Component {
    constructor(props){
        super(props);
        this.state={
            links:'',
        }
    }

    render() {
        const val=localStorage.getItem("test")
        if(val==='b'){
            var links=<SignedInLinks></SignedInLinks>
        }else{
            var links=<SignedOutLinks></SignedOutLinks>
        }
        return (    
            <div className="navbar-fixed">
                <nav class="transparent z-depth-0">
                    <div className="nav-wrapper black">
                        <Link to="/"><div className="logo left"><img className="logoimg" src={Logo} width="64px" alt="Platform Tech Solutions"></img></div></Link>
                        <span className="sidenav-trigger hide-on-large-only right" data-target="slide-out"><Icon>menu</Icon></span>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            {links}
                        </ul>
                    </div>
                </nav>
                <ul className="sidenav black" id="slide-out">
                    {links}
                </ul>
            </div>
        );
    }
}
export default Navbar;