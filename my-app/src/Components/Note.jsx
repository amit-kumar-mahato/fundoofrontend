import React, { Component } from "react";
import { Card,Modal,Button } from "react-bootstrap";
import Reminder from "../Components/Reminder";
import cx from "classnames";
import Collaborator from "./Collaborators/Collaborator";
import PinnedNotes from "../Components/PinnedNotes";
import NoteController from "../Controller/NoteController";
import ModalBox from "./ModalBox";


class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      condition: false,
      modelOpen: false,
      //iconShow: false,
      isPinned: false,
      show:false
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleCollaborator = this.handleCollaborator.bind(this);
    //this.handleIcon = this.handleIcon.bind(this);
  }

  handleClose = () => this.setState({show:false});
  handleShow = () => this.setState({show:true});

  handleClick() {
    this.setState(oldState => ({ condition: !oldState.condition }));
  }
  handleCollaborator() {
    this.setState(collaborator => ({ modelOpen: !collaborator.modelOpen }));
  }
  handleIcon() {
    this.setState(icons => ({ iconShow: !icons.iconShow }));
  }
  handlePinned = (event) =>{
    event.preventDefault();
    NoteController.pinNote(this.props.noteId).then(response => {
      console.log("Note Pinned");
    })
    .catch(error => {
      console.log("not pinned");
    })
  }
  render() {
    const { condition, modelOpen, iconShow, isPinned } = this.state;
    const { title, description, noteId, onClickReminderIcon, pin } = this.props;

    console.log("Inside Note :" + condition + ", " + modelOpen);
    return (
      <div>
  
          <div>
          <Card
            className="my-2 mr-2"
            style={{ width: "15rem", borderRadius: "7px" }}
          >
            <Card.Body>
              <div style={{ display: "flex" }}>
                <div style={{ flex: 1 }}>{title}</div>
                <div className="pin-icon">
                  <i
                    className="fa fa-thumb-tack"
                    aria-hidden="true"
                    onClick={this.handlePinned}
                  ></i>
                </div>
              </div>
              <div>{description}</div>
              {/* {iconShow ===true ? */}
              <div className="d-flex icon-div" style={{ cursor: "pointer" }}>
                <div className="icon-div-content" onClick={this.handleShow}>
                  <i
                    className="fa fa-bell"
                    title="Remind me"
                    aria-hidden="true"
                    onClick={this.handleClick}
                  ></i>
                </div>
                <div className="icon-div-content">
                  <i
                    className="fa fa-user-plus"
                    title="Collaborator"
                    aria-hidden="true"
                    onClick={this.handleCollaborator}
                  ></i>
                </div>
                <div className="icon-div-content">
                  <i
                    className="fa fa-print"
                    title="Change Color"
                    aria-hidden="true"
                  ></i>
                </div>
                <div className="icon-div-content">
                  <i
                    className="fa fa-file-image-o"
                    title="Add image"
                    aria-hidden="true"
                  ></i>
                </div>
                <div className="icon-div-content">
                  <i
                    className="fa fa-archive"
                    title="Archive"
                    aria-hidden="true"
                  ></i>
                </div>
                <div className="icon-div-content">
                  <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                </div>
              </div>
              {/* :<div></div>} */}
            </Card.Body>
            <div>
              {condition === true ? <Reminder noteId={noteId} /> : <div />}
            </div>
          </Card>
          <div>
            {modelOpen === true ? <Collaborator noteId={noteId} /> : <div />}
          </div>
        </div>
        <ModalBox show={this.state.show} onHide={this.handleClose} note={this.props.fnote} handClick={this.handleClick}/>
      </div>
    );
  }
}
export default Note;
