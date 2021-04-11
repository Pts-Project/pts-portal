import '../navbar.css'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
//import { UserContext } from '../App'
import './sign.css'



class loggedinlinks extends Component {


    render() {
        return (
            <div>
                <li><Link className="white-text" to="/">Home</Link></li>
                <li><a className="white-text" href="/#about">About</a></li>
                <li><a className="white-text" href="/#events">Events</a></li>

                <li><a className="white-text" href="#contact">Contact</a></li>
                <li><Link className="white-text" to="/login" >Login</Link></li>
            </div>
        );
    }
}
export default loggedinlinks;

