import React from 'react'
import { Component } from 'react'
import './home.css'
import About from './about.js';
import Achive from './achive';
import Departments from './Departments';
import Events from './Events';
import Footer from './Footer';
import Partciles from '../particles/particles';
import BottomContent from '../bottomContent/bottomContent';
// import Carousel from './carousel';
// import { ExpandMoreIcon } from 'react-materialize';

class Home extends Component {


    render() {
        return (
            <div className="main">
                <div className="hcontainer">
                    <Partciles />
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

                <div className="achive">
                    <Achive />
                </div>

                <div className="Departments">
                    <Departments />
                </div>

                <div className="Events">
                    <Events />
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
