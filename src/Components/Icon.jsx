import React, { useState, useEffect } from "react";
import { Dropdown, Form, Row, Button } from "react-bootstrap";
import NoteController from "../Controller/NoteController";
import CollaboratorModal from "./collaboratorModal";
import { getCollaboratorList } from "../Controller/collaborator";
import {MdColorLens,MdDone} from "react-icons/md";

export default function Icon(props) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [note, setNote] = useState(props.note);
  const [dateError, setDateError] = useState("");
  const [timeError, setTimeError] = useState("");
  const [colabShow, setColabShow] = useState(false);
  const [collaboratorList, setCollaboratorList] = useState([]);
  const [labelShow, setLabelShow] = useState(false);
  const colors = ["white","#ffcdd2","#ffe0b2","#fff59d","#e6ee9c","#e1f5fe","#d7ccc8","#e1bee7","#f1f8e9"];

  useEffect(() => {
    getCollaboratorList(props.noteId)
      .then(response => {
        //console.log("MESSAGE :", response.data.obj);
        setCollaboratorList(response.data.obj);
      })
      .catch(error => {
        console.log("ERROR :", error.response.data.message);
      });
  }, [colabShow]);

  const handleColabShow = id => {
    getCollaboratorList(props.noteId)
      .then(response => {
        console.log("MESSAGE :", response.data.obj);
        setCollaboratorList(response.data.obj);
      })
      .catch(error => {
        console.log("ERROR :", error.response.data.message);
      });
    setColabShow(true);
  };
  const handleColabClose = () => setColabShow(false);

  const handleDateChange = e => {
    setDate(e.target.value);
  };
  const handleTimeChange = e => {
    setTime(e.target.value);
  };
  const onSubmit = noteID => {
    var reminder = {
      datetime: date + " " + time,
      noteId: props.noteId
    };
    setDate("");
    setTime("");
    NoteController.setReminder(reminder)
      .then(response => {
        console.log("RESPONSE :", response.data.message);
        props.addReminder(response.data.obj);
      })
      .catch(error => {
        console.log("ERROR" + error.data.message);
      });
  };

  const colorChange = (clr) => {
    console.log("Color :"+clr);
    console.log(note);
    setNote({...note,colour:clr})
    const colorInfo = {
      color:clr,
      noteId:props.noteId
    };
    NoteController.addColour(colorInfo).then(response => {
      console.log("Response :",response.data.obj);
      props.addColor(response.data.obj);
    })
    .catch(error => {
      console.log("Error :",error.data.message);
    })

  };
  return (
    <div className="icon-list">
      <Dropdown>
        <Dropdown.Toggle
          bsPrefix="dropdown"
          style={{ background: "none", border: "none" }}
        >
          <i
            className="fa fa-bell"
            title="Remind me"
            aria-hidden="true"
            // onClick={props.onClickReminderIcon}
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
            onClick={() => onSubmit(props.noteId)}
          >
            Save
          </button>
        </Dropdown.Menu>
      </Dropdown>
      <div className="icon-div-content">
        <i
          className="fa fa-user-plus"
          title="Collaborator"
          aria-hidden="true"
          onClick={() => handleColabShow(props.noteId)}
        ></i>
      </div>
      <Dropdown>
        <Dropdown.Toggle
          className="rounded-circle bg-transparent"
          variant={"light"}
          bsPrefix="dropdown"
        >
          <MdColorLens size={"20"} />
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Form>
            <Row className="justify-content-center" style={{ height: "40px" }}>
              {colors
                .filter((clr, id) => {
                  return id < 3;
                })
                .map((clr, id) => (
                  <div 
                    className="colorBtn"
                    style={{backgroundColor: clr
                    }}
                    onClick={() => colorChange(clr)}>
                    {clr === props.note.colour ? (
                      <MdDone />
                    ) : (
                      ""
                    )}
                    </div>
                ))}
            </Row>
            <Row className="justify-content-center" style={{ height: "40px" }}>
              {colors
                .filter((clr, id) => {
                  return id >= 3 && id < 6;
                })
                .map((clr, id) => (
                  <div 
                  className="colorBtn"
                    style={{backgroundColor: clr
                    }}
                    onClick={() => console.log(colorChange(clr))}
                    >
                    {clr === props.note.colour ? (
                      <MdDone style={{ color: "black" }} />
                    ) : (
                      ""
                    )}
                    </div>
                ))}
            </Row>
            <Row className="justify-content-center" style={{ height: "40px" }}>
              {colors
                .filter((clr, id) => {
                  return id >= 6 && id < 9;
                })
                .map((clr, id) => (
                  <div 
                  className="colorBtn"
                  style={{backgroundColor: clr
                  }}
                    onClick={() => console.log(colorChange(clr))}
                    >
                    {clr === props.note.colour ? (
                      <MdDone style={{ color: "black" }} />
                    ) : (
                      ""
                    )}
                    </div>
                ))}
            </Row>
          </Form>
        </Dropdown.Menu>
      </Dropdown>
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
          <Dropdown>

          </Dropdown>
          <Dropdown.Item onClick={props.handleTrash}>
            Delete note
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      {colabShow ? (
        <CollaboratorModal
          show={colabShow}
          onHide={handleColabClose}
          collaboratorList={collaboratorList}
          loadColb={handleColabShow}
          noteId={props.noteId}
        />
      ) : (
        ""
      )}
      {labelShow ? <div style={{position:'relative'}}>
            <div style={{padding:'5px'}}>Label Note</div>
          </div>:""}
    </div>
  );
}
