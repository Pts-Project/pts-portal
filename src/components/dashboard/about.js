import './about.css'
import aboutBG from '../assets/aboutBG.jpg'
import { Container, Row, Col } from 'react-grid-system';




const about = () => {

    let aboutContent = "Platform is an intiative by the students. It is a non profit organisation meant to provide its members a healthy environment. We encourage community learning,that is growing together with your peers. Platform provides all the necessary skills required for student including technical skill, soft skils, work ethic, team work   ..."


    return (
        <div className="about">
            <div className="aboutContent">
                <Container fluid>
                    <Row>
                        <Col md={12}><p className="rowTitle"><h4>ABOUT</h4></p></Col><br></br><br></br><br></br><br></br><br></br>
                    </Row>
                    <Row>
                        <Col md={7} sm={12} >

                            <p className="aboutPara" style={{ color: '#777777' }}>{aboutContent}</p>
                        </Col>
                        <Col md={5} sm={12}  >
                            <span className="aboutImg">
                                <img src={aboutBG} alt="" resizeMode='contain'
                                    style={{
                                        maxHeight: '100%',
                                        maxWidth: '100%'
                                    }}
                                />
                            </span>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default about;