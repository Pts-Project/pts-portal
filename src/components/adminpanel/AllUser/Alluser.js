import React,{useState} from 'react'
import axios from 'axios'
const Alluser=(e)=>{
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
      
        return(
            <div>{names}</div>
        );
}

export default Alluser
