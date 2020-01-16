import React, { Component } from 'react';
import './App.css';
import Login from './Components/Login';
import Registration from './Components/Registration';
import ForgotPassword from './Components/ForgotPassword';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import UpdatePassword from './Components/UpdatePassword';

class App extends Component {
  render() {
    return (
      <Router>

        <Route path="/" exact component={Login}></Route>
        <Route path="/registration" component={Registration}></Route>
        <Route path="/forgotPassword" component={ForgotPassword}></Route>
        <Route path="/updatePassword" component={UpdatePassword}></Route>
      </Router>
    );
  }
}

export default App;
