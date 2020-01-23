import React, { Component } from "react";
import "../newheader.css";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

class Newheader extends Component {
  render() {
    return (
      <div>
        <Navbar bg="light" variant="light">
          <Navbar.Brand href="#home">
            
            <i
              className="fa fa-bars"
              aria-hidden="true"
              style={{ fontSize: "20px" }}
            ></i>
      
            
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">
              <img src="../keep.png" alt="logo" width="40px" height="40px" />
            </Nav.Link>
            <Nav style={{marginLeft:'10%',fontWeight:'bold',fontSize:'32px'}}>fundoo</Nav>
          </Nav>
          <div>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-4" />
            <Button variant="outline-primary">Search</Button>
          </Form>
          </div>
        </Navbar>
      </div>
    );
  }
}
export default Newheader;
