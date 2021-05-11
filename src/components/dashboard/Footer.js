import './footer.css';
//import SimpleReactFooter from "simple-react-footer";
import { Container, Row, Col } from 'react-grid-system';





const Footer = () => {
    return (
        <div className="footer">
            <div className="footerContent">
                <Container fluid>
                    <Row>
                        <Col md={8} sm={12}>
                            <h4>Platform Tech Group</h4>
                            <p>"We help our members succeed by  providing mentorship  Platform is here to help you get industry ready, via student engaged skill development along with team management"</p>
                        </Col>
                        <Col md={1}>
                            <h5>Links</h5>
                            <ul>
                                <a href="/#about"> <li> About</li></a>
                                <a href="/careers"><li> Careers</li></a>
                                <a href="/#events"><li> Events</li></a>
                                <a href="/admin/login"><li> Admin</li></a>
                            </ul>
                        </Col>
                        <Col md={3}>
                            <h5>Reach Us</h5>
                            <ul>
                                <p>
                                    <ul><a href="https://goo.gl/maps/vo9jhJGraN72p2Sv9">
                                        <p align="left">Panjab University SSG Regional Centre <br></br>
                                        Hoshiarpur, Punjab, India, 146023
                                        </p>
                                    </a></ul>
                                    <a href="mailto:student@platformtechs.in">
                                        <p align="left">student@platformtechs.in</p>
                                    </a>
                                </p>
                            </ul>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}><h6 align="center" color="aliceblue"> Stay Connected</h6></Col>
                    </Row>
                    <Row>
                        <Col md={12} align="center">
                            <social class="social" align="center">
                                <a href="fb.com"> <fab class="fb">Facebook</fab></a>&nbsp;
                                <a href="fb.com"> <fab class="twt">Twitter</fab></a>&nbsp;
                                <a href="fb.com"> <fab class="insta">Instagram</fab></a>&nbsp;
                                <a href="fb.com"> <fab class="lnkd">Linkedin</fab></a>
                            </social>
                        </Col>
                    </Row>
                    <br></br>
                    <Row>
                        <Col md={12} align="center" id="copyright">
                            <p>Copyright @copy 2021 Platform Techs | All Rights Reserved</p>
                        </Col>
                    </Row>
                </Container>

            </div>
        </div >
    );
}

export default Footer;