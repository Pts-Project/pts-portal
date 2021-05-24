import axios from 'axios'
import React from 'react'

function DeleteEventCard(props){

    
    const id=props._id
 
    const DeleteUser=(e)=>{
 
        axios.delete(`https://peaceful-temple-16111.herokuapp.com/https://pussgrc.herokuapp.com/deleteEvent/`+id,{ crossdomain: true })
        .then(res=>{
            alert("Deleted!")
            window.location.reload()
            
        })
    }

    return(
        <div className="card">
            <div className="card-title"><b>{props.name}</b></div>
            {/* <div className="com">Email: {props.email}</div>
            <div className="com">Mobile: {props.mobile}</div>     */}
            <button  onClick={DeleteUser}><b>Delete Event</b></button>   
        </div>
    )
}

export default DeleteEventCard
