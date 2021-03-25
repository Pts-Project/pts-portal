
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { createBrowserHistory } from 'history';
import { useHistory } from "react-router-dom";
import './sign.css'
class loggedoutlinks extends Component {
    constructor(props){
        super(props);
        this.handleLogout=this.handleLogout.bind(this);
    }
    handleLogout=(e)=>{
        localStorage.clear();
        localStorage.setItem("test","b")
        localStorage.setItem("admincheck","no")
        window.location.reload();
        window.location=('/')
    }
    render() {  
        return (
            <div>
                <li><Link className="white-text" to="/">Home</Link></li>
                <li><Link className="white-text " to="/about">About</Link></li>
                <li><Link className="white-text" to="/events">Events</Link></li>
                <li><Link className="white-text" to="/register">Register</Link></li>

                <li><Link className="white-text" to="/contact">Contact</Link></li>
                <li><Link className="white-text" onClick={this.handleLogout}>Logout</Link></li>
            </div>
        );
    }
}
export default loggedoutlinks;

