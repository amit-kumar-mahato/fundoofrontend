import React, { Component } from "react";
import '../sidedrawer.css';
import { Link } from "react-router-dom";
class SideDrawer extends Component {
  render() {
    return (
      <nav className="side-drawer">
        <ul>
            <li className="d-flex active" style={{alignItems:'center'}}>
                <i className="fa fa-sticky-note p-2" aria-hidden="true" style={{color:'whitesmoke',fontSize: "20px"}}></i>
                <Link to="/" className="p-2" style={{color:'whitesmoke',fontSize: "20px"}}>Notes</Link>
            </li>
            <li className="d-flex" style={{alignItems:'center'}}>
                <i className="fa fa-bell-o note-fa p-2" aria-hidden="true" style={{color:'whitesmoke',fontSize: "20px"}}></i>
                <Link to="/" className="p-2" style={{color:'whitesmoke',fontSize: "20px"}}>Reminders</Link>
            </li>
            <hr style={{backgroundColor:'whitesmoke'}} />
            <p style={{color:'whitesmoke'}}>LABELS</p>
            <li className="d-flex" style={{alignItems:'center'}}>
                <i className="fa fa-pencil-square-o p-2" aria-hidden="true" style={{color:'whitesmoke',fontSize: "20px"}}></i>
                <Link to="/" className="p-2" style={{color:'whitesmoke',fontSize: "20px"}}>Edit labels</Link>
            </li>
            <hr style={{backgroundColor:'whitesmoke'}} />
            <li className="d-flex" style={{alignItems:'center'}}>
                <i className="fa fa-archive p-2" aria-hidden="true" style={{color:'whitesmoke',fontSize: "20px"}}></i>
                <Link to="/" className="p-2" style={{color:'whitesmoke',fontSize: "20px"}}>Archive</Link>
            </li>
            <li className="d-flex" style={{alignItems:'center'}}>
                <i className="fa fa-trash-o p-2" aria-hidden="true" style={{color:'whitesmoke',fontSize: "20px"}}></i>
                <Link to="/" className="p-2" style={{color:'whitesmoke',fontSize: "20px"}}>Trash</Link>
            </li>
        </ul>
      </nav>
    );
  }
}
export default SideDrawer;