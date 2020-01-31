import React, { Component } from "react";
import NoteController from "../Controller/NoteController";
import { Card } from "react-bootstrap";

class PinnedNotes extends Component {
  // constructor(props){
  //     super(props);
  //     this.state = {
  //         listOfPinnedNotes:[]
  //     }
  // }
  render() {
    const { pinnedNotes } = this.props;
    return pinnedNotes.map(note => {
      return (
        <div className="row note-list">
          {
            <Card
              className="my-2 mr-2"
              style={{ width: "15rem" }}
              onMouseOver={this.handleIcon}
            >
              <Card.Body>
                <div style={{ display: "flex" }}>
                  <div style={{ flex: 1 }}>{note.title}</div>
                  <div className="pin-icon">
                    <i
                      className="fa fa-thumb-tack"
                      aria-hidden="true"
                      onClick={this.handlePinned}
                    ></i>
                  </div>
                </div>
                <div>{note.description}</div>
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
            </Card>
          }
        </div>
      );
    });
  }
}
export default PinnedNotes;
