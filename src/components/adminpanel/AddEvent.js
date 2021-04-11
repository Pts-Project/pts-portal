import React, { Component, useState } from 'react'
import { useHistory } from 'react-router-dom'
import M from 'materialize-css'
import './AddEvent.css'
import axios from 'axios'

function AddEvent() {
    const history = useHistory()
    const [SelImage, setSelImage] = useState("");
    const [ImgName, setImgName] = useState("");

    const uploadImage = (files) => {

        const formdata = new FormData()
        formdata.append('file', SelImage);
        formdata.append('upload_preset', 'platform')
        formdata.append("folder", "events")
        axios.post('https://api.cloudinary.com/v1_1/djxi7xjop/image/upload', formdata)
            .then(res => {
                console.log(res.data)
                console.log(res.data.secure_url)
                const url = res.data.secure_url
                console.log(ImgName)
                const cloudata = {
                    image: url,
                    name: ImgName
                }
                axios.post('/event/create', cloudata, {
                    headers: {
                        'Authorization': "Bearer " + localStorage.getItem("jwt")
                    }
                }).then(data => {

                    console.log(data)
                    M.toast({ html: "Sucess", classes: "#43a047 green darken-1" })
                    // window.location=('/admin/panel')
                }).catch(err => {
                    console.log(err)
                })
            }).catch(err => {
                console.log(err)
            });
    }
    if (localStorage.getItem("admincheck") === "yes") {
        return (
            <div>
                <section className="notlogin">
                    <div className="lContainer">
                        <div class="heading">
                            Add Event
                </div>
                        <label>
                            Event Name
                </label>
                        <input
                            type="text"
                            value={ImgName}
                            required
                            onChange={(e) => { setImgName(e.target.value) }}
                        />
                        <div className="pass">
                            <label>
                                Upload Image from Device
                    </label>
                            <input
                                type="file"
                                autoFocus
                                required

                                onChange={(e) => { setSelImage(e.target.files[0]) }}
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
        );
    }
}

export default AddEvent;