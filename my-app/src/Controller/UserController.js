import Axios from "axios";
//const baseURL = "http://localhost:8081";

let headers = {
    'Content-Type': 'application/json'
}
class UserController{

    userRegistration(regDetails){
        return Axios.post("/users/register",regDetails, {
            headers: headers
        });
    }

    authentication(loginDetails){
        return Axios.post("/users/login",loginDetails, {
            headers: headers
        });
    }

    forgotPassword(userEmail){
        console.log("Email Info :"+userEmail.email);
        return Axios.post("/users/forgotpassword?email="+userEmail.email, {
            headers: headers
        });
    }

    updatePassword(pswdInfo,token){
        console.log("pswd--->"+pswdInfo.newPassword+" cnfpswd---->"+pswdInfo.cnfPassword);
        return Axios.put("/users/updatepassword/"+token,pswdInfo, {
            headers: headers
        });
    }
}
export default new  UserController();