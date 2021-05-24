import React, { useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import M from 'materialize-css'
import reset1 from '../../assets/reset1.jpeg'
import { Container, Row, Col } from 'react-grid-system'
import './auth.css'

const NewPassword = () => {
    const history = useHistory()
    // const [isError, setIsError] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const { token } = useParams()
    console.log(token)

    const PostData = () => {
        if (password !== confirmPassword) {
            M.toast({ html: "Passwords do not match", classes: "#c62828 red darken-3" })
            return
        }
        fetch("https://peaceful-temple-16111.herokuapp.com/https://pussgrc.herokuapp.com/new-password", {
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
                    history.push('/login')
                }
            }).catch(err => {
                console.log(err)
            })

    }


    return (

        <div className="mycard">
            <div className="card auth-card " style={{ backgroundImage: `url(${reset1})`, minWidth: "100%", minHeight: "100%", backgroundPosition: "centre", backgroundSize: "cover" }}>
                <Row>
                    <Col>
                        <h6 style={{ letterSpacing: "2px" }}>NEW PASSWORD</h6><br />
                        <h4 style={{ letterSpacing: "2px" }}><bold>PLATFORM</bold></h4>
                    </Col>
                </Row>

                <Container fluid style={{ width: "400px" }}>
                    <Row>
                        <Col>
                            <div class="input-field col s12" style={{ marginTop: "90px" }}>
                                <input id="password" type="password" class="validate"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <label for="password" style={{ textAlign: "center", color: "black" }}>NEW PASSWORD</label>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <div class="input-field col s12">
                                <input id="password" type="password" class="validate"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                                <label for="password" style={{ textAlign: "center", color: "black" }}>CONFIRM NEW PASSWORD</label>
                            </div>
                        </Col>
                    </Row>


                    <Row>
                        <Col>
                            <button id="btn1" style={{ width: "200px", borderRadius: "50px", marginTop: "100px", marginBottom: "30px", letterSpacing: "2px" }} className="btn waves-effect #212121 grey darken-4"
                                onClick={() => PostData()}
                            >
                                <strong>  CHANGE PASSWORD</strong>
                            </button>
                        </Col>
                    </Row>

                </Container>


                <br /><br /><br /><br /><br /><br /><br /><br /><br />
            </div>
        </div>

    )
}

export default NewPassword