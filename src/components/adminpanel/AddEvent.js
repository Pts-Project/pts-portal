import React,{Component,useState} from 'react'
import './AddEvent.css'
import axios from 'axios'


function AddEvent(){
    const [SelImage,setSelImage]= useState("");
    const uploadImage=(files)=>{
        console.log(files[0])
        const formdata=new FormData()
        formdata.append('file',SelImage)
        formdata.append('upload_preset','platform')
        axios.post('https://api.cloudinary.com/v1_1/djxi7xjop/image/upload',formdata)
            .then(res=>{
             
            })
    };

    return(
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
                    autoFocus
                    required
                    
                />
                <div className="pass">
                    <label>
                        Upload Image from Device
                    </label>
                    <input 
                        type="file"
                        autoFocus
                        required
               
                        onChange={(e)=>{setSelImage(e.target.files[0])}}
                    />
                </div>
                <div className="lbtnContainer">
                    <button className="lbtn"onClick={uploadImage} >Add</button>
                </div>
            </div>           
        </section>
    </div>
    );
}
export default AddEvent;