import React, { Component } from "react";
import Newheader from "../Components/Newheader";
import NoteController from "../Controller/NoteController";
import Header from "../Components/Header";
import SideDrawer from "../Components/SideDrawer";
import CreateNote from "./CreateNote";
import NoteList from "../Components/NoteList";
import '../App.css';
export default class Dashboard extends Component {
  state = {
    titles: [],
    descriptions: [],
    title: "",
    description: "",
    listOfNotes: [],
    openNote: false,
    addReminder:false
  };
  /*-----Add Reminder---------*/
  onClickReminderIcon = () => {
    this.setState({addReminder: true})
  }
  handleClickOpen = () => {
    this.setState({
      openNote: true
    });
  };
  onChangeTitle = e => {
    this.setState({ title: e.target.value });
  };
  onChangeDescription = e => {
    this.setState({ description: e.target.value });
  };
  onClose = e => {
    e.preventDefault();
    if (this.state.title === "" && this.state.description === "") {
      this.setState({ openNote: false });
    } else {
      const notes = {
        title: this.state.title,
        description: this.state.description
      };
      NoteController.createNote(notes)
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
      const createNote = [
        ...this.state.titles,
        ...this.state.descriptions,
        notes
      ];
      this.setState({
        titles: createNote,
        title: "",
        description: "",
        openNote: false
      });
    }
  };
  componentDidMount() {
    this.getAllNotes();
  }

  getAllNotes = () =>{
    NoteController.allNotes().then(response => {
      console.log('Notes List',response.data.obj);
      this.setState({listOfNotes: response.data.obj})

    })
  }
  render() {
    let mainContent = {
      marginTop: "9%"
    };
    return (
      // <div className="App">

      //     <Header />

      //   <div className="Side_Drawer d-flex justify-content-start">
      //     <SideDrawer />
      //   </div>
      //   <div className="Main_Content d-flex justify-content-center" style={mainContent}>
      //     <CreateNote />
      //   </div>
      //   </div>

      /* New Code*/

      <div className="App">
        <Header />
        <div className="Side_Drawer d-flex justify-content-start">
          <SideDrawer />
        </div>
        <div className="Main_Content d-flex justify-content-center" style={{mainContent}}>
        <CreateNote
          title={this.state.title}
          description={this.state.description}
          openNote={this.state.openNote}
          handleClickOpen={this.handleClickOpen}
          onChangeTitle={this.onChangeTitle}
          onChangeDescription={this.onChangeDescription}
          onClose={this.onClose}
        />
        </div>
        <div className="Main_Content" style={{backgroundColor:'',marginLeft:'16rem'}}>
          <NoteList 
            titles={this.state.listOfNotes} 
            onClickReminderIcon={this.onClickReminderIcon}/>
        </div>
      </div>
    );
  }
}
