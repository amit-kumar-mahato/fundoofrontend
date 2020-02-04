import React, { Component } from "react";
import { Card } from "react-bootstrap";
import Note from "../Components/Note";
import Reminder from "../Components/Reminder";
import SideDrawer from '../Components/SideDrawer';
class NoteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pinnedNote: [],
      unPinnedNote: [],
      archiveNote: [],
      titles: []
    };
  }
  static getDerivedStateFromProps(props, state) {
    return {
      pinnedNote: props.titles.filter(note => {
        return note.pin;
      }),
      unPinnedNote: props.titles.filter(note => {
        return !note.pin;
      }),
      archiveNote: props.titles.filter(note => {
        return note.archiev;
      })
    };
  }

  updatepinnedNote(id) {
    this.setState({
      titles: this.titles.map(note => {
        console.log(note.noteId);
        if (note.noteId === id) {
          note.pin = !note.pin;
        }
      })
    });
  }

  updateTitle(id){
    this.setState({
      titles: this.titles.map(note => {
        console.log(note.noteId);
        if (note.noteId === id) {
          note.title = document.getElementById(id+"title").value;
        }
      })
    });
  }
  render() {
    this.titles = this.props.titles;
    return (
      <div>
        <div>
          <strong style={{ paddingLeft: "18px" }}>PINNED</strong>
          <div className="note-list row">
            {this.state.pinnedNote.map(note => {
              return (
                <Note
                  noteId={note.noteId}
                  title={note.title}
                  description={note.description}
                  pin={note.pin}
                  fnote={note}
                  onPinClick={() => this.updatepinnedNote(note.noteId)}
                />
              );
            })}
          </div>
          <strong style={{ paddingLeft: "18px" }}>OTHERS</strong>
          <div className="note-list row">
            {this.state.unPinnedNote.map(note => {
              return (
                <Note
                  noteId={note.noteId}
                  title={note.title}
                  description={note.description}
                  pin={note.pin}
                  fnote={note}
                  onPinClick={() => this.updatepinnedNote(note.noteId)}
                />
              );
            })}
          </div>
          <div>
            {this.state.archiveNote.map(note => {
              return (
                <SideDrawer noteList={note}/>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
export default NoteList;
