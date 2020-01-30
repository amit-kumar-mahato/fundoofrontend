import React, { Component } from "react";
import { Card, Button, FormControl, Row, Col, OverlayTrigger, Popover, Dropdown, Modal } from "react-bootstrap";
import NoteController from '../Controller/NoteController';
import '../Reminder.css';
class Reminder extends Component {
    constructor(props){
        super(props);
        this.state={
          date:"",
          time:"",
          error:false,
          dateErr:null,
          timeErr:null,
          isOpened:false,
        }
        this.toggleBox = this.toggleBox.bind(this);
        
    }
    toggleBox() {
      this.setState(oldState => ({ isOpened: !oldState.isOpened }));
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
                noteId: this.props.noteId
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
    const {isOpened} = this.state;

    return (
      <div className="reminder-card">
      <Card className="float-center" style={{position:'absolute',zIndex:5003,width:'100%',backgroundColor:'#fff',boxShadow: '#adb5bda1 0px 0px 5px 0.5px'}}>
        <Card.Body>
          <div className="Reminder-Heading" style={{fontSize:'18px',padding:'10px'}}>
            Reminder:
          </div>
          <div style={{border:0,padding:'10px 15px'}}>
            <div style={{display:'flex',cursor:'pointer'}}>
              <div style={{flex:'1 1 auto'}}>Later today</div>
              <div>8:00PM</div>
            </div>
          </div>
          <div style={{border:0,padding:'10px 15px'}}>
            <div style={{display:'flex',cursor:'pointer'}}>
              <div style={{flex:'1 1 auto'}}>Tommorow</div>
              <div>8:00AM</div>
            </div>
          </div>
          <div style={{border:0,padding:'10px 15px'}}>
            <div style={{display:'flex',cursor:'pointer'}}>
              <div style={{flex:'1 1 auto'}}>Next Week</div>
              <div>Mon,8:00AM</div>
            </div>
          </div>
          <div style={{border:0,padding:'10px 15px'}}>
            <div style={{display:'flex',cursor:'pointer'}}>
              <i className="fa fa-clock-o" aria-hidden="true" onClick={this.toggleBox}>
                <span className="px-3">Pick date & time</span></i>
            </div>
          </div>
        </Card.Body>
      </Card>
      {isOpened===true ? 
            <div style={{position:'absolute',zIndex:5003,width:'100%',backgroundColor:'#fff',boxShadow: '#adb5bda1 0px 0px 5px 0.5px'}}>
              <div className="px-2" style={{padding:'15px'}}>
                <i className="fa fa-arrow-left" aria-hidden="true">
                  <span className="px-4">Pick Date & Time</span>
                </i>
              </div>
              <div style={{background:'#dadce0',height:'1px'}}></div>
              <div style={{padding:'0 15px 15px',width:'250px'}}>
                <div style={{marginTop:'17px'}}>
                  <FormControl type="date" name="date" onChange={this.onChangeDate} required
                  style={{backgroundColor:'transparent',border:'none',height:'25px',outline:'none',padding:0}}/>
                </div>
                <div style={{background:'#dadce0',height:'1px'}}></div>
                <small style={{color:'red'}}>{this.state.dateErr}</small>
                <div style={{marginTop:'15px'}}>
                  <FormControl type="time" name="time" onChange={this.onChangeTime} required
                  style={{backgroundColor:'transparent',border:'none',height:'25px',outline:'none',padding:0}}/>
                </div>
                <div style={{background:'#dadce0',height:'1px'}}></div>
                <small style={{color:'red'}}>{this.state.timeErr}</small>
              </div>
              <Button variant="light" className="float-right" onClick={this.onSubmit}>Save</Button>
            </div> :
            <div />  
          }
      </div>
    );
  }
}
export default Reminder;
