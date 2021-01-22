import React, { useState, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import M from 'materialize-css'
import sin from '../../../components/assets/sin.jpg'
import axios from 'axios'
//o3EumnIMceQfPiwQ
//mongodb+srv://Platform:<password>@cluster0.lsibt.mongodb.net/<dbname>?retryWrites=true&w=majority

const Login = () => {
    const history = useHistory()
    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
   
    const PostData=()=>{
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
            return
        }
        const logindata={
            email:email,
            password:password
        }
  
        axios.post('http://localhost:5000/adminlogin',logindata)
            .then(res=>{
                console.log(res.data)
                if(res.data==="Authenticated"){
                    localStorage.setItem('test','a')
                    history.push('/')
                }else{
                   
                    history.push('/login')
                    alert("Invalid Username or Password")
                    setEmail("")
                    setPassword("")
                   
                }
            })
            .catch(err=>{
                console.log(err)
            })
        // fetch(" http://localhost:5000/adminlogin",{
        //     method:"post",
        //     headers:{
        //         "Content-Type":"application/json"
        //     },
        //     body:JSON.stringify({
        //         email,
        //         password
        //     })
        // })
        // .then(res=>
        //     {return res.json();}
        // )
        // .then(resData=>{console.log(resData);return resData;})
        // .catch(err=>{
        //     console.log(err)
        // })
        // }).then(res=>res.json())
        // .then(data=>{
        //     if(data.error){
        //     M.toast({html: data.error,classes:"#c62828 red darken-3"})
        //     }else{
        //         M.toast({html: "Login Success",classes:"#43a047 green darken-1"}) 
        //         history.push('/')
        //     }
        // }).catch(err=>{
        //     console.log(err)
        // })
    }
    return (
        <div className="mycard">
            <div className="card auth-card " style={{ backgroundImage: `url(${sin})`, minWidth: "100%", minHeight: "100%", backgroundPosition: "centre", backgroundSize: "cover" }}>
                <h6 style={{letterSpacing:"2px"}}>LOGIN</h6><br />
                <h4 style={{letterSpacing:"2px"}}><bold>PLATFORM</bold></h4>

              

                <div class="input-field col s12" style={{ marginTop: "5%" }}>
                    <input id="email" type="email" class="validate"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label for="email" style={{ textAlign: "center", color: "black" }}>EMAIL</label>
                    <span class="helper-text" data-error="INVALID EMAIL ADDRESS"  ></span>
                </div>

                <div class="input-field col s12" style={{ marginTop: "5%" }}>
                    <input id="password" type="password" class="validate"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <label for="password" style={{ textAlign: "center", color: "black" }}>PASSWORD</label>
                    <span class="helper-text" data-error="INVALID EMAIL ADDRESS" style={{ align: "center" }}></span>
                </div>
               
                

              

                <button style={{ borderRadius: "50px", marginTop: "100px", marginBottom: "30px",letterSpacing:"2px" }} className="btn waves-effect #212121 grey darken-4" name="action" type="submit"
                    onClick={() => PostData()}
                >
                    <strong>LOGIN</strong>
                </button>


                <p>Forgot Password ?</p>

                <Link to="/signup"> <p style={{ color: "#6CD4CA" }}><strong>Reset Your Password</strong></p></Link>
               <br/> <p>Don't have an account ?</p>
                <Link to="/signup"> <p style={{ color: "#6CD4CA" }}><strong>Sign Up Now</strong></p></Link>
                <br /><br /><br /><br /><br /><br /><br /><br />
            </div>
        </div>
    )
}

export default Login