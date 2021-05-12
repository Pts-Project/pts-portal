import React,{useState} from 'react'
import axios from 'axios'
import Card from './UserCard'
import './alluser.css'
function Alluser(){
    const [allUser, setAllUser] = useState([])
    axios.get("https://peaceful-temple-16111.herokuapp.com/https://pussgrc.herokuapp.com/allUsers")
        .then(res=>{
            setAllUser(res.data.users)
        })
    
        // const names=[]
        // const emails=[]
        // const roles=[]
        // allUser.map(data=>{
        //     names.push(data.name)
        //     emails.push(data.email)
        //     roles.push(data.role)
        // })

        // const index = names.indexOf("Admin");
        // if (index > -1) {
        // names.splice(index, 1);
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
                {allUser.map((user)=>(
                    <div className="bot" key={user.name}>
                    
                                <Card  
                                    name={user.name} 
                                    email={user.email}
                                    mobile={user.mobile}
                                    _id={user._id}
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

export default Alluser
