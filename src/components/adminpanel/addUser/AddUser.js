import React, { Component, useState } from 'react'
import '../AddEvent.css'
import axios from 'axios'

function AddUser() {
    const [SelImage, setSelImage] = useState("");
    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");



    const uploadImage = (files) => {

        const formdata = new FormData()
        formdata.append('file', SelImage);
        formdata.append('upload_preset', 'platform')
        formdata.append("folder","users")
        axios.post('https://api.cloudinary.com/v1_1/djxi7xjop/image/upload', formdata)
            .then(res => {
                console.log(res.data.secure_url)
                const url = res.data.secure_url
                const userdata = {
                    image: url,
                    name: Name,
                    email:Email,
                    password:Password
                }
                axios.post('http://localhost:5000/adduser', userdata)
                    .then(res => {

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
                        Add Event
                </div>
                  
                    <div className="pass">
                        <label>
                            Upload Profile Picture from Device
                        </label>
                        <input
                            type="file"
                            autoFocus
                            required

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
                        required
                        onChange={(e) => {setEmail(e.target.value) }}
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
}
export default AddUser;