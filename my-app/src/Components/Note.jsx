import React, { Component } from "react";
import { Card } from "react-bootstrap";

class Note extends Component{
    render(){
        const {title,description} = this.props;
        return(
            <Card className="my-2 mr-2" style={{width:'15rem'}}>
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>
                {description}
              </Card.Text>
              <Card.Link to="#">
                  <i className="fa fa-bell" title="Remind me" aria-hidden="true"></i>
              </Card.Link>
              <Card.Link nk to="#">
                  <i className="fa fa-user-plus" title="Collaborator" aria-hidden="true"></i>
              </Card.Link>
              <Card.Link nk to="#">
                  <i className="fa fa-print" title="Change Color" aria-hidden="true"></i>
              </Card.Link>
              <Card.Link nk to="#">
                  <i className="fa fa-file-image-o" title="Add image" aria-hidden="true"></i>
              </Card.Link>
              <Card.Link nk to="#">
                  <i className="fa fa-archive" title="Archive" aria-hidden="true"></i>
              </Card.Link>
              <Card.Link nk to="#">
                  <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
              </Card.Link>
            </Card.Body>
          </Card> 
        );
    }
}
export default Note;