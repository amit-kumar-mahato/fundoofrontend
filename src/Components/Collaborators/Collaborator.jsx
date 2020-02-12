import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import { Card } from "react-bootstrap";
// import "../Collaborators/Collaborator.css";

class Collaborator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: localStorage.getItem("email")
    };
  }
  render() {
    console.log("Collaborator :" + this.props.noteId);
    return (
      <div className="colab-wrapper">
        <div className="colab-header">
          <div className="colab-header-item">Collaborators</div>
          <div className="colab-content">
            <div className="colab-content-header">
              <div style={{ fontSize: "13px" }}>
                <div style={{ display: "flex", padding: "5px" }}>
                  <div className="colab-owner">
                    <div className="colab-owner-content">
                      <img
                        src="../keep.png"
                        alt="logo"
                        width="40px"
                        height="40px"
                      />
                    </div>
                  </div>
                  <div style={{ margin: "0 13px" }}>
                    <div>
                      <span style={{ fontWeight: 700 }}>Amit Kumar</span>
                      <span style={{ fontStyle: "italic", marginLeft: "5px" }}>
                        (Owner)
                      </span>
                    </div>
                    <div style={{ color: "#5f6368" }}>{this.state.email}</div>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
            <div className="colab-input-email">
            {/* <div style={{ fontSize: "13px" }}>*/}
                <div style={{ display: "flex"}}> 
                  <div className="colab-owner">
                    <div className="colab-owner-content" style={{opacity:.5}}>
                      <i className="fa fa-user-plus" aria-hidden="true" style={{fontSize:'22px',padding:'6.8px'}}></i>
                    </div>
                  </div>
                  <div style={{ margin: "0 13px" }}>
                    <div style={{ color: "#5f6368" }}>
                        <input className="colab-input" type="text" placeholder="Person or email to share with" maxLength="320" />
                    </div>
                  </div>
                </div>
             {/*  </div> */}
            </div>
          </div>
        </div>
        <div></div>
      </div>
    );
  }
}
export default Collaborator;
