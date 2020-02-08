import Axios from "axios";

export function addCollaborator(){

}
export function getCollaboratorList(noteId){
    return Axios.get('collaborator/collaboratorlist/'+noteId)
}