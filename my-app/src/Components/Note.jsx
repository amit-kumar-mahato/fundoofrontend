import React, { Component } from "react";
import { Card } from "react-bootstrap";
import Reminder from '../Components/Reminder';

class Note extends Component{
  constructor(props) {
    super(props);
    this.state = {
      condition: false
    };
    this.handleClick = this.handleClick.bind(this);
}
handleClick(condition) {
  this.setState( {condition} )
}
    render(){
      const { condition } = this.state;
        const {title,description,noteId,onClickReminderIcon} = this.props;
        
       console.log("Inside Note :"+onClickReminderIcon);
        return(
          <div>
          <div style={{zIndex:-1}}>
            <Card className="my-2 mr-2" style={{width:'15rem'}}>
            <Card.Body>
              <Card.Title>{noteId}</Card.Title>
              <Card.Text>
                {title}
              </Card.Text>
              <Card.Text>
                {description}
              </Card.Text>
              <div className="d-flex" style={{cursor:'pointer'}}>
                  <div className="p-2">
                    <i className="fa fa-bell" title="Remind me" aria-hidden="true" onClick={() => this.handleClick(true)}>
                    </i>
                  </div>
                  <div className="p-2">
                  <i className="fa fa-user-plus" title="Collaborator" aria-hidden="true"></i>
                  </div>
                  <div className="p-2">
                  <i className="fa fa-print" title="Change Color" aria-hidden="true"></i>
                  </div>
                  <div className="p-2">
                  <i className="fa fa-file-image-o" title="Add image" aria-hidden="true"></i>
                  </div>
                  <div className="p-2">
                  <i className="fa fa-archive" title="Archive" aria-hidden="true"></i>
                  </div>
                  <div className="p-2">
                  <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                  </div>
              </div>
            </Card.Body>
            <div>{condition === true ? <Reminder noteId={noteId} /> : <div />}</div>
          </Card> 
          </div>
        </div>
        );
    }
}
export default Note;