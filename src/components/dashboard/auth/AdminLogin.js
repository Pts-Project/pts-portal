import React, { useState, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import M from 'materialize-css'
import sin from '../../assets/sin.jpg'
import { Container, Row, Col } from 'react-grid-system'
import './auth.css'

//o3EumnIMceQfPiwQ
//mongodb+srv://Platform:<password>@cluster0.lsibt.mongodb.net/<dbname>?retryWrites=true&w=majority

const AdminLogin = () => {
    localStorage.setItem("admincheck", "no");
    const history = useHistory()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const PostData = () => {
        if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
            M.toast({ html: "Invalid Email", classes: "#c62828 red darken-3" })
            return
        }
        fetch("https://peaceful-temple-16111.herokuapp.com/https://pussgrc.herokuapp.com/admin/login", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        }).then(res => res.json())
            .then(data => {
                console.log(data)

                if (data.error) {
                    M.toast({ html: data.error, classes: "#c62828 red darken-3" })
                    localStorage.setItem("admincheck", "no");
                } else {
                    localStorage.setItem("jwt", data.token)
                    localStorage.setItem("test", "a")
                    localStorage.setItem("admincheck", "yes");
                    localStorage.setItem("user", JSON.stringify(data.user))
                    M.toast({ html: "Login Success", classes: "#43a047 green darken-1" })

                    history.push('/')
                    window.location.reload();
                }
            }).catch(err => {
                console.log(err)
            })
    }
    if (localStorage.getItem("admincheck") === "no") {
        return (
            <div className="mycard">
                <div className="card auth-card " style={{ backgroundImage: `url(${sin})`, minWidth: "100%", minHeight: "100%", backgroundPosition: "centre", backgroundSize: "cover" }}>

                    <Row>
                        <Col>
                            <h6 style={{ letterSpacing: "2px" }}> ADMIN LOGIN</h6><br />
                            <h4 style={{ letterSpacing: "2px" }}><bold>PLATFORM</bold></h4>
                        </Col>
                    </Row>
                    <Container fluid style={{ width: "400px" }}>
                        <Row>
                            <Col>

                                <div class="input-field col s12" style={{ marginTop: "8%" }}>
                                    <input id="email" type="email" class="validate"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <label for="email" style={{ textAlign: "center", color: "black" }}>EMAIL</label>

                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div class="input-field col s12" style={{ marginTop: "5%" }}>
                                    <input id="password" type="password" class="validate"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <label for="password" style={{ textAlign: "center", color: "black" }}>PASSWORD</label>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <button id="btn1" style={{ width: "150px", borderRadius: "50px", marginTop: "60px", marginBottom: "30px", letterSpacing: "2px" }} className="btn waves-effect #212121 grey darken-4" name="action" type="submit"
                                    onClick={() => PostData()}
                                >
                                    <strong>LOGIN</strong>
                                </button>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p>Forgot Password ?</p>

                                <Link to="/changePassword"> <p style={{ color: "#6CD4CA" }}><strong>Reset Your Password</strong></p></Link>
                                <br /> <p>Dont have an account ?</p>
                                <Link to="/signup"> <p style={{ color: "#6CD4CA" }}><strong>Sign Up Now</strong></p></Link>

                            </Col>
                        </Row>
                    </Container>

                    <br /><br /><br /><br /><br /><br /><br /><br />
                </div>
            </div>
        );
    } else {
        window.location = ("/admin/panel")
    }
}

export default AdminLogin