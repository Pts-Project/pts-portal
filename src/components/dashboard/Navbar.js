import { Component } from "react"
import React from 'react'
import { Link } from "react-router-dom";
import {Icon} from 'react-materialize';
import './navbar.css';
import SignInLinks from './signlinks/signedinlinks'
import SignOutLinks from './signlinks/signedoutlinks'
class Nav extends Component{
    render(){
        const val=localStorage.getItem('test')
        var links;
        if(val==="a"){
            links=<SignOutLinks></SignOutLinks>
        }else{
            links=<SignInLinks></SignInLinks>
        }
        return(

            <div>
                <nav>
                    <div className="nav-wrapper black">
                        <Link to="/"><span className="logo left">JobPortal</span></Link>
                        <span className="sidenav-trigger hide-on-large-only right" data-target="slide-out"><Icon>menu</Icon></span>
                            <ul id="nav-mobile" className="right hide-on-med-and-down">
                                {/* <li><Link className="menu1 white-text" to="/findJob">Find A Job</Link></li>
                                <li><Link className="white-text" to="/postJob">Post A Job</Link></li>
                                <li><Link className="white-text" to="/login">Login</Link></li>
                                <li><Link className="white-text"  to="/register">Register</Link></li> */}
                                {links}
                            </ul>
                    </div>
                </nav>
                <ul className="sidenav black" id="slide-out">
                    {/* <li><Link className="sidenav-close white-text" to="/findJob">Find a Job</Link></li>
                    <li><Link className="sidenav-close white-text" to="/postJob">Post a Job</Link></li>
                    <li><Link className="sidenav-close white-text" to="/login">Login</Link></li>
                    <li><Link className="sidenav-close white-text" to="/register">Register</Link></li> */}
                    {links}
                </ul>
        </div>
        );
    }
}
export default Nav;