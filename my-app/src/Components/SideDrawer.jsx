import React, { Component } from "react";
import '../sidedrawer.css';
import { Link } from "react-router-dom";
import EditModal from './EditModal';
class SideDrawer extends Component {
    constructor(props){
        super(props);
        this.state = {
            show:false
        }
    }
    handleEditLabel = () => {
        this.setState({editLabel: !this.state.editLabel})
    }
    handleClose = () => this.setState({show:false});
    handleShow = () => this.setState({show: !this.state.show});
  render() {
    return (
        <nav className="side-drawer">
          <ul>
              <li className="d-flex active">
                  <i className="fa fa-sticky-note p-3" aria-hidden="true" style={{color:'gray',fontSize: "18px"}}></i>
                  <Link to="/" className="p-3 side-drawer-content">Notes</Link>
              </li>
              <li className="d-flex">
                  <i className="fa fa-bell-o note-fa p-3" aria-hidden="true" style={{color:'gray',fontSize: "18px"}}></i>
                  <Link to="/" className="p-3 side-drawer-content">Reminders</Link>
              </li>
              <hr style={{backgroundColor:'gray'}} />
              <p style={{color:'gray'}}>LABELS</p>
              <li className="d-flex">
                  <i className="fa fa-pencil-square-o p-3" aria-hidden="true" style={{color:'gray',fontSize: "18px"}}></i>
                  <div 
                    className="p-3 side-drawer-content"
                    onClick={this.handleShow}
                    >Edit labels</div>
              </li>
              <hr style={{backgroundColor:'gray'}} />
              <li className="d-flex">
                  <i className="fa fa-archive p-3" aria-hidden="true" style={{color:'gray',fontSize: "18px"}}></i>
                  <Link to="/" className="p-3 side-drawer-content">Archive</Link>
              </li>
              <li className="d-flex" style={{alignItems:'center'}}>
                  <i className="fa fa-trash-o p-3" aria-hidden="true" style={{color:'gray',fontSize: "16px"}}></i>
                  <Link to="/" className="p-3" style={{color:'black',fontSize: "14px",fontWeight:'bold'}}>Trash</Link>
              </li>
          </ul>
          {this.state.show === true ? <EditModal show={this.state.show} oHide={this.handleClose} /> : <div />}
        </nav>
    );
  }
}
export default SideDrawer;