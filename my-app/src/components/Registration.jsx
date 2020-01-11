import React, { Component } from "react";

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
      error: false,
      message: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        pswd: "",
        cnfpswd: ""
      }
    };
  }

  onChangeFName = event => {
    var fname = event.target.value;
    this.setState({
      firstName: fname
    });
  };

  onChangeLName = event => {
    var lname = event.target.value;
    this.setState({
      lastName: lname
    });
  };

  onChangeEmail = event => {
    var mail = event.target.value;
    this.setState({
      email: mail
    });
  };
  onChangePhone = event => {
    var ph = event.target.value;
    this.setState({
      phone: ph
    });
  };
  onChangePswd = event => {
    var ps = event.target.value;
    this.setState({
      pswd: ps
    });
  };
  onChangeCnfPswd = event => {
    var cps = event.target.value;
    this.setState({
      cnfpswd: cps
    });
  };

  onSubmit = () => {
    if (this.state.firstName === "") {
      this.setState({
        Error: true,
        message: { firstName: "First Name is required" }
      });
    } else if (this.state.lastName === "") {
      this.setState({
        Error: true,
        message: { lastName: "Last Name is required" }
      });
    } else if (this.state.email === "") {
      this.setState({
        Error: true,
        message: { email: "Email is required" }
      });
    } else if (
      !/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(this.state.email)
    ) {
      this.setState({
        Error: true,
        message: { email: "Please enter valid email" }
      });
    } else if (this.state.phone === "") {
      this.setState({
        Error: true,
        message: { phone: "Mobile Number is required" }
      });
    } else if (!/^[6789]\d{9}$/.test(this.state.phone)) {
      this.setState({
        Error: true,
        message: { phone: "Please enter valid Mobile Number" }
      });
    } else if (this.state.pswd === "") {
      this.setState({
        Error: true,
        message: { pswd: "Password is required" }
      });
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(
        this.state.pswd
      )
    ) {
      this.setState({
        Error: true,
        message: {
          pswd:
            "At least 1 lowercase 1 uppercase 1 number and 1 special character and length should be minimum 6"
        }
      });
    } else if (this.state.cnfpswd === "") {
      this.setState({
        Error: true,
        message: { cnfpswd: "Confirm Password is required" }
      });
    } else if (this.state.pswd !== this.state.cnfpswd) {
      this.setState({
        Error: true,
        message: { cnfpswd: "Password and Confirm password should be same" }
      });
    }
  };
  render() {
    return (
      <div className="card" style={{ background: "transparent" }}>
        <div className="container-pp">
          <div className="fundoo">
              <h3>Please fill all the details</h3>
          </div>

          <div className="col-sm-8 form-group offset-sm-2">
            <div className="input-icons">
              <i className="fa fa-user icon" aria-hidden="true"></i>
              <input
                type="text"
                className="form-control input-field"
                name="firstName"
                placeholder="First name"
                onChange={this.onChangeFName}
                value={this.state.firstName}
              />
              <span className="text-danger font-weight-normal">
                {this.state.message.firstName}
              </span>
            </div>
          </div>
          <div className="col-sm-8 form-group offset-sm-2">
            <input
              type="text"
              className="form-control input-fields"
              name="lastName"
              placeholder="Last name"
              onChange={this.onChangeLName}
            />
            <span className="text-danger font-weight-normal">
              {this.state.message.lastName}
            </span>
          </div>
          <div className="col-sm-8 form-group offset-sm-2">
            <input
              type="text"
              className="form-control input-fields"
              name="email"
              placeholder="Email"
              onChange={this.onChangeEmail}
            />
            <span className="text-danger font-weight-normal">
              {this.state.message.email}
            </span>
          </div>
          <div className="col-sm-8 form-group offset-sm-2">
            <input
              type="number"
              className="form-control input-fields"
              name="phone"
              placeholder="Contact Number"
              onChange={this.onChangePhone}
            />
            <span className="text-danger font-weight-normal">
              {this.state.message.phone}
            </span>
          </div>
          <div className="col-sm-8 form-group offset-sm-2">
            <input
              type="text"
              className="form-control input-fields"
              name="pswd"
              placeholder="Password"
              onChange={this.onChangePswd}
            />
            <span className="text-danger font-weight-normal">
              {this.state.message.pswd}
            </span>
          </div>
          <div className="col-sm-8 form-group offset-sm-2">
            <input
              type="text"
              className="form-control input-fields"
              name="cnfpswd"
              placeholder="Confirm Password"
              onChange={this.onChangeCnfPswd}
            />
            <span className="text-danger font-weight-normal">
              {this.state.message.cnfpswd}
            </span>
          </div>
          <div className="text-center">
            <button
              className="btn btn-success regbtn"
              onClick={this.onSubmit}
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default Registration;
