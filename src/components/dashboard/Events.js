import "./events.css";
import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { Container, Row, Col } from "react-grid-system";
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import noevents from "../assets/noevents.gif";
import Cookies from "universal-cookie";
const cookies = new Cookies();
class Events extends Component {
  constructor(props) {
    super(props);
    this.onclick = this.onclick.bind(this);
    this.state = {
      eventexist: true,
      dataisLoaded: false,
      photos: [],
      images: [],
      formurl: "",
    };

    //this.registerevent = this.registerevent.bind(this);
  }

  componentDidMount() {
    if (this.state.dataisLoaded === false) {
      this.fetchImages();
    }
  }
  fetchImages = async () => {
    //await axios.get('/events')
    axios
      .get(
        "https://peaceful-temple-16111.herokuapp.com/https://pussgrc.herokuapp.com/events"
      )
      .then((res) => {
        //localStorage.setItem("test", "a")
        this.setState({ photos: res.data });
        console.log("fetched data");

        let images = [];
        this.state.photos.list.map((photo) => images.push(photo));
        this.setState({
          images,
          dataisLoaded: true,
        });
      })
      .catch(() => {
        console.log("no data");
        let images = [
          {
            indexnumber: "1",
            _id: "606af2577acb160b40638fff",
            name: "No Event Sheduled",
            image: noevents,
            __v: 0,
          },
        ];

        this.setState({
          images,
          dataisLoaded: true,
        });
      })
      .then((images) => {
        console.log(this.state.images.length);
        if (this.state.images.length < 1) {
          this.setState({ eventexist: false });
          images = [
            {
              indexnumber: "1",
              _id: "0000",
              name: "No Event Sheduled",
              image: noevents,
              __v: 0,
            },
          ];

          this.setState({
            images,
            dataisLoaded: true,
          });
        }
      });
  };

  onclick(photo_id, photoname) {
    cookies.set("event", photo_id, { path: "/" });
    window.location.assign("/event/" + photoname);
  }
  render() {
    return (
      <div className="events">
        <div className="eventContent">
          <Container fluid>
            <Row>
              <Col md={12}>
                <p className="rowTitle">
                  <h4>Events</h4>
                </p>
              </Col>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
            </Row>
            {cookies.set("eventlist", JSON.stringify(this.state.images), {
              path: "/",
            })}
            {console.log("cookie", cookies.get("eventlist"))}
            <Carousel className="carousel">
              {this.state.images.map((photo, _id) => (
                <div key={_id}>
                  <img
                    className="d-block w-100"
                    src={photo.image}
                    fluid
                    alt={photo.name}
                  />
                  <h3
                    className="legend"
                    style={{ background: "rgba(255,255,255,0)" }}
                  >
                    <Button
                      disabled={!this.state.eventexist}
                      variant="contained"
                      color="primary"
                      style={{
                        width: "25%",
                        textTransform: "uppercase",
                        fontWeight: "bolder",
                      }}
                      onClick={(e) => this.onclick(photo._id, photo.name)}
                    >
                      {this.state.eventexist ? (
                        <div>Register Now</div>
                      ) : (
                        <div>No Events</div>
                      )}
                    </Button>
                  </h3>
                </div>
              ))}
            </Carousel>
          </Container>
        </div>
      </div>
    );
  }
}

export default Events;
