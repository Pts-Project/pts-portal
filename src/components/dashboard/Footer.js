import './footer.css';
import SimpleReactFooter from "simple-react-footer";
import { Container, Row, Col } from 'react-grid-system';





const Footer = () => {
    return (
        <div className="footer">
            <div className="footerContent">
                <Container fluid>
                    <Row>
                        <Col md={6} sm={12}>
                            <h4>Platform Tech Group</h4>
                        </Col>
                    </Row>
                </Container>

            </div>
        </div>
    );
}

export default Footer;