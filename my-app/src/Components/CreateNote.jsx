import React, { Component } from "react";
import "../App.css";
import NoteController from "../Controller/NoteController";
import { Card, Button, FormControl } from "react-bootstrap";
import CustomTogglerNote from "../Components/CustomTogglerNote";

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

  // onChangeTitle(event) {
  //   this.setState({ title: event.target.value });
  // }
  // onChangeDesc(event) {
  //   this.setState({ description: event.target.value });
  // }
  // onClose = () => {
  //   if (this.state.title === "" && this.state.description == "") {
  //     this.setState({ openNote: false });
  //   } else {
  //     var noteDetails = {
  //       title: this.state.title,
  //       description: this.state.description
  //     };

  //     noteController
  //       .createNote(noteDetails)
  //       .then(response => {
  //         console.log("Note Data :" + response.data);
  //       })
  //       .catch(error => {
  //         console.log("ERROR :" + error.data);
  //       });
  //   }
  // };
  // render() {
  //   return (
  //     <div className="note-container">
  //       <div className="notes">
  //         <input type="text" className="collapsible" placeholder="Title" onChange={this.onChangeTitle}/>
  //         <div className="note-content">
  //           <textarea
  //             type="text"
  //             className="collapsible"
  //             placeholder="Description"
  //             onChange={this.onChangeDesc}
  //           />
  //           <p
  //             className="d-flex justify-content-end"
  //             style={{ color: "black" }}
  //             onClick={this.onClose}
  //           >
  //             Close
  //           </p>
  //         </div>
  //       </div>
  //     </div>

  //   );
  // }

  constructor(props) {
    super(props);
    this.state = {
      openNote: false,
      title: "",
      description: "",
      createNote: false
    };
  }

  handleClickOpen = () => {
    this.setState({
      openNote: true
    });
  };
  handleClickClose = () => {
    this.setState({
      openNote: false
    });
  };

  onChangeTitle = event => {
    this.setState({
      title: event.target.value
    });
  };
  onChangeDescription = event => {
    this.setState({
      description: event.target.value
    });
  };
  onClose = () => {
    if (this.state.title === "" && this.state.description === "") {
      this.setState({
        openNote: false
      });
    } else {
      var noteDetails = {
        title: this.state.title,
        description: this.state.description
      };
      console.log("in note create ", noteDetails);
      this.setState({
        openNote: false
      });
      NoteController
        .createNote(noteDetails)
        .then(response => {
          console.log(response.data.obj);
          console.log(response.data.obj.title);
          this.setState({
            title: "",
            description: "",
            createNote: true
          });
          this.props.response(this.state.createNote);
        })
        .catch(err => {
          console.log("error", err.response.data);
        });
    }
  };

  render() {
    return (
      <div className="createNote-container">
        <div className="noteComponent">
          {!this.state.openNote ? (
            <Card className="note-button" style={{border:'none',outline:'none'}}>
              <div>
                <FormControl
                  className="inputbase"
                  style={{ width: "100%", padding: "10px" }}
                  //multiline
                  spellCheck={true}
                  placeholder="Take a note...."
                  onClick={this.handleClickOpen}
                />
              </div>
            </Card>
          ) : (
            <Card>
              <div>
                <FormControl
                  name="title"
                  className="inputbase"
                  style={{
                    width: "100%",
                    padding: "10px",
                    fontWeight: "bold",
                    fontSize: "120%"
                  }}
                  //multiline
                  // spellCheck={true}
                  placeholder="Tittle...."
                  value={this.state.title}
                  onChange={this.onChangeTitle}
                />
                <FormControl
                  name="description"
                  className="inputbase"
                  style={{ width: "100%", padding: "10px" }}
                 // multiline
                  // spellCheck={true}
                  placeholder="Take a note...."
                  value={this.state.description}
                  onChange={this.onChangeDescription}
                />
              </div>

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
                      onClick={this.onClose}
                      style={{height:'33px',background:'none',fontWeight:'bold'}}
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
