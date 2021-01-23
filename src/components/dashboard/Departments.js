import './departments.css'
import { Container, Row, Col } from 'react-grid-system';
import Technical from '../assets/Technical.jpg';
import Graphics from '../assets/Graphics.jpg';
import Management from '../assets/Management.jpg';


const Departments = () => {
    return (

        <div className="departments">
            <div className="departmentsContent">
                <Container fluid>
                    <Row>
                        <Col md={12}><p className="rowTitle"><h4><b>DEPARTMENTS</b></h4></p></Col><br></br><br></br><br></br><br></br><br></br>
                    </Row>
                    <Row className="depCards" justify="between">
                        <Col md={3.5} className="card test-card" >
                            <a href="/">
                                <span className="departmentImg">
                                    <img src={Technical} alt="Technical" resizeMode='contain'
                                        style={{
                                            maxHeight: '70%',
                                            maxWidth: '70%',
                                        }}
                                    />
                                </span>
                                <p><h5 className="departTitle">Technical</h5></p>
                            </a>
                        </Col>
                        <Col md={3.5} className="card test-card">
                            <a href="/">
                                <span className="departmentImg">
                                    <img src={Graphics} alt="Graphics" resizeMode='contain'
                                        style={{
                                            maxHeight: '70%',
                                            maxWidth: '70%'
                                        }}
                                    />
                                </span>
                                <p><h5 className="departTitle">Graphics</h5></p>
                            </a>
                        </Col>
                        <Col md={3.5} className="card test-card">
                            <a href="/">
                                <span className="departmentImg">
                                    <img src={Management} alt="Management" resizeMode='contain'
                                        style={{
                                            maxHeight: '98%',
                                            maxWidth: '98%'
                                        }}
                                    />
                                </span>
                                <p><h5 className="departTitle">Management</h5></p>
                            </a>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div >


    );
}

export default Departments;