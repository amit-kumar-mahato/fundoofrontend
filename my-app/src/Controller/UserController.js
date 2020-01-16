import Axios from "axios";
const baseURL = "http://localhost:8081";

let headers = {
    'Content-Type': 'application/json'
}
class UserController{

    userRegistration(regDetails){
        return Axios.post(baseURL+"/users/register",regDetails, {
            headers: headers
        });
    }
}
export default new  UserController();