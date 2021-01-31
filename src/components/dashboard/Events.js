import './events.css'
import React, { Component, useEffect, CSSProperties } from 'react'
import { Container, Row, Col } from 'react-grid-system';
import axios from 'axios';
import { Link } from 'react-router-dom'
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';




//import { useDispatch, useSelector } from 'react-redux'


class Events extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataisLoaded: false,
            photos: [],
            links: [],
            ids: [],
            index: 0,
        }

    }
    componentDidMount() {
        if (this.state.dataisLoaded === false)
            this.fetchImages();
    }
    fetchImages = async () => {
        await axios.get('')
            .then(res => {
                localStorage.setItem("test","a")
                console.log("fetched data");
                this.setState({ photos: res.data });
                let links = []
                this.state.photos.map(photo =>
                    links.push(photo.url)
                )
                let ids = []
                this.state.photos.map(photo =>
                    ids.push(photo.id)
                )
                let titles = []
                this.state.photos.map(photo =>
                    titles.push(photo.title)
                )
                this.setState({
                    links,
                    ids,
                    titles,
                    dataisLoaded: true,
                })
            })
    }

    render() {

        return (

            <div className="events">
                <div className="eventContent">
                    <diV className="nogutter">
                        <Container fluid>
                            <Row>
                                <Col md={12}><p className="rowTitle"><h4>Events</h4></p></Col><br></br><br></br><br></br><br></br><br></br>
                            </Row>
                            <Row>
                                <Col md={2} sm={0} > <hr className="hr-19"></hr></Col>
                                <Col md={8} >
                                    <Carousel>
                                        {this.state.ids.map((id) =>
                                            <div>
                                                <img src={this.state.links[id]} fluid />
                                                <p className="legend"> {id} {this.state.titles[id]}</p>
                                            </div>
                                        )}
                                    </Carousel>
                                </Col>
                                <Col md={2} sm={0} > <hr className="hr-19"></hr></Col>
                            </Row>
                        </Container>
                    </diV>
                </div>
            </div >
        );
    }
}

export default Events;