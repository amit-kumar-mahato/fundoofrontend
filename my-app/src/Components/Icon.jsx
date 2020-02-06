import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import NoteController from "../Controller/NoteController";

export default function Icon(props) {
  const [show, setShow] = useState(false);
  const handleDelete = () => {
    NoteController.deleteNote(props.noteId)
      .then(response => {
        console.log(response.data.message);
      })
      .catch(error => {
        console.log(error.data.message);
      });
  };

  return (
    <div style={{ display: "flex", cursor: "pointer" }}>
      <div className="">
        <Dropdown>
          <Dropdown.Toggle
            id="dropdown-basic"
            bsPrefix="dropdown"
            style={{ background: "none", border: "none", outline: "none" }}
          >
            <i
              className="fa fa-bell"
              title="Remind me"
              aria-hidden="true"
              //onClick={props.handleClick}
              style={{ color: "black" }}
            ></i>
          </Dropdown.Toggle>
          <Dropdown.Menu style={{lineHeight:'30px'}}>
            <h5>Reminder:</h5>
            <Dropdown.Item style={{display:'flex',cursor:'pointer'}}>
              <div>Later today</div>
              <div style={{marginLeft:'55px'}}>8:00PM</div>
            </Dropdown.Item>
            <Dropdown.Item style={{display:'flex',cursor:'pointer'}}>
              <div>Tommorow</div>
              <div style={{marginLeft:'55px'}}>8:00AM</div>
            </Dropdown.Item>
            <Dropdown.Item style={{display:'flex',cursor:'pointer'}}>
              <div>Next Week</div>
              <div style={{marginLeft:'55px'}}>MON,8:00AM</div>
            </Dropdown.Item>
            <Dropdown.Item>Pick date & time</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className="icon-div-content">
        <i
          className="fa fa-user-plus"
          title="Collaborator"
          aria-hidden="true"
          //onClick={this.handleCollaborator}
        ></i>
      </div>
      <div className="icon-div-content">
        <i className="fa fa-print" title="Change Color" aria-hidden="true"></i>
      </div>
      <div className="icon-div-content">
        <i
          className="fa fa-file-image-o"
          title="Add image"
          aria-hidden="true"
        ></i>
      </div>
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
          style={{background:'none',border:'none'}}
        >
          <i
            className="fa fa-ellipsis-v"
            aria-hidden="true"
            style={{ color: "black" }}
          ></i>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item>Add Label</Dropdown.Item>
          <Dropdown.Item onClick={handleDelete}>Delete Label</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
