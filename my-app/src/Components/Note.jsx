import React, { Component } from "react";
import { Card} from "react-bootstrap";
import Reminder from "../Components/Reminder";
import Collaborator from "./Collaborators/Collaborator";
import NoteController from "../Controller/NoteController";
import ModalBox from "./ModalBox";
import Icon from "./Icon";
import AddLabel from "./AddLabel";


class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      condition: false,
      modelOpen: false,
      //iconShow: false,
      isPinned: false,
      show:false,
      note: props.fnote
    };
    this.handleClick = this.handleClick.bind(this);
    //this.handleCollaborator = this.handleCollaborator.bind(this);
    //this.handleIcon = this.handleIcon.bind(this);
  }

  handleClose = () => this.setState({show:false});
  handleShow = () => this.setState({show:true});

  handleClick() {
    this.setState(oldState => ({ condition: !oldState.condition }));
  }

  // handleCollaborator() {
  //   this.setState(collaborator => ({ modelOpen: !collaborator.modelOpen }));
  // }
  // handleIcon() {
  //   this.setState(icons => ({ iconShow: !icons.iconShow }));
  // }
  // handlePinned = (noteid) =>{
  //   NoteController.pinNote(this.props.noteId).then(response => {
  //     console.log("Message :",response.data.message);
  //   })
  //   .catch(error => {
  //     console.log("Message :",error.data.message);
  //   })
  // }
  // handleArchive = (event) => {
  //   NoteController.archiveNote(this.props.noteId).then(response => {
  //     console.log("Message :",response.data.message);
  //   })
  //   .catch(error => {
  //     console.log("Message :",error.data.message);
  //   })
  // }
  handleTrash = () => {
    NoteController.deleteNote(this.props.noteId)
      .then(response => {
        console.log(response.data.message);
      })
      .catch(error => {
        console.log(error.data.message);
      });
  }
  render() {
    const { condition, modelOpen,moreOption} = this.state;
    const { title, description, noteId} = this.props;
    return (
      <div>
          <div>
          <Card
            className="my-2 mr-2"
            style={{ width: "15rem", borderRadius: "7px"}}
            //onClick={this.handleShow}
          >
            <Card.Body>
              <div style={{ display: "flex" }}>
                <div style={{ flex: 1 }} onClick={this.handleShow}>{title}</div>
                <div className="pin-icon">
                  <i
                    className="fa fa-thumb-tack"
                    aria-hidden="true"
                    onClick={this.props.onPinClick}
                  ></i>
                </div>
              </div>
              <div onClick={this.handleShow}>{description}</div>
              <div style={{marginTop:'30px'}}>
                <Icon 
                  handleClick={this.handleClick} 
                  handleArchive={this.props.handleArchive}
                  handleTrash={this.props.handleTrash}
                  noteId={noteId}
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
        <ModalBox show={this.state.show} onHide={this.handleClose} note={this.props.fnote}/>
      </div>
    );
  }
}
export default Note;
