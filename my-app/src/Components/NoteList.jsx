import React, { Component } from "react";
import { Card } from "react-bootstrap";
import Note from "../Components/Note";
import Reminder from "../Components/Reminder";
import SideDrawer from "../Components/SideDrawer";
class NoteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pinnedNote: [],
      unPinnedNote: [],
      archiveNote: [],
      titles: [],
      trashNote: []
    };
  }
  test=()=>{
    console.log("Archive :",this.state.archiveNote);
    console.log("Trash :",this.state.trashNote);

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
      }),
      trashNote: props.titles.filter(note => {
        return note.trash;
      })
    };
  }

  updateNoteList(id) {
    this.setState({
      titles: this.titles.map(note => {
        console.log(note.noteId);
        if (note.noteId === id) {
          note.pin = !note.pin;
        }
      })
    });
  }

  updateTitle(id) {
    this.setState({
      titles: this.titles.map(note => {
        console.log(note.noteId);
        if (note.noteId === id) {
          note.title = document.getElementById(id + "title").value;
        }
      })
    });
  }
  render() {
    this.titles = this.props.titles;
    return (
      <div>
        {this.props.status.active ? (
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
                    onPinClick={() => this.updateNoteList(note.noteId)}
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
                    onPinClick={() => this.updateNoteList(note.noteId)}
                    onArchiveClick={() => this.updateNoteList(note.noteId)}
                  />
                );
              })}
            </div>
          </div>
        ) : this.props.status.archive ? (
          <div>
            <div className="note-list row">
              {this.state.archiveNote.map(note => {
                return (
                  <Note
                    noteId={note.noteId}
                    title={note.title}
                    description={note.description}
                    pin={note.pin}
                    fnote={note}
                    onPinClick={() => this.updateNoteList(note.noteId)}
                  />
                );
              })}
            </div>
          </div>
        ) : (
          <div>
            <div className="note-list row">
              {this.state.trashNote.map(note => {
                return (
                  <Note
                    noteId={note.noteId}
                    title={note.title}
                    description={note.description}
                    pin={note.pin}
                    fnote={note}
                    onPinClick={() => this.updateNoteList(note.noteId)}
                  />
                );
              })}
            </div>
          </div>
        )}
        {/* <div>
          {this.state.archiveNote.map(note => {
            return <SideDrawer noteList={note} />;
          })}
        </div> */}
      </div>
    );
  }
}
export default NoteList;