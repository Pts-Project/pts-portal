import React,{Component,useState} from 'react'
import './AddEvent.css'
import axios from 'axios'


function AddEvent(){
    const [SelImage,setSelImage]= useState("");
    const [ImgName,setImgName]= useState("");

    const uploadImage=(files)=>{
     
        const formdata=new FormData()
        formdata.append('file',SelImage)
        formdata.append('upload_preset','platform')
        axios.post('https://api.cloudinary.com/v1_1/djxi7xjop/image/upload',formdata)
            .then(res=>{
            
                console.log(res.data.secure_url)
                const url=res.data.secure_url
                console.log(ImgName)
                const cloudata={
                    image:url,
                    name:ImgName
                }
                axios.post('http://localhost:5000/event/create',cloudata)
                .then(res=>{
                    console.log(res)
                })
                .catch(err=>{
                    console.log(err)
                })
                
             })
            .catch(err=>{
                console.log(err)
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
                    value={ImgName}
                    required
                    onChange={(e)=>{setImgName(e.target.value)}}
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