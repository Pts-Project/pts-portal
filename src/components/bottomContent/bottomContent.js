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
                        <Col md={3}><p className="cols"><img src={support} width="50% "></img><h4>Mentor Support</h4></p></Col>
                        <Col md={3}><p className="cols"><img src={growth} width="50% "></img><h4>Results</h4></p></Col>
                        <Col md={3}><p className="cols"><img src={pencil} width="50% "></img><h4>Industrial Approach</h4></p></Col>
                        <Col md={3}><p className="cols"><img src={sharing} width="40% "></img><h4>Practical Learning</h4></p></Col>
                    </Row>
                </Container>
            </div>
        </div >
    );
}

export default BottomContent;