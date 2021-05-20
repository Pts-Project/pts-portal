import React from 'react'

import './admin.css'
import profilePic from '../assets/defaultprofilepic.jpg'
import { Row, Col, Nav, Tab } from 'react-bootstrap'
import AddProject from '../../components/AddProject/AddProject'
import AllProjects from '../../components/AddProject/AllProjects'

const User = () => {
 

    const details = JSON.parse(localStorage.getItem('user'))

    console.log(details.name);

    var profilepic = details.image;
    const EditProfile=(e)=>{
        window.location="/user/editprofile"
    }

    if ((localStorage.getItem("test") === "a") && localStorage.getItem("admincheck") === "no") {

        return (
            <div>

                <div class="container emp-profile">
                    <form method="post">
                        <div class="row">
                            <div class="col-md-4">
                                <div class="profile-img">
                                    <img src={profilepic} alt="profile picture" width="110px" />

                          
                                </div>
                            </div>
                            <div class="col-md-8">
                                <div class="profile-head">
                                    <h5>
                                        {details.name}
                                    </h5>
                                    <h6> 
                                        {details.role}
                                    </h6>
                                </div>
                            </div>

                        </div>
                    </form>
                    <div>
                        <Tab.Container id="left-tabs" defaultActiveKey="myProfile">
                            <Row>
                                <Col sm={3}>
                                    <Nav variant="pills" className="flex-column tabOption">
                                        <label>My Profile</label>
                                        <Nav.Item >
                                            <Nav.Link eventKey="myProfile" >
                                                <i className="material-icons prefix">account_circle</i>
                                        My Profile</Nav.Link>
                                        </Nav.Item>
                                        {/* <Nav.Item >
                                            <Nav.Link eventKey="about" >
                                                <i className="material-icons prefix">settings</i>
                                        About</Nav.Link>
                                        </Nav.Item> */}
                                        <label>Projects</label>
                                        <Nav.Item >
                                            <Nav.Link eventKey="myProjects" >
                                                <i className="material-icons prefix">group_work</i>
                                        My Projects</Nav.Link>
                                        </Nav.Item>
                                        
                                        <Nav.Item >
                                            <Nav.Link eventKey="addproject" >
                                            <i className="material-icons prefix">add</i> Add Project
                                        </Nav.Link>
                                        </Nav.Item>


                                    </Nav>
                                </Col>
                                <Col sm={9}>
                                    <Tab.Content >
                                        <Tab.Pane eventKey="myProfile">

                                            <p align="right">
                                                <i className="material-icons prefix">mode_edit</i>
                                                <input type="button" class="profile-edit-btn" name="editprofile" value="EditProfile" align="right" onClick={EditProfile} /></p>
                                            <div>
                                                <p> <br /></p>
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label>Name</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <p>{details.name}</p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label>Email</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <p>{details.email}</p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label>Contact No</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <p>{details.mobile}</p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label>Designation</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <p>{details.role}</p>
                                                    </div>
                                                </div>
                                            </div>

                                        </Tab.Pane>
                                        <Tab.Pane eventKey="about">
                                            <p>About</p>
                                            <div>
                                                <div class="">
                                                    <div class="profile-work">
                                                        <p>SKILLS</p>
                                                        <p align="left" color="black">
                                                            <ul type="disc">
                                                                <div className="skillcontainer"><div class="skills A">Web Designer</div></div>
                                                                <div className="skillcontainer"><div class="skills B">Web Developer</div></div>
                                                                <div className="skillcontainer"><div class="skills D">WordPress</div></div>
                                                                <div className="skillcontainer"><div class="skills C">Biz Dev</div></div>
                                                                <div className="skillcontainer"><div class="skills A">Graphic Designing</div></div>
                                                            </ul>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="myProjects">
                                            <AllProjects/>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="addproject">
                                            <AddProject/>
                                        </Tab.Pane>
                                          
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </div>

                </div>


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

export default User

