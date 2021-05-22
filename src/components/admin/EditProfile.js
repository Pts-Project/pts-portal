import React ,{useState} from 'react'
import axios from 'axios'

// import { M } from 'materialize-css'
function EditProfile() {
    const details = JSON.parse(localStorage.getItem('user'))
    const [SelImage, setSelImage] = useState("no-image");
    const [Name, setName] = useState(details.name);
    const [Email, setEmail] = useState(details.email);
    const [Password, setPassword] = useState(details.password);
    const [Mobile, setMobile] = useState(details.mobile);
  

    const uploadImage = (files) => {
        
        const formdata = new FormData()
        formdata.append('file', SelImage);
        formdata.append('upload_preset', 'platform')
        formdata.append("folder", "users")
        axios.post('https://api.cloudinary.com/v1_1/djxi7xjop/image/upload', formdata)
            .then(res => {
                console.log(res.data.secure_url)
                const url = res.data.secure_url
                const userdata = {
                    image: url,
                    name: Name,
                    email: Email,
                    mobile: Mobile,
                    password: Password
                }
  
                const id=details._id
                console.log(id)
                axios.put(`https://peaceful-temple-16111.herokuapp.com/https://pussgrc.herokuapp.com/updateProfile/`+id, userdata)
                    .then(res => {
                        // M.toast({ html: "Success", classes: "#43a047 green darken-1" })
                        // window.location=('/admin/panel')
                        localStorage.setItem("user",JSON.stringify(res.data))
                        alert("updated")
                        window.location="/user/profile"
                        
                    })
                    .catch(err => {
                        console.log(err)
                    })

            })
            .catch(err => {
                console.log(err)
            })


    };
    return (
        <div>
            <section className="notlogin">
                <div className="lContainer">
                    <div class="heading">
                        Update User
                </div>

                    <div className="pass">
                        <label>
                            Upload Profile Picture from Device
                        </label>
                        <input
                            type="file"
                            autoFocus
                           
                            onChange={(e) => { setSelImage(e.target.files[0]) }}
                        />
                    </div>
                    {/* <div className="pass">
                        <label>
                            Name
                        </label>
                        <input
                            type="text"
                            //value={Name}
                            defaultValue={details.name}
                            required
                            onChange={(e) => { setName(e.target.value) }}
                        />
                    </div> */}
                    {/* <div className="pass">
                        <label>
                            Email
                    </label>
                        <input
                            type="email"
                            //value={Email}
                            id="userEmail"
                            required
                            defaultValue={details.email}
                            onChange={(e) => { setEmail(e.target.value) }}
                        />

                    </div> */}
                    <div className="pass">
                        <label>
                            Mobile
                        </label>
                        <input
                            type="text"
                            //value={Mobile}
                            required
                            defaultValue={details.mobile}
                            onChange={(e) => { (setMobile(e.target.value)) }}
                        />
                    </div>
                    <div className="pass">
                        <label>
                            Password
                    </label>
                        <input
                            type="password"
                            // value={Password}
                            defaultValue={details.password}
                            required
                            onChange={(e) => { setPassword(e.target.value) }}
                        />
                    </div>
                    <div className="lbtnContainer">
                        <button className="lbtn" onClick={uploadImage} >Update</button>
                    </div>
                </div>
            </section>
        </div>

    );
}

export default EditProfile
