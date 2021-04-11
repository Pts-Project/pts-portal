import React from 'react'
import { Link } from 'react-router-dom'
import './admin.css'


const Add = () => {
   return (
      <div className="row">
         <div className="col md-6">
            <Link to="/users/adduser">
               <button style={{ letterSpacing: "2px", margin: "20px" }} className="btn waves-effect #212121 grey darken-4" name="action" type="submit">
                  <strong>ADD USER</strong>
               </button>
            </Link>
         </div>
         <div className="col md-6">
            <Link to="/addevent">
               <button style={{ letterSpacing: "2px", margin: "20px" }} className="btn waves-effect #212121 grey darken-4" name="action" type="submit">
                  <strong>ADD EVENT</strong>
               </button>
            </Link>
         </div>
         <div className="col md-6">
            <Link to="/users/alluser">
               <button style={{ letterSpacing: "2px", margin: "20px" }} className="btn waves-effect #212121 grey darken-4" name="action" type="submit">
                  <strong>ALL USERS</strong>
               </button>
            </Link>
         </div>
         <div className="col md-6">
            <Link to="!@">
               <button style={{ letterSpacing: "2px", margin: "20px" }} className="btn waves-effect #212121 grey darken-4" name="action" type="submit">
                  <strong>DELETE USER</strong>
               </button>
            </Link>
         </div>
         <div className="col md-6">
            <Link to="/events">
               <button style={{ letterSpacing: "2px", margin: "20px" }} className="btn waves-effect #212121 grey darken-4" name="action" type="submit">
                  <strong>ALL EVENTS</strong>
               </button>
            </Link>
         </div>
         <div className="col md-6">
            <Link to="!@">
               <button style={{ letterSpacing: "2px", margin: "20px" }} className="btn waves-effect #212121 grey darken-4" name="action" type="submit">
                  <strong>DELETE EVENT</strong>
               </button>
            </Link>
         </div>
      </div>
   )
}

export default Add