import React, { Component } from "react";
import "../App.css";
import NoteController from "../Controller/NoteController";
import { Card, Button, FormControl } from "react-bootstrap";

class CreateNote extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     openNote: false,
  //     title: "",
  //     description: "",
  //     createNote: false
  //   };
  // }

  // handleClickOpen = () => {
  //   this.setState({
  //     openNote: true
  //   });
  // };
  // handleClickClose = () => {
  //   this.setState({
  //     openNote: false
  //   });
  // };

  // onChangeTitle = event => {
  //   this.setState({
  //     title: event.target.value
  //   });
  // };
  // onChangeDescription = event => {
  //   this.setState({
  //     description: event.target.value
  //   });
  // };
  // onClose = () => {
  //   if (this.state.title === "" && this.state.description === "") {
  //     this.setState({
  //       openNote: false
  //     });
  //   } else {
  //     var noteDetails = {
  //       title: this.state.title,
  //       description: this.state.description
  //     };
  //     console.log("in note create ", noteDetails);
  //     this.setState({
  //       openNote: false
  //     });
  //     NoteController
  //       .createNote(noteDetails)
  //       .then(response => {
  //         console.log(response.data.obj);
  //         console.log(response.data.obj.title);
  //         this.setState({
  //           title: "",
  //           description: "",
  //           createNote: true
  //         });
  //         this.props.response(this.state.createNote);
  //       })
  //       .catch(err => {
  //         console.log("error", err.response.data);
  //       });
  //   }
  // };

  render() {
    const {title,description,onChangeTitle,onChangeDescription,onClose,handleClickOpen,openNote} = this.props;
    return (
      <div>
        <div style={{margin:'0px 22%'}}>
         {/* {!this.state.openNote ? ( */}
          {!openNote ? (
            <Card style={{borderRadius:'8px'}}>
              
                <input
                  spellCheck={true}
                  placeholder="Take a note...."
                  // onClick={this.handleClickOpen}
                  onClick={handleClickOpen}
                  style={{height:'48px',borderRadius:'8px',outline:'none',border:'none',fontSize:'20px',paddingLeft:'8px'}}
                />
             
            </Card>
          ) : (
            <Card>
             
                <input
                  name="title"
                  className=""
                  style={{height:'48px',borderRadius:'8px',outline:'none',border:'none',fontSize:'20px',paddingLeft:'8px'}}
                  placeholder="Tittle...."
                  // value={this.state.title}
                  value={title}
                  // onChange={this.onChangeTitle}
                  onChange={onChangeTitle}
                />
                <input
                  name="description"
                  className=""
                  style={{height:'48px',borderRadius:'8px',outline:'none',border:'none',fontSize:'20px',paddingLeft:'8px'}}
                 // multiline
                  // spellCheck={true}
                  placeholder="Take a note...."
                  // value={this.state.description}
                  value={description}
                  // onChange={this.onChangeDescription}
                  onChange={onChangeDescription}
                />
             

              <div>
                <div className="button-icon">
                  <div>
                    <i
                      className="fa fa-bell-o note-fa"
                      title="Remind me"
                      style={{ marginLeft: "2%" }}
                      aria-hidden="true"
                    ></i>
                    <i
                      className="fa fa-user-plus"
                      title="Collaborator"
                      style={{ marginLeft: "5%" }}
                      aria-hidden="true"
                    ></i>
                    <i
                      className="fa fa-print"
                      title="Change Color"
                      style={{ marginLeft: "5%" }}
                      aria-hidden="true"
                    ></i>
                    <i
                      className="fa fa-file-image-o"
                      title="Add image"
                      style={{ marginLeft: "5%" }}
                      aria-hidden="true"
                    ></i>
                    <i
                      className="fa fa-archive"
                      title="Archive"
                      style={{ marginLeft: "5%" }}
                      aria-hidden="true"
                    ></i>
                    <Button
                      className="float-right"
                      variant="light"
                      // onClick={this.onClose}
                      onClick={onClose}
                      style={{height:'33px',background:'none',fontWeight:'bold',outline:'none'}}
                    >
                      Close
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          )}
        </div>
      </div>
    );
  }
}
export default CreateNote;
