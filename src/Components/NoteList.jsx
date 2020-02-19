import React, { useState, useEffect } from "react";
import Note from "../Components/Note";
import NoteController from "../Controller/NoteController";
function NoteList(props) {
  const [notelist, setNoteList] = useState([]);
  const [trashNote, setTrashNote] = useState([]);
  const [pinnedNote, setPinnedNote] = useState([]);
  const [unPinnedNote, setUnPinnedNote] = useState([]);
  const [archiveNote, setArchiveNote] = useState([]);
  const [reminderNote, setReminderNote] = useState([]);
  useEffect(() => {
    NoteController.allNotes().then(response => {
      console.log(response.data.obj)
      setNoteList(response.data.obj);
    });
  }, []);
  useEffect(() => {
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
    setReminderNote(
      notelist.filter(note => {
        return note.reminder;
      })
    );
  }, [notelist]);

  const updateNoteListPin = (id, status) => {
    console.log(id+", "+status);
    setNoteList(
      notelist.map(nt => {
        if (nt.noteId === id) {
          if(status === "pinned"){
          NoteController.pinNote(id)
            .then(response => {
              console.log("Message :", response.data.message);
            })
            .catch(error => {
              console.log("Message :", error.data.message);
            });
          nt.archiev = false;
          nt.trash = false;
          nt.pin = !nt.pin;
          }
          else if(status === "Trash") {
            console.log("Trash");
            NoteController.deleteNote(id)
              .then(response => {
                console.log(response.data.message);
              })
              .catch(error => {
                console.log(error.data.message);
              });
          }
        }
        return nt;
      })
    );
  };

  const updateNoteListStatus = (id, status) => {
    console.log("NoteList :"+status+","+id);
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
            console.log("Active");
            NoteController.archiveNote(note.noteId)
              .then(response => {
                console.log("Message :", response.data.message);
              })
              .catch(error => {
                console.log("Message :", error.data.message);
              });
            note.archiev = false;
            note.trash = false;
          } else if (status === "Trash") {
            console.log("Trash");
            NoteController.deleteNote(note.noteId)
              .then(response => {
                console.log(response.data.message);
              })
              .catch(error => {
                console.log(error.data.message);
              });
            note.archiev = false;
            note.trash = true;
            note.active = false;
          }
          else if (status ==="Reminder"){
            console.log("Reminder");
            note.pin=false;
            note.trash=false;
            note.archiev=false;
          }
        }
        return note;
      })
    );
  };
  
  const removeReminder = (noteId) => {
    NoteController.deleteReminder(noteId).then(response => {
      console.log("Reminder Deleted...");
      setNoteList( notelist.filter(n => noteId!==n.noteId));
    })
    .catch(error => {
      console.log("error...");
    });
    
  }
  const addReminder = (note) => {
    setNoteList(
        notelist.map(nt => {
          if (nt.noteId === note.noteId) {
            return note;
          }
          return nt;
        })
      );
  }

  const addColor = (note) => {
    setNoteList(
      notelist.map(nt => (nt.noteId===note.noteId ? {...nt,colour:note.colour} : nt))
    )
  }
  return (
    <div style={{marginLeft:'27px'}}>
      {/* {pinnedNote.map(n => {
        return <div>{n.noteID}</div>;
      })} */}
      {props.status.active ? (
        <div>
          <strong>PINNED</strong>
          <div className="row">
            {pinnedNote.map(note => {
              return (
                <Note key={note.noteId}
                  list={props.list}
                  noteId={note.noteId}
                  title={note.title}
                  description={note.description}
                  pin={note.pin}
                  fnote={note}
                  onPinClick={() => updateNoteListPin(note.noteId,"pinned")}
                  handleTrash={() => updateNoteListStatus(note.noteId, "Trash")}
                  handleArchive={() => updateNoteListStatus(note.noteId, "Archive")}
                />
              );
            })}
          </div>
          <strong>OTHERS</strong>
          <div className="row">
            {unPinnedNote.map(note => {
              return (
                <Note key={note.noteId}
                  list={props.list}
                  noteId={note.noteId}
                  title={note.title}
                  description={note.description}
                  pin={note.pin}
                  fnote={note}
                  addReminder={addReminder}
                  addColor={addColor}
                  onPinClick={() => updateNoteListPin(note.noteId,"pinned")}
                  handleTrash={() =>updateNoteListStatus(note.noteId, "Trash") }
                  handleArchive={() =>updateNoteListStatus(note.noteId, "Archive")}
                  handleReminder={() => removeReminder(note.noteId)}
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
                <Note  key={note.noteId}
                  list={props.list}
                  noteId={note.noteId}
                  title={note.title}
                  description={note.description}
                  pin={note.pin}
                  fnote={note}
                  handleTrash={() =>    updateNoteListStatus(note.noteId, "Trash") }
                  onPinClick={() => updateNoteListPin(note.noteId)}
                  handleArchive={() =>
                    updateNoteListStatus(note.noteId, "Active")
                  }
                />
              );
            })}
          </div>
        </div>
      ) : props.status.trash ?(
        <div>
          <div className="note-list row">
            {trashNote.map(note => {
              return (
                <Note key={note.noteId}
                  list={props.list}
                  noteId={note.noteId}
                  title={note.title}
                  description={note.description}
                  pin={note.pin}
                  fnote={note}
                  handleTrash={() => updateNoteListStatus(note.noteId, "Trash") }
                />
              );
            })}
          </div>
        </div>
      ) : <div>
      <div className="note-list row">
        {reminderNote.map(note => {
          return (
            <Note  key={note.noteId}
              list={props.list}
              noteId={note.noteId}
              title={note.title}
              description={note.description}
              pin={note.pin}
              fnote={note}
              handleTrash={() => updateNoteListStatus(note.noteId, "Reminder") }
            />
          );
        })}
      </div>
    </div>}
    </div>
  );
}
export default NoteList;
