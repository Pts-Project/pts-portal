import React,{useState} from 'react'
import axios from 'axios'

function DeleteUser() {
    const [allUser, setAllUser] = useState([])
    axios.get("/allUsers")
        .then(res=>{
            setAllUser(res.data.users)
        })
        const names=[]
        const emails=[]
        const roles=[]
        allUser.map(data=>{
            names.push(data.name)
            emails.push(data.email)
            roles.push(data.role)
        })

        const index = names.indexOf("Admin");
        if (index > -1) {
        names.splice(index, 1);
        }
      

    
        
        // for(let i=0;i<allUse.r.length;i++){
        //     console.log("fdfd",allUser[i])
        //     username.push(allUser[i])    

        // }

    return(
      <div>{names}</div> 
       
    );
}

export default DeleteUser
