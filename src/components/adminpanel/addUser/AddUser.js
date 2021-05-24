import React, {  useState } from 'react'
import '../AddEvent.css'
import axios from 'axios'
import M from 'materialize-css'


function AddUser() {
    const [SelImage, setSelImage] = useState("no-image");
    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [Mobile, setMobile] = useState("");


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
                axios.post('https://peaceful-temple-16111.herokuapp.com/https://pussgrc.herokuapp.com/user/signup', userdata)
                    .then(res => {
                        M.toast({ html: "Sucess", classes: "#43a047 green darken-1" })
                        setEmail("")
                        setMobile("")
                                                setName("")
                        setPassword("")
                        setSelImage("")
                        window.location.reload();
                        window.location=('/admin/panel')
                    })
                    .catch(err => {
                        console.log(err)
                    })

            })
            .catch(err => {
                console.log(err)
            })


    };




    if (localStorage.getItem("admincheck") === "yes") {
        return (
            <div>
                <section className="notlogin">
                    <div className="lContainer">
                        <div class="heading">
                            Register User
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
                        <div className="pass">
                            <label>
                                Name
                            </label>
                            <input
                                type="text"
                                value={Name}
                                required
                                onChange={(e) => { setName(e.target.value) }}
                            />
                        </div>
                        <div className="pass">
                            <label>
                                Email
                        </label>
                            <input
                                type="email"
                                value={Email}
                                id="userEmail"
                                required
                                onChange={(e) => { setEmail(e.target.value) }}
                            />

                        </div>
                        <div className="pass">
                            <label>
                                Mobile
                            </label>
                            <input
                                type="text"
                                value={Mobile}
                                required
                                onChange={(e) => { (setMobile(e.target.value)) }}
                            />
                        </div>
                        <div className="pass">
                            <label>
                                Password
                        </label>
                            <input
                                type="password"
                                value={Password}
                                required
                                onChange={(e) => { setPassword(e.target.value) }}
                            />
                        </div>
                        <div className="lbtnContainer">
                            <button className="lbtn" onClick={uploadImage} >Add</button>
                        </div>
                    </div>
                </section>
            </div>

        );
    } else {
        return (
            <div className="sorry">
                <h1>Sorry you are not authorized</h1>
            </div>
        )
    }
}
export default AddUser;