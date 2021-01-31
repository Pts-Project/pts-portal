import './events.css'
import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'react-grid-system';
import axios from 'axios';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
//import Carousel from 'react-elastic-carousel';
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
    "mdbreact";
class Events extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataisLoaded: false,
            photos: [],
            images: []
        }
    }
    componentDidMount() {
        if (this.state.dataisLoaded === false)
            this.fetchImages();
    }
    fetchImages = async () => {
        //await axios.get('/events')
        axios.get('/events')
            .then(res => {
                localStorage.setItem("test", "a")
                this.setState({ photos: res.data });
                console.log("fetched data");

                let images = []
                this.state.photos.list.map(photo =>
                    images.push(photo)
                )
                this.setState({
                    images,
                    dataisLoaded: true,
                })
            })
            .catch(() => {
                console.log('no data')
            });

    }

    render() {

        return (

            <div className="events">
                <div className="eventContent">
                    <Container fluid>
                        <Row>
                            <Col md={12}><p className="rowTitle"><h4>Events</h4></p></Col><br></br><br></br><br></br><br></br><br></br>
                        </Row>
                        <Carousel>
                            {this.state.images.map((photo, indexnumber) =>
                                <div key={indexnumber}>

                                    <img className="d-block w-100" src={photo.image} fluid
                                    />
                                    <h3 className="legend">{photo.indexnumber} {photo.name}</h3>

                                </div>
                            )
                            }
                        </Carousel>
                    </Container>
                </div>
            </div >
        );
    }
}

export default Events;