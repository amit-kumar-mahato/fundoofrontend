import React, { Component } from "react";
import "../App.css";
class Header extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-sm-2 d-flex flex-row"
            style={{ backgroundColor: "" }}
          >
            <div
              className="col-sm-2 bars"
              style={{ marginTop: "5%", color: "whitesmoke" }}
            >
              <i
                className="fa fa-bars"
                aria-hidden="true"
                style={{ fontSize: "20px" }}
              ></i>
            </div>
            <div className="col-sm-4">
              <img src="../keep.png" alt="logo" width="40px" height="40px" />
            </div>
            <div className="col-sm-6">
              <span style={{ fontSize: "29px", color: "whitesmoke" }}>
                fundoo
              </span>
            </div>
          </div>
          <div
            className="col-sm-6 form-control"
            style={{ background: "transparent", height: "45px" }}
          >
            <i className="fa fa-search" title="Search" aria-hidden="true"></i>
            <input
              type="text"
              name="search"
              className="search-field col-sm-10"
              placeholder="Search..."
            />
            <button type="button" className="close" aria-label="Close">
              <span aria-hidden="true" style={{ fontSize: "33px" }}>
                &times;
              </span>
            </button>
          </div>
          <div className="col-sm-4" style={{ backgroundColor: "" }}>
            <div className="row">
              <div
                className="col-sm-2 text-right refresh"
                style={{ marginTop: "13px" }}
              >
                <i
                  className="fa fa-refresh"
                  title="Refresh"
                  aria-hidden="true"
                ></i>
              </div>
              <div
                className="col-sm-2 text-right list-grid"
                style={{ marginTop: "9px" }}
              >
                <i
                  className="fa fa-th-list"
                  title="List View"
                  aria-hidden="true"
                ></i>
              </div>
              <div className="col-sm-2 text-right profile-pic">
                <img src="../keep.png" alt="logo" width="40px" height="40px" />
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="form-group">
          <div className="row">
          <div className="col-sm-3 sidebar-tour" style={{backgroundColor: "Blue"}}>
              Notes
          </div>
            <div className="col-sm-9 main-content">
                
            </div>
          </div>
        </div>
      </div>

      //   <div className="container-fluid">
      //     <nav className="navbar bg-primary navbar-expand-sm fixed-top">
      //       <ul className="navbar-nav">
      //         <li style={{ marginTop: "2%" }}>
      //           <i
      //             class="fa fa-bars"
      //             aria-hidden="true"
      //             style={{ fontSize: "20px" }}
      //           ></i>
      //         </li>
      //         <li className="logo" style={{ marginLeft: "3%" }}>
      //           <img src="../keep.png" alt="logo" width="40px" height="40px" />
      //         </li>
      //         <li className="fundoo" style={{ marginLeft: "1.5%" }}>
      //           <span style={{ fontSize: "29px", color: "whitesmoke" }}>
      //             fundoo
      //           </span>
      //         </li>
      //         <li
      //           className="form-control"
      //           style={{
      //             background: "transparent",
      //             height: "45px",
      //             marginLeft: "13%"
      //           }}
      //         >
      //           <i className="fa fa-search" title="Search" aria-hidden="true"></i>
      //           <input
      //             type="text"
      //             name="search"
      //             className="search-field col-sm-10"
      //             placeholder="Search..."
      //           />
      //         </li>
      //         <li className="refresh" style={{ marginTop: "13px" }}>
      //           <i class="fa fa-refresh" title="Refresh" aria-hidden="true"></i>
      //         </li>
      //         <li className="list-grid" style={{ marginTop: "9px" }}>
      //           <i class="fa fa-th-list" title="List View" aria-hidden="true"></i>
      //         </li>
      //         <li className="profile-pic">
      //           <img src="../keep.png" alt="logo" width="40px" height="40px" />
      //         </li>
      //       </ul>
      //     </nav>
      //   </div>
    );
  }
}
export default Header;
