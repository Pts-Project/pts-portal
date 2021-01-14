import './events.css'
import React,{Component} from 'react'
import { Container, Row, Col } from 'react-grid-system';
import axios from 'axios'

class Events extends Component{
    constructor(props){
        super(props);
        this.state={
            dataisLoaded:false,
            photos:[],
            links:[]
        }
    }
    componentDidMount(){
        if(this.state.dataisLoaded===false)
        this.fetchImages();
    }
    fetchImages=async()=>{
        await axios.get('https://jsonplaceholder.typicode.com/photos')
        .then(res=>{
            console.log("fetched data")
            this.setState({photos:res.data});
            let links=[]
            this.state.photos.map(photo=>
                links.push(photo.url)
            )
            this.setState({
                links,
                dataisLoaded:true,
            })
        })
    }
    render(){
        return (
            <div>
                <img src={this.state.links[0]}/>
                <img src={this.state.links[10]}/>
                <img src={this.state.links[50]}/>
                <img src={this.state.links[100]}/>
            </div>
        );
    }
}

export default Events;