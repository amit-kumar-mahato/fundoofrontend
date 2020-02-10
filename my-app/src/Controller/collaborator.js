import Axios from "axios";

export function addCollaborator(){

}
export function getCollaboratorList(noteId){
    console.log(noteId)
    return Axios.get('collaborator/collaboratorlist?noteId='+noteId);
}