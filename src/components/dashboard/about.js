import './about.css'
import aboutBG from '../assets/aboutBG.jpg'
import { Container, Row, Col } from 'react-grid-system';




const about = () => {

    let aboutContent = "Platform is an intiative by the students and for the students. It is a community of tech enthusiasts. We also provide a forum for engineers, teams and enthusiasts to participate in professional technical development and networking opportunities. The aim of this society is to promote and encourage technical innovations through practical endeavours among students by organizing modelling - workshops, technical seminars and training courses. The intention is to create future leaders in chosen fields .We are not just confined to the word called tech geek rather overall development.We are packed up with a number of sub parts available in our society."

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