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
        })
    }

    allNotes(){
        console.log("Inside allNotes method...");
        return Axios.get('notes',{
            headers:headers
        })
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
}
export default new  NoteController();
