import React, {useState } from "react";
import '../App.css';
import { Accordion, Card, Button, FormControl, Form } from "react-bootstrap";

export function Example() {
  const [val, setVal] = useState(true);
  const title = useState('');
  const description = useState('');
  const hid = () => {
    setVal(true);
  };
  const show = () => {
    setVal(false);
  };
  return (
    <div className="note-container">
      <FormControl placeholder="Title" name="title" onFocus={show} />
      <div hidden={val} className="desc-icon">
        <Form.Control as="textarea" rows="4" name="description" placeholder="Take a note..." />
        <div style={{height:'35px'}}>
        <i className="fa fa-bell-o note-fa" title="Remind me" style={{marginLeft:'2%'}} aria-hidden="true"></i>
        <i className="fa fa-user-plus" title="Collaborator" style={{marginLeft:'5%'}} aria-hidden="true"></i>
        <i className="fa fa-print" title="Change Color" style={{marginLeft:'5%'}} aria-hidden="true"></i>
        <i className="fa fa-file-image-o" title="Add image" style={{marginLeft:'5%'}} aria-hidden="true"></i>
        <i className="fa fa-archive" title="Archive" style={{marginLeft:'5%'}} aria-hidden="true"></i>
          <Button onClick={hid} className="float-right" variant="light" style={{height:'33px',background:'none',fontWeight:'bold'}}>
            Close
          </Button>
        </div>
      </div>
    </div>
  );
}
