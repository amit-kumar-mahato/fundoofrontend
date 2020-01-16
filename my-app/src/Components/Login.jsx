import React, { Component } from "react";
import "../Login.css";
import { Link } from "react-router-dom";

export default class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      email:'',
      password:'',
      error:false,
      message:null
    };
  }

  render() {
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

          <div className="input-icons">
            <i className="fa fa-key" aria-hidden="true"></i>
            <input
              type="password"
              name="password"
              className="input-field col-md-10"
              placeholder="Password"
              required
            />
          </div>
          <div className="buttons">
            <button
              type="submit"
              value="submit"
              className="btn btn-outline-primary text-center"
              id="submit"
            >
              Login
            </button>
            <button
              type="reset"
              value="reset"
              className="btn btn-outline-info text-center"
              id="reset"
            >
              Reset
            </button>
          </div>

          <footer>
            <h5>
              New User?
              <Link to="/registration" className="text-warning">
                SignUp
              </Link>
            </h5>
            <Link to="/forgotPassword" className="text-warning">
                Forgot Password ?
            </Link>
          </footer>
        </div>
      </div>
    );
  }
}
// export default Login;
