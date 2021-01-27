import '../navbar.css'
import React, { Component } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
//import { UserContext } from '../App'




class loggedinlinks extends Component {


    render() {
        return (
            <div>
                <li><NavLink className="white-text" to="/">Home</NavLink></li>
                <li><NavLink className="white-text" to="/about">About</NavLink></li>
                <li><NavLink className="white-text" to="/events">Events</NavLink></li>
                <li><NavLink className="white-text" to="/signup">Register</NavLink></li>

                <li><NavLink className="white-text" to="/contact">Contact</NavLink></li>
                <li><NavLink className="white-text" to="/login" >Login</NavLink></li>
            </div>
        );
    }
}
export default loggedinlinks;

