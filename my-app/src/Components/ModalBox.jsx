import React,{useState} from 'react';
import {Card,Modal} from 'react-bootstrap';

export default function ModalBox(props){
const [note,setNote]=useState(props.note);
console.log("modal :"+note);
    return(
        <Modal show={props.show} onHide={props.onHide} centered>
            <div>
          <Card
            className="my-2 mr-2"
            style={{ width: "15rem", borderRadius: "7px" }}
          >
            <Card.Body>
              <div style={{ display: "flex" }}>
                <div style={{ flex: 1 }}>{note.title}</div>
              </div>
              <div>{note.description}</div>
              {/* {iconShow ===true ? */}
              <div className="d-flex icon-div" style={{ cursor: "pointer" }}>
                <div className="icon-div-content">
                  <i
                    className="fa fa-bell"
                    title="Remind me"
                    aria-hidden="true"
                    onClick={props.handClick}
                  ></i>
                </div>
                <div className="icon-div-content">
                  <i
                    className="fa fa-user-plus"
                    title="Collaborator"
                    aria-hidden="true"
                  ></i>
                </div>
                <div className="icon-div-content">
                  <i
                    className="fa fa-print"
                    title="Change Color"
                    aria-hidden="true"
                  ></i>
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
                  ></i>
                </div>
                <div className="icon-div-content">
                  <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                </div>
              </div>
              {/* :<div></div>} */}
            </Card.Body>
            {/* <div>
              {condition === true ? <Reminder noteId={note.noteId} /> : <div />}
            </div> */}
          </Card>
          {/* <div>
            {modelOpen === true ? <Collaborator noteId={note.noteId} /> : <div />}
          </div> */}
        </div>
      </Modal>
    )
}