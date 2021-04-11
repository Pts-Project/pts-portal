
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
//mport { createBrowserHistory } from 'history';
//import { useHistory } from "react-router-dom";
import './sign.css'
class loggedoutlinks extends Component {
    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }
    handleLogout = (e) => {
        localStorage.clear();
        localStorage.setItem("test", "b")
        localStorage.setItem("admincheck", "no")
        window.location.reload();
        window.location = ('/')
    }
    render() {
        return (
            <div>
                <li><Link className="white-text" to="/">Home</Link></li>
                <li><a className="white-text" href="/#about">About</a></li>
                <li><a className="white-text" href="/#events">Events</a></li>

                <li><a className="white-text" href="#contact">Contact</a></li>
                <li><a className="white-text" href="/user/profile">Profile</a></li>
                <li><Link className="white-text" onClick={this.handleLogout}>Logout</Link></li>
            </div>
        );
    }
}
export default loggedoutlinks;

