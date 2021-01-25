import React,{Component} from 'react'
import './addevent.css'
import axios from 'axios'
class AddEvent extends Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:''
        }
        this.handleUsernameChange=this.handleUsernameChange.bind(this)
        this.handlePasswordChange=this.handlePasswordChange.bind(this)
    }
    
    handleUsernameChange=(e)=>{
        this.setState({
            username:e.target.value,
        })
    }
    handlePasswordChange=(e)=>{
        this.setState({
            password:e.target.value,
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        const logindata = {
            username:this.state.username,
            password:this.state.password
        }

        axios.post('https://toycathon.herokuapp.com/api/login',logindata)
            .then(response=>{
                console.log(response.data)
                    this.props.history.push("/game")    
                })

    }
    render(){
        return(
            <div>
                <section className="notlogin">
                    <div className="lContainer">
                        <div class="heading">
                            Add Event
                        </div>
                        <label>
                            Image
                        </label>
                        <input 
                            type="text"
                            autoFocus
                            required
                            value={this.state.username}
                            onChange={this.handleUsernameChange}
                        />
                        <div className="pass">
                            <label>
                                Description
                            </label>
                            <input 
                                type="text"
                                autoFocus
                                required
                                value={this.state.password}
                                onChange={this.handlePasswordChange}
                            />
                        </div>
                        <div className="lbtnContainer">
                            <button className="lbtn" onClick={this.handleSubmit}>Add</button>
                        </div>
                    </div>           
                </section>
            </div>
        );
    }
}

export default AddEvent;