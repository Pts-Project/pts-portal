import './events.css'
import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'react-grid-system';
import axios from 'axios';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import noevents from '../assets/noevents.gif'

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
                //localStorage.setItem("test", "a")
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
                let images = [
                    {
                        "indexnumber": "1",
                        "_id": "606af2577acb160b40638fff",
                        "name": "No Event Sheduled",
                        "image": noevents,
                        "__v": 0
                    }
                ];
                this.setState({
                    images,
                    dataisLoaded: true,
                })
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
                        <Carousel className="carousel">
                            {this.state.images.map((photo, _id) =>
                                <div key={_id}>

                                    <img className="d-block w-100" src={photo.image} fluid alt={photo.name}
                                    />
                                    <h3 className="legend">{photo.name}</h3>

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