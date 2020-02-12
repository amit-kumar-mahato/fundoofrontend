import React, { Component } from "react";
import "../newheader.css";
import { Navbar, Nav, Form, FormControl, Button,Row,Col } from "react-bootstrap";

class Newheader extends Component {
  render() {
    return (
      <header className="toolbar">
        <nav className="toolbar_navigation responsive">
          <div></div>
          <div className="toolbar_logo">
            <img src="../keep.png" alt="logo" width="40px" height="40px" />
            <strong style={{fontSize:'22px',padding:'0 1rem'}}>fundoo</strong>
          </div>
          <div className="spacer"></div>
          <div className="toolbar_navigation-items">
            <ul>
              <li></li>
              <li className="search_field">
                <FormControl size="lg" type="text" placeholder="Search" className="in" />
              </li>
              <li><i className="fa fa-refresh" title="Refresh" aria-hidden="true"></i></li>
              <li><i className="fa fa-th-list" title="Refresh" aria-hidden="true"></i></li>
              <li><img src="../keep.png" alt="logo" width="40px" height="40px" /></li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}
export default Newheader;
