import React,{ Component,useContext } from "react"
import { Link,useHistory ,NavLink} from "react-router-dom";
import { Icon } from 'react-materialize';
import './navbar.css'
import Logo from '../assets/ptslogo.png'
//import SignedInLinks from './signlinks/signedinlinks'
//import SignedOutLinks from './signlinks/signedoutlinks'
import {UserContext} from '../../App'



const Navbar=()=> {
const {state,dispatch} =useContext(UserContext)
const history=useHistory()
   const renderList=()=>{
       if(state){
           return[
            <li><NavLink className="white-text" to="/">Home</NavLink></li>,
            <li><NavLink className="white-text " to="/about">About</NavLink></li>,
            <li><NavLink className="white-text" to="/events">Events</NavLink></li>,
            <li><NavLink className="white-text" to="/admin-profile">Admin Profile</NavLink></li>,
            <li><NavLink className="white-text" to="/contact">Contact</NavLink></li>,
            <li><NavLink className="white-text" to="/logout" 
             onClick={()=>{
                localStorage.clear()
               dispatch({type:"CLEAR"})
              history.push('/')
            }}
             >Logout</NavLink></li>
           ]
       }else{
           return[
            <li><NavLink className="white-text" to="/">Home</NavLink></li>,
            <li><NavLink className="white-text " to="/about">About</NavLink></li>,
            <li><NavLink className="white-text" to="/events">Events</NavLink></li>,
            <li><NavLink className="white-text" to="/contact">Contact</NavLink></li>,
            <li><NavLink className="white-text" to="/signup">Register</NavLink></li>,
            <li><NavLink className="white-text" to="/login">Login</NavLink></li>
           ]
       }
   }
        return (    
            <div className="navbar-fixed">
                <nav class="transparent z-depth-0">
                    <div className="nav-wrapper black">
                        <Link to="/"><div className="logo left"><img className="logoimg" src={Logo} width="64px" alt="Platform Tech Solutions" style={{marginLeft:"15px"}}/></div></Link>
                        <span className="sidenav-trigger hide-on-large-only right" data-target="slide-out"><Icon>menu</Icon></span>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            {renderList()}
                        </ul>
                    </div>
                </nav>
                <ul className="sidenav black" id="slide-out">
                    {renderList()}
                </ul>
            </div>
        );
    
}
export default Navbar;


/*
import React,{ Component,useContext } from "react"

import { Link } from "react-router-dom";
import { Icon } from 'react-materialize';
import './navbar.css'
import Logo from '../assets/ptslogo.png'
import SignedInLinks from './signlinks/signedinlinks'
import SignedOutLinks from './signlinks/signedoutlinks'
import {UserContext} from '../../App'


class Navbar extends Component {

    constructor(props){
        super(props);
        this.state={
            links:'',
        }
    }

    render() {
        const val=localStorage.getItem("test")
        if(val==='a'){
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
*/