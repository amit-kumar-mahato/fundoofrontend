import Axios from "axios";
let headers= {
    'token':localStorage.getItem('token'),
    'Accept' : 'application/json',
    'Content-Type': 'application/json'
}
class NoteController{
    createNote(noteDetails){
        console.log("Inside NoteController :"+noteDetails.title+", "+noteDetails.description);
        return Axios.post('notes/create',noteDetails,{
            headers:headers
        });
    }
    updateNote(noteInfo){
        console.log('updated data :'+noteInfo.noteId+" ,"+noteInfo.title+" ,"+noteInfo.description);
        return Axios.put('notes/update?noteId='+noteInfo.noteId,noteInfo,{
            headers:headers
        });
    }

    deleteNote(noteId){
        console.log("NOTE ID :"+noteId);
        return Axios.delete('notes/delete/'+noteId,{
            headers:headers
        });
    }
    allNotes(){
        // console.log("Inside allNotes method...");
        return Axios.get('notes',{
            headers:headers
        });
    }
   
    pinNote(noteId){
        console.log("NOTE ID :"+noteId);
        return Axios.put('notes/pin?noteId='+noteId,null,{
            headers:headers
        });
    }

    archiveNote(noteId){
        console.log("NOTE ID :"+noteId);
        return Axios.put('notes/archive/'+noteId,null, {
            headers:headers
        });
    }
    setReminder(reminder){
        console.log("DATA :"+reminder.datetime);
        return Axios.put('notes/reminder?noteId='+reminder.noteId,reminder,{
            headers:headers
        });
    }

    deleteReminder(noteId){
        return Axios.delete('reminder/delete?noteId='+noteId,{
            headers:headers
        });
    }
}
export default new  NoteController();
