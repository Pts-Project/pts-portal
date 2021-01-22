import React, { useState, useContext } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import M from 'materialize-css'
import reset from '../../../components/assets/reset.jpeg'


const NewPassword = () => {
    const history = useHistory()
    const [isError, setIsError] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const { token } = useParams()
    console.log(token)

    const PostData = () => {
        if (password !== confirmPassword) {
            M.toast({ html: "Passwords do not match", classes: "#c62828 red darken-3" })
            return
        }
        fetch("/new-password", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                password,
                confirmPassword,
                token
            })
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.error) {
                    M.toast({ html: data.error, classes: "#c62828 red darken-3" })
                }
                else {
                    M.toast({ html: data.message, classes: "#43a047 green darken-1" })
                    history.push('/signin')
                }
            }).catch(err => {
                console.log(err)
            })

    }

   /* const checkValidation = (e) => {
        setConfirmPassword(e.target.value)
        if (password != confirmPassword) {
            setIsError("Password do not match")
        } else {
            setIsError("")
        }
    }
*/
    return (

        <div className="mycard">
            <div className="card auth-card " style={{ backgroundImage: `url(${reset})`, minWidth: "100%", minHeight: "100%", backgroundPosition: "centre", backgroundSize: "cover" }}>
                <h6 style={{letterSpacing:"2px"}}>NEW PASSWORD</h6><br />
                <h4 style={{letterSpacing:"2px"}}><bold>PLATFORM</bold></h4>


                <div class="input-field col s12" style={{ marginTop: "90px" }}>
                    <input id="password" type="password" class="validate"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <label for="password" style={{ textAlign: "center", color: "black" }}>NEW PASSWORD</label>
                    <span class="helper-text" data-error="INVALID EMAIL ADDRESS" style={{ align: "center" }}></span>
                </div>
                <br />
                <div class="input-field col s12">
                    <input id="password" type="password" class="validate"
                        value={confirmPassword}
                        onChange={(e) =>setConfirmPassword(e.target.value)}
                    />
                    <label for="password" style={{ textAlign: "center", color: "black" }}>CONFIRM NEW PASSWORD</label>
                    <span class="helper-text" style={{ align: "center", color: "red" }}></span>
                </div>
              


                <button style={{ borderRadius: "50px", marginTop: "100px", marginBottom: "30px",letterSpacing:"2px" }} className="btn waves-effect #212121 grey darken-4"
                    onClick={() => PostData()}
                >
                    <strong>  CHANGE PASSWORD</strong>
                </button>
                <br /><br /><br /><br /><br /><br /><br /><br /><br />
            </div>
        </div>

    )
}

export default NewPassword