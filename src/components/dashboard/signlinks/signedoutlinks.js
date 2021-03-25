
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
        if(localStorage.getItem("admincheck")==="yes"){
            return (
                <div>
                    <li><Link className="white-text" to="/">Home</Link></li>
                    <li><Link className="white-text " to="/about">About</Link></li>
                    <li><Link className="white-text" to="/events">Events</Link></li>
                    <li><Link className="white-text" to="/admin/panel">Dashboard</Link></li>
                    <li><Link className="white-text" to="/contact">Contact</Link></li>
                    <li><Link className="white-text" to="/adduser">Register New User</Link></li>
                    <li><Link className="white-text" to="/addevent">Add New Event</Link></li>
                
                    <li><Link className="white-text" onClick={this.handleLogout}>Logout</Link></li>
                </div>
            );
        }else{
        return (
            <div>
                <li><Link className="white-text" to="/">Home</Link></li>
                <li><Link className="white-text " to="/about">About</Link></li>
                <li><Link className="white-text" to="/events">Events</Link></li>
                
                <li><Link className="white-text" to="/user/profile">My Profile</Link></li>
                <li><Link className="white-text" to="/contact">Contact</Link></li>
                <li><Link className="white-text" onClick={this.handleLogout}>Logout</Link></li>
            </div>
        );
        }
    }
}
export default loggedoutlinks;

