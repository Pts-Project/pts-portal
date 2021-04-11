import { Container, Row, Col } from 'react-grid-system';
import './bottomContent.css';
import support from '../assets/support.png';
import sharing from '../assets/sharing.png';
import pencil from '../assets/pencil.png';
import growth from '../assets/growth.png'

const BottomContent = () => {
    return (
        <div className="bottomContent">
            <div className="bottomContentContents">
                <Container fluid>
                    <Row>
                        <Col md={12}><p className="bottomTitle"><h2>Why Choose Platform ?</h2></p></Col><br></br><br></br><br></br><br></br><br></br><br></br>
                    </Row>
                    <Row>
                        <Col md={3}><p className="cols"><img src={support} width="40% " alt="support"></img><h5>Mentor Support</h5></p></Col>
                        <Col md={3}><p className="cols"><img src={growth} width="40% " alt="Results"></img><h5>Results</h5></p></Col>
                        <Col md={3}><p className="cols"><img src={pencil} width="40% " alt="Industrial approach"></img><h5>Industrial Approach</h5></p></Col>
                        <Col md={3}><p className="cols"><img src={sharing} width="40% " alt="learning"></img><h5>Practical Learning</h5></p></Col>
                    </Row>
                </Container>
            </div>
        </div >
    );
}

export default BottomContent;