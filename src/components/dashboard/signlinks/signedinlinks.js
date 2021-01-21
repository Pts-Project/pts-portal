import '../navbar.css'
import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'

class loggedinlinks extends Component {
    render(){
        return (
            <div>
                <li><NavLink className="white-text" to="/">Home</NavLink></li>
                <li><NavLink className="white-text " to="/about">About</NavLink></li>
                <li><NavLink className="white-text" to="/events">Events</NavLink></li>
                <li><NavLink className="white-text"  to="/register">Register</NavLink></li>
                <li><NavLink className="white-text"  to="/login">Log Out</NavLink></li>
                <li><NavLink className="white-text"  to="/contact">Contact</NavLink></li>
            </div>
        );
    }
}
export default loggedinlinks;

