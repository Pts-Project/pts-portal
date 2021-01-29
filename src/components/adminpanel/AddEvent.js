import React,{Component,useState} from 'react'
import './AddEvent.css'
import axios from 'axios'
// class AddEvent extends Component{

//     constructor(props){
//         super(props);
//         this.state={
//             username:'',
//             files:""
//         }
//         this.handleUsernameChange=this.handleUsernameChange.bind(this)
//         this.handleFileChange=this.handleFileChange.bind(this)
//     }

    
//     handleUsernameChange=(e)=>{
//         this.setState({
//             username:e.target.value,
//         })
//     }
//     handleFileChange=(e)=>{
//         this.setState({
//             files:e.target.files
//         })

//     }
//     handleSubmit=(e)=>{
//         e.preventDefault()
//         const formdata=new FormData()
//         formdata.append('file',this.state.files[0])
//         formdata.append('upload_preset','platform')
//         const logindata = {
//             username:this.state.username,
//             password:this.state.password
//         }

//         axios.post('https://toycathon.herokuapp.com/api/login',logindata)
//             .then(response=>{
//                 console.log(response.data)
//                     this.props.history.push("/game")    
//                 })

//     }
//     render(){
//         return(
//             <div>
//                 <section className="notlogin">
//                     <div className="lContainer">
//                         <div class="heading">
//                             Add Event
//                         </div>
//                         <label>
//                             Name
//                         </label>
//                         <input 
//                             type="text"
//                             autoFocus
//                             required
//                             value={this.state.username}
//                             onChange={this.handleUsernameChange}
//                         />
                        
//                         <div className="pass">
//                             <label>
//                                 Upload Image from Device
//                             </label>
//                             <input 
//                                 type="file"
//                                 autoFocus
//                                 required
//                                 value={this.state.files}
//                                 onChange={this.handleFileChange}
//                             />
//                         </div>
//                         <div className="lbtnContainer">
//                             <button className="lbtn" onClick={this.handleSubmit}>Add</button>
//                         </div>
//                     </div>           
//                 </section>
//             </div>
//         );
//     }
// }

// export default AddEvent;

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
                    Name
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