import React, { Component } from "react";
import { Card, Button, FormControl, Row, Col, OverlayTrigger, Popover } from "react-bootstrap";
import NoteController from '../Controller/NoteController';
class Reminder extends Component {
    constructor(props){
        super(props);
        this.state={
        noteId:'',
            date:"",
            time:"",
            error:false,
            dateErr:null,
            timeErr:null
        }
    }
    onChangeDate = (event) =>{
        this.setState({date:event.target.value,dateErr:null})
    }
    onChangeTime = (event) =>{
        this.setState({time:event.target.value,timeErr:null})
    }
    onSubmit = () =>{
        if(this.state.date===''){
            this.setState({error:true,dateErr:'Please select valid Date...'})
        }
        else if(this.state.time===''){
            this.setState({error:true,timeErr:'Please add the time...'})
        }
        else{
            var reminder = {
                datetime: this.state.date+" "+this.state.time,
                noteId: this.state.noteId
            }
            this.setState({date:"",time:""})
           NoteController.setReminder(reminder).then(response => {
               console.log("RESPONSE :"+response.data);
           })
           .catch(error =>{
                console.log("ERROR"+error.data);
           })
        }   
    }
  render() {
    const popover = (
        <Popover id="popover-basic">
          <Popover.Title as="h4">Pick date & time</Popover.Title>
          <Popover.Content>
           <FormControl type="date" name="date" placeholder="Select date" onChange={this.onChangeDate} required/>
            <small className="danger-error">{this.state.dateErr}</small>
           <FormControl type="time" name="time" placeholder="Set time" onChange={this.onChangeTime} required/>
           <small className="danger-error">{this.state.timeErr}</small>
           <Button variant="light" className="float-right" onClick={this.onSubmit}>Save</Button>
          </Popover.Content>
        </Popover>
      );
    return (
      <Card className="float-center" style={{ width: "18rem" }}>
        <Card.Header>Reminder:</Card.Header>
        <Card.Body>
          <Row>
            <Col>Later today</Col>
            <Col className="text-right">8:00 PM</Col>
          </Row>
          <br />
          <Row>
            <Col>Tomorrow</Col>
            <Col className="text-right">8:00 AM</Col>
          </Row>
          <br />
          <Row>
            <Col>Next Week</Col>
            <Col className="text-right">Mon,8:00 AM</Col>
          </Row>
          <br />
          <Row>
            <Col>
              <OverlayTrigger
                trigger="click"
                placement="bottom"
                overlay={popover}
              >
                <Button variant="light">
                <i className="fa fa-clock-o" aria-hidden="true"></i>
                <span style={{ paddingLeft: "10px" }}>
                Pick date & time
              </span>
                </Button>
                
              </OverlayTrigger>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    );
  }
}
export default Reminder;
