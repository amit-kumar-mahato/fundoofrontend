import React, { Component } from "react";
export default class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      error: false,
      message: null
    };
  }
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
              <h3 className="">Forgot Password ?</h3>
              <small>Enter your email to reset your password.</small>
            </div>
          </div>

          <div className="input-icons">
            <i className="fa fa-envelope" aria-hidden="true"></i>
            <input
              type="email"
              name="email"
              className="input-field col-md-10"
              placeholder="E-mail"
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
