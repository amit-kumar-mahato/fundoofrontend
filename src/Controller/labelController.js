import Axios from "axios";

let headers= {
    'token':localStorage.getItem('token'),
    'Accept' : 'application/json',
    'Content-Type': 'application/json'
}
export function getUserLabel(){
    return Axios.get('labels',{
        headers:headers
    });
}
export function addUserLabel(labelName){
    console.log(labelName);
    return Axios.post('labels/create?labelName='+labelName,null,{
        headers:headers
    })
}
export function deleteLabel(labelId){
    console.log(labelId);
    return Axios.delete('labels/delete?labelId='+labelId,{
        headers:headers
    })
}
