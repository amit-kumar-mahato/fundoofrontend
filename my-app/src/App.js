import React, { Component } from 'react';
import './App.css';
import Login from './components/Login';
import Registration from './components/Registration';
import axios from 'axios';
import NewRegistration from './components/NewRegistration';

class App extends Component {
  render() {
    return (
      // <div className="route">
     <Registration />
      // <NewRegistration /> 
     // </div>
     
    );
  }
}

export default App;
