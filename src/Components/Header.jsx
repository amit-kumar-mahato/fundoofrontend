import React, { Component } from "react";
import "../App.css";
class Header extends Component {
  render() {
    return (
      <div className="container-fluid nav-bar">
        <div className="row header" style={{ display: "flex", alignItems: "center" }}>
          <div
            className="col-sm-3"
            style={{ display: "flex", alignItems: "center"}}
          >
            <div className="col-sm-2" style={{ color: "gray" }}>
              <i
                className="fa fa-bars"
                aria-hidden="true"
                style={{ fontSize: "20px" }}
              ></i>
            </div>
            <div className="col-sm-2">
              <img src="../keep.png" alt="logo" width="40px" height="40px" />
            </div>
            <div className="col-sm-3">
              <span style={{ fontSize: "29px", color: "gray" }}>
                fundoo
              </span>
            </div>
          </div>
        
          <div className="col-sm-6 has-search">
          <i className="fa fa-search form-control-feedback" title="Search"></i>
          <input type="text" className="form-control" placeholder="Search..." />
          <button type="button" className="close" aria-label="Close" />
          </div>

          <div
            className="col-sm-3"
            style={{ display: "flex", alignItems: "center"}}
          >
            <div className="col-sm-3"></div>
            <div className="col-sm-3" style={{ color: "gray" }}>
            <i
                className="fa fa-refresh"
                title="Refresh"
                aria-hidden="true"
              ></i>
            </div>
            <div className="col-sm-3" style={{ color: "gray" }}>
            <i
                className="fa fa-th-list"
                title="List View"
                aria-hidden="true"
              ></i>
            </div>
            <div className="col-sm-3">
              <img src="../keep.png" alt="logo" width="40px" height="40px" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
