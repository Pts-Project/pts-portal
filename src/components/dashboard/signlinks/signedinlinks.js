import '../navbar.css'
import React, { Component } from 'react'
import { Link, useHistory } from 'react-router-dom'
//import { UserContext } from '../App'
import './sign.css'



class loggedinlinks extends Component {


    render() {
        return (
            <div>
                <li><Link className="white-text" to="/">Home</Link></li>
                <li><Link className="white-text" to="/about">About</Link></li>
                <li><Link className="white-text" to="/events">Events</Link></li>
                <li><Link className="white-text" to="/signup">Register</Link></li>
                <li><Link className="white-text" to="/contact">Contact</Link></li>
                <li><Link className="white-text" to="/login" >Login</Link></li>
            </div>
        );
    }
}
export default loggedinlinks;

