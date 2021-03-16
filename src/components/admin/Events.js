import React from 'react'
import { Container, Row, Col } from 'react-grid-system'
import './admin.css'

const Events1 = () => {
    return (
        <div>       
                <Container fluid >
                    <Row>
                        <Col>
                            <div className="card"><br />
                                <div class="profile-img" >
                                <Row>
                                <Col>
                                <img style={{ height: "200px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog" alt="" />
                                   
                                </Col>
                                </Row>
                                   <br /><br />
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Name</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>Kshiti Ghelani</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Category</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>kshitighelani@gmail.com</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Description</label>
                                        </div>
                                        <div class="col-md-6" style={{paddingLeft:"30px",paddingRight:"30px"}}>
                                            <p>There are 3 main button types described in material design. The raised button is a standard button that signify actions and seek to give depth to a mostly flat page. The floating circular action button is meant for very important functions. Flat buttons are usually used within elements that already have depth like cards or modals.</p>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="card"><br />
                                <div class="profile-img">
                                <Row>
                                <Col>
                                <img style={{ height: "200px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog" alt="" />
                                   
                                </Col>
                                </Row>  <br /><br />
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Name</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>Kshiti Ghelani</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Category</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>kshitighelani@gmail.com</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Description</label>
                                        </div>
                                        <div class="col-md-6" style={{paddingLeft:"30px",paddingRight:"30px"}}>
                                            <p>There are 3 main button types described in material design. The raised button is a standard button that signify actions and seek to give depth to a mostly flat page. The floating circular action button is meant for very important functions. Flat buttons are usually used within elements that already have depth like cards or modals.</p>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </Col>
                    </Row>
                </Container>

            </div>
      
    )
}

export default Events1 