import React, {Component} from 'react';
import { Card } from 'react-bootstrap';
import Note from '../Components/Note';
import Reminder from '../Components/Reminder';
class NoteList extends Component{       
    render(){
    const {titles,onClickReminderIcon,addReminder,pinnedNotes} = this.props;
    console.log("Inside NoteList :",titles);
    //console.log(onClickReminderIcon);
    
        return(
            <div className="row note-list">
               {
                   titles.map(note => {
                       return<Note 
                       noteId={note.noteId} 
                       title={note.title} 
                       description={note.description} 
                       pin={note.pin}
                    //    onClickReminderIcon={onClickReminderIcon}
                    //    addReminder={addReminder}
                       pinnedNotes={pinnedNotes}
                       />
                   })
               }
            </div>
        );

    }
}
export default NoteList;