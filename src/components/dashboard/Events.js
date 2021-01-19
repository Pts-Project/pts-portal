import './events.css'
import React, { Component, useEffect, CSSProperties } from 'react'

//import { Container, Row, Col } from 'react-grid-system';
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
        await axios.get('https://jsonplaceholder.typicode.com/photos/')
            .then(res => {
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
                    <Carousel>
                        {this.state.ids.map((id) =>
                            <div>
                                <img src={this.state.links[id]} fluid />
                                <p className="legend"> {id} {this.state.titles[id]}</p>
                            </div>
                        )}
                    </Carousel>
                </div>
            </div>
        );
    }
}

export default Events;