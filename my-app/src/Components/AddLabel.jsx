import React from 'react';
import NoteController from '../Controller/NoteController';

export default function AddLabel(props) {
    const handleDelete = () => {
        NoteController.deleteNote(props.noteId).then(response => {
            console.log(response.data.message);
        })
        .catch(error => {
            console.log(error.data.message);
        })
    }
    return (
        <div>
            <div className="all-label" style={{position:'absolute',zIndex:5003,width:'100%',backgroundColor:'#fff',boxShadow: '#adb5bda1 0px 0px 5px 0.5px',borderRadius:'8px'}}>
                <div className="add-label-content" style={{padding:'18px',lineHeight:'32px'}}>
                    <div 
                        className="label-content" 
                        onClick={handleDelete}
                    >Delete Note</div>
                    <div className="label-content">Add label</div>
                    <div className="label-content">Add Drawing</div>
                </div>
            </div>
        </div>
    )
}
