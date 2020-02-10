import React, { Component } from "react";
import { Card } from "react-bootstrap";
import Reminder from "./Reminder";
import Collaborator from "./Collaborators/Collaborator";

class PinnedNotes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      condition: false,
      modelOpen: false,
      iconShow: false,
      //isPinned: false,
      title:this.props.title,
      description:this.props.description,

    };
    this.handleClick = this.handleClick.bind(this);
    this.handleCollaborator = this.handleCollaborator.bind(this);
    this.handleIcon = this.handleIcon.bind(this);
    //this.handlePinned = this.handlePinned.bind(this);
  }

  handleClick() {
    this.setState(oldState => ({ condition: !oldState.condition }));
  }
  handleCollaborator() {
    this.setState(collaborator => ({ modelOpen: !collaborator.modelOpen }));
  }
  handleIcon() {
    this.setState(icons => ({ iconShow: !icons.iconShow }));
  }
 
  render() {
    const { condition, modelOpen, iconShow, isPinned } = this.state;
    const {handlePinned} = this.props;
    console.log("Inside Note :" + condition + ", " + modelOpen);
    return (
      <div>
        <div className="note-list" style={{display:'d-flex'}}>
          <Card
            className="my-2 mr-2"
            style={{ width: "15rem", borderRadius: "7px" }}
          >
            <Card.Body>
              <div style={{ display: "flex" }}>
                <div style={{ flex: 1 }}>{this.state.title}</div>
                <div className="pin-icon">
                  <i
                    className="fa fa-thumb-tack"
                    aria-hidden="true"
                    onClick={handlePinned}
                  ></i>
                </div>
              </div>
              <div>{this.state.description}</div>
              {/* {iconShow ===true ? */}
              <div className="d-flex icon-div" style={{ cursor: "pointer" }}>
                <div className="icon-div-content">
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
              {condition === true ? <Reminder noteId={this.props.noteId} /> : <div />}
            </div>
          </Card>
          <div>
            {modelOpen === true ? <Collaborator noteId={this.props.noteId} /> : <div />}
          </div>
        </div>
        </div>
      );
  }
}
export default PinnedNotes;
