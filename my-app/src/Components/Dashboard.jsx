import React, { Component } from "react";
import Newheader from '../Components/Newheader';
import Header from '../Components/Header';
import SideDrawer from '../Components/SideDrawer';
import CreateNote from "./CreateNote";
export default class Dashboard extends Component {
  render() {
    let mainContent = {
      marginTop:'9%'
    }
    return (
      <div className="App">
        <div className="Navigation_Bar">
          <Header />
        </div>
        <div className="side-main-content">
        <div className="Side_Drawer d-flex justify-content-start">
          <SideDrawer />
        </div>
        <div className="Main_Content d-flex justify-content-center" style={mainContent}>
          <CreateNote />
        </div>
        </div>
      </div>
    );
  }
}
