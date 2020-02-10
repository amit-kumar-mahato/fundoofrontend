import React, { Component } from "react";
import { Card } from "react-bootstrap";
import Reminder from "../Components/Reminder";
import Collaborator from "./Collaborators/Collaborator";
import NoteController from "../Controller/NoteController";
import ModalBox from "./ModalBox";
import Icon from "./Icon";
import AddLabel from "./AddLabel";
import CollaboratorModal from "./collaboratorModal";
import { getCollaboratorList } from "../Controller/collaborator";

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      condition: false,
      modelOpen: false,
      //iconShow: false,
      isPinned: false,
      show: false,
      note: props.fnote,
      colabShow: false,
      collaboratorList: []
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClose = () => this.setState({ show: false });
  handleShow = () => this.setState({ show: true });

  handleColabShow = id => {
    this.setState({ colabShow: !this.state.colabShow });
    getCollaboratorList(id)
      .then(response => {
        console.log("MESSAGE :", response.data.obj);
        if (response.data.obj === "")  this.setState({collaboratorList:response.data.obj});
        this.setState({collaboratorList:response.data.obj});
      })
      .catch(error => {
        console.log("ERROR :", error.response.data.message);
      });
  };
  handleColabClose = () => this.setState({ colabShow: false });

  handleClick() {
    this.setState(oldState => ({ condition: !oldState.condition }));
  }
  handleTrash = () => {
    NoteController.deleteNote(this.props.noteId)
      .then(response => {
        console.log(response.data.message);
      })
      .catch(error => {
        console.log(error.data.message);
      });
  };
  render() {
    const { condition, modelOpen, moreOption } = this.state;
    const { title, description, noteId } = this.props;
    return (
      <div>
        <div>
          <Card
            className="my-2 mr-2"
            style={{ width: "15rem", borderRadius: "7px" }}
            //onClick={this.handleShow}
          >
            <Card.Body>
              <div style={{ display: "flex" }}>
                <div style={{ flex: 1 }} onClick={this.handleShow}>
                  {title}
                </div>
                <div className="pin-icon">
                  <i
                    className="fa fa-thumb-tack"
                    aria-hidden="true"
                    onClick={this.props.onPinClick}
                  ></i>
                </div>
              </div>
              <div onClick={this.handleShow}>{description}</div>
              <div style={{ marginTop: "30px" }}>
                <Icon
                  handleClick={this.handleClick}
                  handleArchive={this.props.handleArchive}
                  handleTrash={this.props.handleTrash}
                  noteId={noteId}
                  handleColabShow={() => this.handleColabShow(noteId)}
                />
              </div>
            </Card.Body>
            <div>
              {condition === true ? <Reminder noteId={noteId} /> : <div />}
            </div>
            <div>
              {moreOption === true ? <AddLabel noteId={noteId} /> : <div />}
            </div>
          </Card>
          <div>
            {modelOpen === true ? <Collaborator noteId={noteId} /> : <div />}
          </div>
        </div>
        <ModalBox
          show={this.state.show}
          onHide={this.handleClose}
          note={this.props.fnote}
        />
        {
        this.state.colabShow ? (
          <CollaboratorModal
            show={this.state.colabShow}
            onHide={this.handleColabClose}
            collaboratorList={this.state.collaboratorList}
            // addCollaborator={this.addCollaborator}
            // removeCollaborator={this.removeCollaborator}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}
export default Note;
