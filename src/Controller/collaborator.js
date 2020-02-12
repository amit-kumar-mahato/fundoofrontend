import Axios from "axios";

export function updateCollaborator(updateColab){
    console.log(updateColab);
    return Axios.put('collaborator',updateColab);
}
export function getCollaboratorList(noteId){
    console.log(noteId)
    return Axios.get('collaborator/collaboratorlist?noteId='+noteId);
}