import axios from 'axios'
import React from 'react'
import { useAlert } from 'react-alert'
function DeleteCard(props){

    
    const id=props._id
 
    const DeleteUser=(e)=>{
 
        axios.delete(`/deleteUser/`+id)
        .then(res=>{
         
        })
    }

    return(
        <div className="card">
            <div className="card-title"><b>{props.name}</b></div>
            <div className="com">Email: {props.email}</div>
            <div className="com">Mobile: {props.mobile}</div>    
            <button  onClick={DeleteUser}><b>Delete User</b></button>   
        </div>
    )
}

export default DeleteCard
