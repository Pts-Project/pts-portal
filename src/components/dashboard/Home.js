import React from 'react'
import { Component } from 'react'
import './home.css'
import About from './about.js';
import Events from './Events'
import Departments from './Departments';
import Achive from './achive'
import Footer from './Footer';
import BottomContent from '../bottomContent/bottomContent';
import Particles from 'react-particles-js';
// import Carousel from './carousel';
// import { ExpandMoreIcon } from 'react-materialize';

class Home extends Component {


    render() {
        return (
            <div className="main">
                <div className="hcontainer">

                    <Particles id="particles-js"
                        params={{
                            "particles": {
                                "number": {
                                    "value": 60,
                                    "density": {
                                        "enable": true,
                                        "value_area": 800
                                    }
                                },
                                "color": {
                                    "value": "#FFFFFF"
                                },
                                "shape": {
                                    "type": "circle",
                                    "stroke": {
                                        "width": 0,
                                        "color": "#000000"
                                    },
                                    "polygon": {
                                        "nb_sides": 7
                                    },
                                    "image": {
                                        "src": "img/github.svg",
                                        "width": 100,
                                        "height": 100
                                    }
                                },
                                "opacity": {
                                    "value": 1,
                                    "random": true,
                                    "anim": {
                                        "enable": false,
                                        "speed": 1,
                                        "opacity_min": 0.1,
                                        "sync": false
                                    }
                                },
                                "size": {
                                    "value": 3,
                                    "random": true,
                                    "anim": {
                                        "enable": false,
                                        "speed": 40,
                                        "size_min": 0.1,
                                        "sync": false
                                    }
                                },
                                "line_linked": {
                                    "enable": true,
                                    "distance": 150,
                                    "color": "#FFFFFF",
                                    "opacity": 0.5,
                                    "width": 1
                                },
                                "move": {
                                    "enable": true,
                                    "speed": 6,
                                    "direction": "none",
                                    "random": false,
                                    "straight": false,
                                    "out_mode": "out",
                                    "bounce": false,
                                    "attract": {
                                        "enable": false,
                                        "rotateX": 600,
                                        "rotateY": 1200
                                    }
                                }
                            },
                            "interactivity": {
                                "detect_on": "canvas",
                                "events": {
                                    "onhover": {
                                        "enable": true,
                                        "mode": "repulse"
                                    },
                                    "onclick": {
                                        "enable": true,
                                        "mode": "remove"
                                    },
                                    "resize": true
                                },
                                "modes": {
                                    "grab": {
                                        "distance": 200,
                                        "line_linked": {
                                            "opacity": 1
                                        }
                                    },
                                    "bubble": {
                                        "distance": 200,
                                        "size": 60,
                                        "duration": 2,
                                        "opacity": 4,
                                        "speed": 3
                                    },
                                    "repulse": {
                                        "distance": 200,
                                        "duration": 0.8
                                    },
                                    "push": {
                                        "particles_nb": 5
                                    },
                                    "remove": {
                                        "particles_nb": 1
                                    }
                                }
                            },
                            "retina_detect": false
                        }}
                    />
                    <div id="overlay">
                        <h1 className="title">PLATFORM TECH SOLUTION</h1>
                        <p>
                            <h2>"Your Imagination, Our Creation"</h2>
                        </p>
                    </div>
                </div>

                <div className="about">
                    <About />
                </div>

                <div className="Achieve">
                    <Achive />
                </div>
                
                <div className="Departments">
                    <Events />
                </div>

                <div className="Departments">
                    <Departments />
                </div>


                <div className="bottomContent">
                    <BottomContent />
                </div>

                <div className="Footer">
                    <Footer />
                </div>



            </div>


        );
    }
}
export default Home;
