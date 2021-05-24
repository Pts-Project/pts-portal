import React, {  useState } from 'react'

import M from 'materialize-css'
import './AddEvent.css'
import axios from 'axios'

function AddEvent() {
 
    const [SelImage, setSelImage] = useState("");
    const [ImgName, setImgName] = useState("");
    
     const [formurl, setFormurl] = useState("")

    const uploadImage = (files) => {

        const formdata = new FormData()
        formdata.append('file', SelImage);
        formdata.append('upload_preset', 'platform')
        formdata.append("folder", "events")
        axios.post('https://api.cloudinary.com/v1_1/djxi7xjop/image/upload', formdata)
            .then(res => {
            
                const url = res.data.secure_url
                console.log(ImgName)
                const cloudata = {
                    image: url,
                    name: ImgName,
                    formurl:formurl
                }
                axios.post('https://peaceful-temple-16111.herokuapp.com/https://pussgrc.herokuapp.com/addevent', cloudata)
                .then(data => {

                    console.log("fddfdfd",data)
                    M.toast({ html: "Sucess", classes: "#43a047 green darken-1" })
                    setSelImage("")
                    setImgName("")
                    setFormurl("")
                    window.location.reload()
                   
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


                        <label>
                            Add Form Url                            
                        </label>
                        <input
                            type="text"
                            value={formurl}
                            required
                            onChange={(e) => { setFormurl(e.target.value) }}
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