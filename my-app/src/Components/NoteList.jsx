import React, {Component} from 'react';
import { Card } from 'react-bootstrap';
import Note from '../Components/Note';
class NoteList extends Component{

    render(){
    const {titles,onClickReminderIcon} = this.props;
        return(
            <div className="row note-list" style={{marginLeft:'0px',paddingLeft:'8px'}}>
               {
                   titles.map(note => {
                       return<Note 
                       noteId={note.noteId} title={note.title} description={note.description}
                       onClickReminderIcon
                       />;
                   })
               }
            </div>
        );
    }
}
export default NoteList;