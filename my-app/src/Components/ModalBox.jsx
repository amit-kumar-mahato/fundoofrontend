import React,{useState} from 'react';
import {Card,Modal, FormControl} from 'react-bootstrap';
import Icon from './Icon';

export default function ModalBox(props){
const [note,setNote]=useState(props.note);
const [text,setText]=useState("");
console.log("modal :"+note);
    return(
        <Modal show={props.show} onHide={props.onHide} centered>
            <div style={{borderRadius:'6px'}}>
          {/* <Card
            className="my-2 mr-2"
            style={{ width: "15rem", borderRadius: "7px",backgroundColor:''}}
          > */}
            {/* <Card.Body>
              <div style={{ display: "flex" }}>
                <div style={{ flex: 1 }}>{note.title}</div>
              </div>
              <div>{note.description}</div>
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
            </Card.Body> */}
          {/* </Card>    */}
          <Card style={{width:'100%'}}>
            <div style={{padding:'13px'}}>
              <div style={{fontSize:'1.375rem',lineHeight:'1.75rem'}}>
                <div style={{display:'flex',paddingBottom:'12px',paddingTop:'5px'}}>
                  <div style={{flex: 1,outline:'none'}}>
                    <input id={note.noteId+"title"}  type="text" name="title" value={note.title} style={{background:'none',border:'none',outline:'none'}} onChange={(e)=>setNote({...note,title:e.target.value})}/>
                    </div>
                  <div>
                  <i
                    className="fa fa-thumb-tack"
                    aria-hidden="true"
                  ></i>
                  </div>
                </div>
                
                <div style={{outline:'none'}}>
                  <input type="text" name="description" value={note.description} style={{background:'none',border:'none',outline:'none'}} onChange={(e)=>setNote({...note,description:e.target.value})}/>
                </div>
              </div>
              <div className="icon-component" style={{marginTop:'50px'}}>
                
                  <div style={{display:'flex'}}>
                    <div style={{flex: 1}}>
                    <Icon />
                    </div>
                    <div style={{marginTop:'10px'}}>
                      <button type="button" style={{border:'none',background:'none'}}>Close</button>
                    </div>
                  </div>
        
              
              </div>
            
            </div>
          </Card>
        </div>
      </Modal>
    )
}