import React from 'react'
import './usercard.css'
function UserCard(props){
    
    return(
        <div className="card">
            <div className="card-title"><b>{props.name}</b></div>
            <div className="com">Email: {props.email}</div>
            <div className="com">Mobile: {props.mobile}</div>
            {/* <div className="loc">Location: {this.props.officelocation}</div>
            <div className="type">Job Type: {this.props.jobtype}</div>
            <br></br> */}
        </div>
    )
}

export default UserCard
