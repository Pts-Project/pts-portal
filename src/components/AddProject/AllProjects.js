import React,{useState} from 'react'
// import Alluser from '../adminpanel/AllUser/Alluser'
import axios from 'axios'
import Card from './AllprojectsCard'
function AllProjects() {
    const details = JSON.parse(localStorage.getItem('user'))
    const [AllProjects, setAllProjects] = useState([])
    axios.get("https://peaceful-temple-16111.herokuapp.com/https://pussgrc.herokuapp.com/allprojects")
        .then(res=>{
            setAllProjects(res.data.users)
          
            
        })
        

      
    return (
        <div>
            <div> 
                <div
                    style={{
                        fontSize: "3rem",
                        marginTop: "20px",
                        color: "#fff",
                    }}
                    ><div className="tophead">All Projects</div>
                        
                </div>
    
                <div className="row">    
                    {AllProjects.map((pro)=>(
                        <div className="bot" key={pro.email}>
                        
                                    <Card  
                                        name={pro.name} 
                                        email={pro.email}
                                        description={pro.description}
                                        link={pro.link}
                                       
                                    />
                        
                        
                        </div>
                    ))}
                </div>
    
            </div>
        </div>
      
    );
}

export default AllProjects
