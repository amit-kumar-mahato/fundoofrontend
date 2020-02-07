import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import Note from "../Components/Note";
import Reminder from "../Components/Reminder";
import SideDrawer from "../Components/SideDrawer";
import Axios from "axios";
import NoteController from "../Controller/NoteController";
function NoteList(props) {
  const [notelist, setNoteList] = useState([]);
  const [trashNote, setTrashNote] = useState([]);
  const [pinnedNote, setPinnedNote] = useState([]);
  const [unPinnedNote, setUnPinnedNote] = useState([]);
  const [archiveNote, setArchiveNote] = useState([]);
  useEffect(() => {
    NoteController.allNotes().then(response => {
      setNoteList(response.data.obj);
    });
  }, []);
  useEffect(() => {
    console.log("noteList", notelist);
    setPinnedNote(
      notelist.filter(note => {
        return note.pin;
      })
    );
    setUnPinnedNote(
      notelist.filter(note => {
        return !note.pin && !note.archiev && !note.trash;
      })
    );
    setArchiveNote(
      notelist.filter(note => {
        return note.archiev;
      })
    );
    setTrashNote(
      notelist.filter(note => {
        return note.trash;
      })
    );
  }, [notelist]);

  const updateNoteListPin = id => {
    setNoteList(
      notelist.map(nt => {
        if (nt.noteId === id) {
          NoteController.pinNote(id)
            .then(response => {
              console.log("Message :", response.data.message);
            })
            .catch(error => {
              console.log("Message :", error.data.message);
            });
          console.log("bla bla");
          nt.archiev = false;
          nt.trash = false;
          nt.pin = !nt.pin;
        }
        return nt;
      })
    );
  };

  const updateNoteListStatus = (id, status) => {
    setNoteList(
      notelist.map(note => {
        if (note.noteId === id) {
          if (status === "Archive") {
            NoteController.archiveNote(note.noteId)
              .then(response => {
                console.log("Message :", response.data.message);
              })
              .catch(error => {
                console.log("Message :", error.data.message);
              });
            note.archiev = true;
            note.pin = false;
            note.trash = false;
          } else if (status === "Active") {
            note.archiev = false;
            note.trash = false;
          } else if (status === "Trash") {
            NoteController.deleteNote(this.props.noteId)
              .then(response => {
                console.log(response.data.message);
              })
              .catch(error => {
                console.log(error.data.message);
              });
            note.archiev = false;
            note.trash = true;
          }
        }
        return note;
      })
    );
  };
  return (
    <div>
      {pinnedNote.map(n => {
        return <div>{n.noteID}</div>;
      })}
      {props.status.active ? (
        <div>
          <strong style={{ paddingLeft: "18px" }}>PINNED</strong>
          <div className="note-list row">
            {pinnedNote.map(note => {
              return (
                <Note
                  noteId={note.noteId}
                  title={note.title}
                  description={note.description}
                  pin={note.pin}
                  fnote={note}
                  onPinClick={() => updateNoteListPin(note.noteId)}
                  handleArchive={() =>
                    updateNoteListStatus(note.noteId, "Archive")
                  }
                />
              );
            })}
          </div>
          <strong style={{ paddingLeft: "18px" }}>OTHERS</strong>
          <div className="note-list row">
            {unPinnedNote.map(note => {
              return (
                <Note
                  noteId={note.noteId}
                  title={note.title}
                  description={note.description}
                  pin={note.pin}
                  fnote={note}
                  onPinClick={() => updateNoteListPin(note.noteId)}
                  handleArchive={() =>
                    updateNoteListStatus(note.noteId, "Archive")
                  }
                />
              );
            })}
          </div>
        </div>
      ) : props.status.archive ? (
        <div>
          <div className="note-list row">
            {archiveNote.map(note => {
              return (
                <Note
                  noteId={note.noteId}
                  title={note.title}
                  description={note.description}
                  pin={note.pin}
                  fnote={note}
                  onPinClick={() => updateNoteListPin(note.noteId)}
                  handleArchive={() =>
                    updateNoteListStatus(note.noteId, "Active")
                  }
                />
              );
            })}
          </div>
        </div>
      ) : (
        <div>
          <div className="note-list row">
            {trashNote.map(note => {
              return (
                <Note
                  noteId={note.noteId}
                  title={note.title}
                  description={note.description}
                  pin={note.pin}
                  fnote={note}
                  handleTrash={() =>
                    updateNoteListStatus(note.noteId, "Trash")
                  }
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
export default NoteList;
