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
              <li className="active">
                <div className="side-drawer-header">
                  <i className="fa fa-sticky-note" aria-hidden="true" style={{color:'gray',fontSize: "18px"}}></i>
                  <div 
                    className="side-drawer-content"
                    onClick={this.props.onClickActive}
                    >Note</div>
                </div>
              </li>
              <li>
              <div className="side-drawer-header">
                  <i className="fa fa-bell-o" aria-hidden="true" style={{color:'gray',fontSize: "18px"}}></i>
                  <div className="side-drawer-content">Reminders</div>
              </div>
              </li>
              <hr style={{backgroundColor:'#e9ecef'}} />
              <p style={{color:'gray'}}>LABELS</p>
              <li>
              <div className="side-drawer-header">
                  <i className="fa fa-pencil-square-o" aria-hidden="true" style={{color:'gray',fontSize: "18px"}}></i>
                  <div 
                    className="side-drawer-content"
                    onClick={this.handleShow}
                    >Edit labels</div>
                    </div>
              </li>
              <hr style={{backgroundColor:'#e9ecef'}} />
              <li>
              <div className="side-drawer-header">
                  <i className="fa fa-archive" aria-hidden="true" style={{color:'gray',fontSize: "18px"}}></i>
                  <div 
                    className="side-drawer-content"
                    onClick={this.props.onClickArchive}
                    >Archive</div>
                    </div>
              </li>
              <li>
              <div className="side-drawer-header">
                  <i className="fa fa-trash-o" aria-hidden="true" style={{color:'gray',fontSize: "18px"}}></i>
                  <div 
                    className="side-drawer-content"
                    onClick={this.props.onClickTrash}
                    >Trash</div>
                    </div>
              </li>
          </ul>
          {this.state.show === true ? <EditModal show={this.state.show} oHide={this.handleClose} /> : <div />}
        </nav>
    );
  }
}
export default SideDrawer;