import axios from 'axios';
import React ,{useState} from 'react'
import M from 'materialize-css'
function AddProject() {
    const details = JSON.parse(localStorage.getItem('user'))
    const [Desc, setDesc] = useState("");
    const [Name, setName] = useState("");
    const [Link, setLink] = useState("");
    const addProject=(e)=>{
        const projectdata={
                email:details.email,
                name: Name,
                description: Desc,
                link:Link
            
        }
        axios.post("/user/addproject",projectdata)
        .then(res=>{
            M.toast({ html: "Sucess", classes: "#43a047 green darken-1" })
            setName("")
            setDesc("")
            setName("")
            window.location="/user/profile"
            
        })
        .catch(err=>{
            console.log(err)
        })
    }
    return (
        <div>
            <section className="notlogin">
                <div className="lContainer">
                    <div class="heading">
                        Add New Project
            </div>
                    <label>
                        Project Name
                    </label>
                    <input
                        type="text"
                        value={Name}
                        required
                        onChange={(e) => { setName(e.target.value) }}
                    />
                    <div className="pass">
                        <label>
                           Add Description 
                </label>
                <input
                        type="text"
                        value={Desc}
                        required
                        onChange={(e) => { setDesc(e.target.value) }}
                    />
                    <div className="pass">
                        <label>
                           Add Github Link 
                        </label>
                        <input
                            type="text"
                  
                            required
                            value={Link}
                            onChange={(e) => { setLink(e.target.value) }}
                        />
                    </div>
                    <div className="lbtnContainer">
                        <button className="lbtn" onClick={addProject} >Add</button>
                    </div>
                </div>
                </div>
            </section>
        </div>
    );
}

export default AddProject
