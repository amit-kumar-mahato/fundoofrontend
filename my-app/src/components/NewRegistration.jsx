import React, { Component } from "react";

class NewRegistration extends Component{
    render(){
        return(
            <div className="card">
                <div className="container">
                    <div className="fundoo"><b>Fundoo</b></div>
                    <div className="input">
                        <input type="password" placeholder="password" className="password"/>
                    </div>
                    <div class="input">
                        <input type="text" placeholder="First Name" className="password"/>
                    </div>
                    <div class="input">
                        <input type="password" placeholder="Last Name" className="password"/>
                    </div>
                    <div class="input">
                        <input type="password" placeholder="Email" className="password"/>
                    </div>
                    <div class="input">
                        <input type="password" placeholder="Phone" className="password"/>
                    </div>
                </div>
            </div>
        )
    }
}
export default NewRegistration;