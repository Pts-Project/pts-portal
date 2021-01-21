
import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'

class loggedoutlinks extends Component {
    render(){
        return (
            <div>
                <li><NavLink className="white-text" to="/">Home</NavLink></li>
                <li><NavLink className="white-text " to="/about">About</NavLink></li>
                <li><NavLink className="white-text" to="/events">Events</NavLink></li>
                <li><NavLink className="white-text"  to="/register">Register</NavLink></li>
                <li><NavLink className="white-text"  to="/login">Login</NavLink></li>
                <li><NavLink className="white-text"  to="/contact">Contact</NavLink></li>
            </div>
        );
    }
}
export default loggedoutlinks;

