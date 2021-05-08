import React from 'react'
import "./link.css"
function AllprojectsCard(props) {
    
   

    

    return(
        <div className="card">
            <div className="card-title"><b><u>{props.name}</u></b></div>

            <div className="com">Description: {props.description}</div>  
            <div className="com">Email: {props.email}</div>
            <div className="anchor" ><a style={{color:"white"}} href={props.link}>Github Url:Link</a></div>
      
          
        </div>
    )
}

export default AllprojectsCard
