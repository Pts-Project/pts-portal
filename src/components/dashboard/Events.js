import './events.css'
import { Container, Row, Col } from 'react-grid-system';



const Events = () => {
    return (

        <div className="events">
            <div className="eventsContent">
                <Container fluid>
                    <Row>
                        <Col md={12}><p className="rowTitle"><h4>EVENTS</h4></p></Col><br></br><br></br><br></br><br></br><br></br>
                    </Row>
                    <Row>
                        <carousel />
                    </Row>
                </Container>
            </div>
        </div>

    );
}

export default Events;