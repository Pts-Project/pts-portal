
import './App.css';
import Navbar from './components/dashboard/Navbar.js'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Component } from 'react';
import Home from './components/dashboard/Home'
import Events from './components/dashboard/Events'
import Login from './components/dashboard/auth/Login'
import ResetPassword from './components/dashboard/auth/ResetPassword'
import AddEvent from './components/dashboard/admin/addevent'
class App extends Component {
  render() {
    return (
      <div>


        <BrowserRouter>
          <div className="App">
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route exact path="/events" component={Events}></Route>
              <Route exact path="/login" component={Login}></Route>
              <Route exact path="/reset" component={ResetPassword}></Route>
              <Route exact path="/addevent" component={AddEvent}></Route>
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
