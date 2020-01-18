import React, { Component } from "react";
import "../registration.css";
import UserController from "../Controller/UserController";
import {withRouter} from 'react-router-dom';

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      pswd: "",
      cnfpswd: "",
      message: null,
      errors: []
    };
  }

  showValidationError(elm, msg) {
    this.setState(prevState => ({
      errors: [...prevState.errors, { elm, msg }]
    }));
  }

  clearValidationError(elm) {
    this.setState(prevState => {
      let newArr = [];
      for (let err of prevState.errors) {
        if (elm != err.elm) {
          newArr.push(err);
        }
      }
      return { errors: newArr };
    });
  }

  onChangeFirstName(event) {
    this.setState({ firstName: event.target.value });
    this.clearValidationError("firstName");
  }
  onChangeLastName(event) {
    this.setState({ lastName: event.target.value });
    this.clearValidationError("lastName");
  }
  onChangeEmail(event) {
    this.setState({ email: event.target.value });
    this.clearValidationError("email");
  }
  onChangePhone(event) {
    this.setState({ phone: event.target.value });
    this.clearValidationError("phone");
  }
  onChangePassword(event) {
    this.setState({ pswd: event.target.value });
    this.clearValidationError("pswd");
  }
  onChangeCnfPassword(event) {
    this.setState({ cnfpswd: event.target.value });
    this.clearValidationError("cnfpswd");
  }

  submitRegister(event) {
    console.log(this.state);
    if (this.state.firstName === "") {
      this.showValidationError("firstName", "First Name cannot be empty!");
    }
    if (this.state.lastName === "") {
      this.showValidationError("lastName", "Last Name cannot be empty!");
    }
    if (this.state.email === "") {
      this.showValidationError("email", "Email cannot be empty!");
    } else if (
      !/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(this.state.email)
    ) {
      this.showValidationError("email", "Please enter valid email!");
    }
    if (this.state.phone === "") {
      this.showValidationError("phone", "Contact Number cannot be empty!");
    } else if (!/^[6789]\d{9}$/.test(this.state.phone)) {
      this.showValidationError("phone", "Please enter valid number!");
    }
    if (this.state.pswd === "") {
      this.showValidationError("pswd", "Password cannot be empty!");
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(
        this.state.pswd
      )
    ) {
      this.showValidationError(
        "pswd",
        "At least 1 lowercase 1 uppercase 1 number and 1 special character and length should be minimum 6"
      );
    }
    if (this.state.cnfpswd === "") {
      this.showValidationError("cnfpswd", "Password cannot be empty!");
    } else if (this.state.pswd !== this.state.cnfpswd) {
      this.showValidationError(
        "cnfpswd",
        "Password and Confirm Password should be same"
      );
    } else {
      console.log(this.state);
      var regDetails = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        phone: this.state.phone,
        pswd: this.state.pswd
      };

      UserController.userRegistration(regDetails).then(response => {
        console.log(response);
        this.setState({messsage: 'Registration successfull, Please verify your Email before login'});
        this.props.history.push('/');
      })
      .catch(error => {
          console.log(error);
      })
    }
  }
  render() {
    let fnameErr = null,
      lnameErr = null,
      emailErr = null,
      phoneErr = null,
      pswdErr = null,
      cnfpswdErr = null;
    for (let err of this.state.errors) {
      if (err.elm === "firstName") {
        fnameErr = err.msg;
      }
      if (err.elm === "lastName") {
        lnameErr = err.msg;
      }
      if (err.elm === "email") {
        emailErr = err.msg;
      }
      if (err.elm === "phone") {
        phoneErr = err.msg;
      }
      if (err.elm === "pswd") {
        pswdErr = err.msg;
      }
      if (err.elm === "cnfpswd") {
        cnfpswdErr = err.msg;
      }
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-5">
            <div className="row">
              <div className="col-md-6">
                <h3 className="text-left">Registration Form</h3>
              </div>
              <div className="col-md-6">
                <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
              </div>
            </div>
            <hr />
            <div className="row">
              {/* <label className="label col-md-2 control-label">First Name</label> */}
              <div className="col-md-10 offset-md-1">
                <input
                  type="text"
                  className="input-field"
                  placeholder="First Name"
                  name="firtName"
                  onChange={this.onChangeFirstName.bind(this)}
                />
              </div>
              <small className="danger-error">{fnameErr ? fnameErr : ""}</small>
            </div>
            <div className="row">
              {/* <label className="label col-md-2 control-label">Last Name</label> */}
              <div className="col-md-10 offset-md-1">
                <input
                  type="text"
                  className="input-field"
                  placeholder="Last Name"
                  name="lastName"
                  onChange={this.onChangeLastName.bind(this)}
                />
              </div>
              <small className="danger-error">{lnameErr ? lnameErr : ""}</small>
            </div>
            <div className="row">
              {/* <label className="label col-md-2 control-label">E-mail</label> */}
              <div className="col-md-10 offset-md-1">
                <input
                  type="email"
                  className="input-field"
                  placeholder="E-mail"
                  name="email"
                  onChange={this.onChangeEmail.bind(this)}
                />
              </div>
              <small className="danger-error">{emailErr ? emailErr : ""}</small>
            </div>
            <div className="row">
              {/* <label className="label col-md-2 control-label">Mobile Number</label> */}
              <div className="col-md-10 offset-md-1">
                <input
                  type="number"
                  className="input-field"
                  placeholder="Mobile Number"
                  name="phone"
                  onChange={this.onChangePhone.bind(this)}
                />
              </div>
              <small className="danger-error">{phoneErr ? phoneErr : ""}</small>
            </div>
            <div className="row">
              {/* <label className="label col-md-2 control-label">Password</label> */}
              <div className="col-md-10 offset-md-1">
                <input
                  type="password"
                  className="input-field"
                  placeholder="Password"
                  name="pswd"
                  onChange={this.onChangePassword.bind(this)}
                />
              </div>
              <small className="danger-error">{pswdErr ? pswdErr : ""}</small>
            </div>
            <div className="row">
              {/* <label className="label col-md-2 control-label">Confirm Password</label> */}
              <div className="col-md-10 offset-md-1">
                <input
                  type="password"
                  className="input-field"
                  placeholder="Confirm Password"
                  name="cnfpswd"
                  onChange={this.onChangeCnfPassword.bind(this)}
                />
              </div>
              <small className="danger-error">
                {cnfpswdErr ? cnfpswdErr : ""}
              </small>
            </div>
            <button
              className="btn btn-info"
              type="button"
              onClick={this.submitRegister.bind(this)}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(Registration);
