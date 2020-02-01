import React, { Component } from "react";
import { Card } from "react-bootstrap";
import Note from "../Components/Note";
import Reminder from "../Components/Reminder";
class NoteList extends Component {
  render() {
    var pinnedNote = [];
    var unPinnedNote = [];
    const {titles} = this.props;
    console.log("Inside NoteList :", titles);
    //console.log(onClickReminderIcon);
    pinnedNote = titles.filter(note => {
      return note.pin;
    });
    unPinnedNote = titles.filter(note => {
      return !note.pin;
    });
    pinnedNote = titles.filter(note => {
      return note.pin;
    });
    unPinnedNote = titles.filter(note => {
      return !note.pin;
    });
    
    return (
      <div>
        <div>
          <strong style={{paddingLeft:'18px'}}>PINNED</strong>
          <div className="note-list row">
            {pinnedNote.map(note => {
              console.log("Inside MAP :" + note.pin);
              return (
                <Note
                  noteId={note.noteId}
                  title={note.title}
                  description={note.description}
                  pin={note.pin}
                  fnote={note}
                />
              );
            })}
          </div>
          <strong style={{paddingLeft:'18px'}}>OTHERS</strong>
          <div className="note-list row">
            {unPinnedNote.map(note => {
              console.log("Inside MAP :" + note.pin);
              return (
                <Note
                  noteId={note.noteId}
                  title={note.title}
                  description={note.description}
                  pin={note.pin}
                  fnote={note}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
export default NoteList;
