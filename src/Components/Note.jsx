import React, { Component, Fragment } from "react";
import { Card } from "react-bootstrap";
import NoteController from "../Controller/NoteController";
import ModalBox from "./ModalBox";
import Icon from "./Icon";
import MyTag from "./myTag";
import {IoMdTime} from "react-icons/io";

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      condition: false,
      //iconShow: false,
      isPinned: false,
      show: false,
      note: props.fnote,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClose = () => this.setState({ show: false });
  handleShow = () => this.setState({ show: true });

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
    const { title, description, noteId } = this.props;
    return (
      <Fragment>
        <Fragment>
          <Card
            className={"shadow-sm mr-2 mb-2 " + this.props.list}
            style={{ width: "15rem", borderRadius: "7px",backgroundColor:this.state.note.colour}}
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
              <div className="row ml-1 p-2 w-100">
                {
                  (this.props.fnote.reminder !== null && this.props.fnote.reminder !== "") ?
                  <MyTag icon={<IoMdTime/>} id={"reminder"+this.props.noteId}
                  data={(this.props.fnote.reminder !== null ? this.props.fnote.reminder : "")}
                  handleCloseIcon={this.props.handleReminder}
                  />
                  : ""
                }
                {

                }
            
                </div>
              <div style={{ marginTop: "30px" }}>
                <Icon
                  handleClick={this.handleClick}
                  handleArchive={this.props.handleArchive}
                  handleTrash={this.props.handleTrash}
                  noteId={noteId}
                  addReminder={this.props.addReminder}
                  addColor={this.props.addColor}
                  note={this.props.fnote}
                />
              </div>
            </Card.Body>
          </Card>
        </Fragment>
        <ModalBox
          show={this.state.show}
          onHide={this.handleClose}
          note={this.props.fnote}
        />
      </Fragment>
    );
  }
}
export default Note;
