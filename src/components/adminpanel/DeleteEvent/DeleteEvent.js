import React,{useState} from 'react'
import axios from "axios"
import Card from './DeleteEventCard'
function DeleteEvent() {
    const [allEvents, setAllEvents] = useState([])
    axios.get("https://peaceful-temple-16111.herokuapp.com/https://pussgrc.herokuapp.com/events")
        .then(res=>{
            setAllEvents(res.data.list)
        })
  
        // allEvents.map(data=>{
        //     names.push(data.name)
      
        // })
      

     
      

    
        
        // for(let i=0;i<allUse.r.length;i++){
        //     console.log("fdfd",allUser[i])
        //     username.push(allUser[i])    

        // }

        return(
            <div> 
                <div
                    style={{
                        fontSize: "3rem",
                        marginTop: "20px",
                        color: "#fff",
                    }}
                    ><div className="tophead">All Users</div>
                        
                </div>
    
                <div className="row">    
                    {allEvents.map((event)=>(
                        <div className="bot" key={event.name}>
                        
                                    <Card  
                                        name={event.name} 
                                        _id={event._id} 
                                        // email={user.email}
                                        // mobile={user.mobile}
                                        // _id={user._id}
                                        // officelocation={user.}
                                        // company={job.company}
                                        // publisher={job.publisher}
                                    />
                        
                        
                        </div>
                    ))}
                </div>
    
            </div>
        );
}
export default DeleteEvent