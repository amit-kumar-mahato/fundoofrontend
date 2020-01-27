import React, { Component } from "react";
import '../sidedrawer.css';
import { Link } from "react-router-dom";
class SideDrawer extends Component {
  render() {
    return (
        <nav className="side-drawer">
          <ul>
              <li className="d-flex active" style={{alignItems:'center'}}>
                  <i className="fa fa-sticky-note p-3" aria-hidden="true" style={{color:'gray',fontSize: "18px"}}></i>
                  <Link to="/" className="p-3" style={{color:'black',fontSize: "14px",fontWeight:'bold'}}>Notes</Link>
              </li>
              <li className="d-flex" style={{alignItems:'center'}}>
                  <i className="fa fa-bell-o note-fa p-3" aria-hidden="true" style={{color:'gray',fontSize: "18px"}}></i>
                  <Link to="/" className="p-3" style={{color:'black',fontSize: "14px",fontWeight:'bold'}}>Reminders</Link>
              </li>
              <hr style={{backgroundColor:'gray'}} />
              <p style={{color:'gray'}}>LABELS</p>
              <li className="d-flex" style={{alignItems:'center'}}>
                  <i className="fa fa-pencil-square-o p-3" aria-hidden="true" style={{color:'gray',fontSize: "18px"}}></i>
                  <Link to="/" className="p-3" style={{color:'black',fontSize: "14px",fontWeight:'bold'}}>Edit labels</Link>
              </li>
              <hr style={{backgroundColor:'gray'}} />
              <li className="d-flex" style={{alignItems:'center'}}>
                  <i className="fa fa-archive p-3" aria-hidden="true" style={{color:'gray',fontSize: "18px"}}></i>
                  <Link to="/" className="p-3" style={{color:'black',fontSize: "14px",fontWeight:'bold'}}>Archive</Link>
              </li>
              <li className="d-flex" style={{alignItems:'center'}}>
                  <i className="fa fa-trash-o p-3" aria-hidden="true" style={{color:'gray',fontSize: "16px"}}></i>
                  <Link to="/" className="p-3" style={{color:'black',fontSize: "14px",fontWeight:'bold'}}>Trash</Link>
              </li>
          </ul>
        </nav>
    );
  }
}
export default SideDrawer;