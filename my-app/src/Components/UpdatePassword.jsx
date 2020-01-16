import React, { Component } from "react";
export default class UpdatePassword extends Component {
  render() {
    const divStyle = {
      width: "50%",
      borderColor: "whitesmoke",
      fontSize: "18px",
      fontWeight: "bold",
      color: "black"
    };
    return (
      <div className="container">
        <div className="col-md-4 offset-md-4">
          <div className="form-group">
            <div className="form-row ">
              <span>
                <img src="../keep.png" className="logo"></img>
              </span>
              <h1 className="header">fundoo</h1>
            </div>
          </div>
          <hr />
          <div className="form-group">
            <div className="form-row ">
              <h3 className="">Reset your password</h3>
              <small>Please enter your password below to reset.</small>
            </div>
          </div>

          <div className="input-icons">
          <i className="fa fa-key" aria-hidden="true"></i>
            <input
              type="password"
              name="pswd"
              className="input-field col-md-10"
              placeholder="Password"
              required
            />
          </div>
          <div className="input-icons">
          <i className="fa fa-key" aria-hidden="true"></i>
            <input
              type="password"
              name="cnfpswd"
              className="input-field col-md-10"
              placeholder="Confirm Password"
              required
            />
          </div>
          <footer>
            <button className="btn btn-outline-primary" style={divStyle}>
              Submit
            </button>
          </footer>
        </div>
      </div>
    );
  }
}
