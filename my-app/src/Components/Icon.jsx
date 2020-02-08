import React, { useState } from "react";
import { Dropdown, FormControl, Button } from "react-bootstrap";
import NoteController from "../Controller/NoteController";
import CollaboratorModal from "./collaboratorModal";
import {AiOutlineBell} from 'react-icons/fa';

export default function Icon(props) {
 
  const [show, setShow] = useState(false);
  const [date,setDate]= useState("");
  const [time,setTime]= useState("");
  const [dateError, setDateError] = useState("");
  const [timeError, setTimeError] = useState("");
  // const handleDelete = () => {
  //   NoteController.deleteNote(props.noteId)
  //     .then(response => {
  //       console.log(response.data.message);
  //     })
  //     .catch(error => {
  //       console.log(error.data.message);
  //     });
  // };
  
const handleClose = () => {
  setShow(false);
}
const handleShow = () => {
  setShow(true);
}
const handleDateChange = (e) =>{
  setDate(e.target.value);
}
const handleTimeChange = (e) =>{
  setTime(e.target.value);
}
const onSubmit = () => {
  var reminder = {
    datetime: date+" "+time,
    noteId: props.noteId
}
setDate({date:""});
setTime({time:""});
NoteController.setReminder(reminder).then(response => {
   console.log("RESPONSE :",response.data.message);
})
.catch(error =>{
    console.log("ERROR"+error.data.message);
})
}
  return (
    <div className="icon-list">
      {/* <div className="icon-div-content"> */}
        <Dropdown>
          <Dropdown.Toggle
            bsPrefix="dropdown"
            style={{ background: "none", border: "none" }}
          >
            <i
              className="fa fa-bell"
              title="Remind me"
              aria-hidden="true"
              onClick={props.onClickReminderIcon}
              style={{ color: "black" }}
            ></i>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <div className="reminder-div">
              <div className="reminder-header">Reminder:</div>
            <div style={{ marginTop: "17px" }}>
              <input 
                type="date" 
                value={date}
                onChange={handleDateChange}
                required
                className="reminder-input"
              />
            </div>
            <div style={{ background: "#dadce0", height: "1px" }}></div>
            {/* <small style={{ color: "red" }}>{this.state.dateErr}</small> */}
            <div style={{ marginTop: "15px" }}>
              <input
                type="time"
                value={time}
                onChange={handleTimeChange}
                required
                className="reminder-input"
              />
            </div>
            <div style={{ background: "#dadce0", height: "1px" }}></div>
            </div>
            {/* <small style={{ color: "red" }}>{this.state.timeErr}</small> */}

            <button
              className="float-right reminder-save-btn"
              onClick={onSubmit}
            >
              Save
            </button>
           
          </Dropdown.Menu>
        </Dropdown>
      {/* </div> */}
      <div className="icon-div-content">
        <i
          className="fa fa-user-plus"
          title="Collaborator"
          aria-hidden="true"
          onClick={handleShow}
        ></i>
      </div>
      <div className="icon-div-content">
        <i className="fa fa-print" title="Change Color" aria-hidden="true"></i>
      </div>
      {/* <div className="icon-div-content">
        <i
          className="fa fa-file-image-o"
          title="Add image"
          aria-hidden="true"
        ></i>
      </div> */}
      <div className="icon-div-content">
        <i
          className="fa fa-archive"
          title="Archive"
          aria-hidden="true"
          onClick={props.handleArchive}
        ></i>
      </div>

      <Dropdown>
        <Dropdown.Toggle
          id="dropdown-more"
          bsPrefix="dropdown"
          style={{ background: "none", border: "none" }}
        >
          <i
            className="fa fa-ellipsis-v"
            aria-hidden="true"
            style={{ color: "black" }}
          ></i>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item>Add Label</Dropdown.Item>
          <Dropdown.Item onClick={props.handleTrash}>Delete Label</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      {
        // console.log("SHOW :",show)
      show ? <CollaboratorModal 
        show={show} 
        onHide={handleClose} 
        collaboratorList={props.collaboratorList}
        addCollaborator={props.addCollaborator}
        removeCollaborator={props.removeCollaborator}/> : ""
    }
    </div>
  );
}
