import React, { useState } from "react";
import { Modal, Card } from "react-bootstrap";
import '../Collaborator.css';

export default function CollaboratorModal(props) {
    const [show, setShow] = useState(false);
    const [emailId, setEmailId] = useState(localStorage.getItem('emailId'));
    const [email, setEmail] = useState("");
   
    const handleEmailChange = (e) =>{
        setEmail(e.target.value);
    }
  return (
    <Modal show={props.show} onHide={props.onHide} centered>
      <div className="colab-wrapper">
        <div className="colab-header">
          <div className="colab-header-item">Collaborators</div>
          <div className="colab-content">
            {props.collaboratorList.map(email => 
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
                    <div style={{ color: "#5f6368" }}>{email}</div>
                  </div>
                </div>
              </div>
              <div>
                <button
                  onClick={() => props.removeCollaborator(email)}
                >
                  <i class="fa fa-times" aria-hidden="true"></i>
                </button>
              </div>
            </div>)}
            <div className="colab-input-email">
                <div style={{ display: "flex"}}> 
                  <div className="colab-owner">
                    <div className="colab-owner-content" style={{opacity:.5}}>
                      <i className="fa fa-user-plus" aria-hidden="true" style={{fontSize:'22px',padding:'6.8px'}}></i>
                    </div>
                  </div>
                  <div style={{ margin: "0 13px",width:'100%'}}>
                    <div style={{ color: "#5f6368" }}>
                        <input 
                            className="colab-input" 
                            type="text" 
                            placeholder="Person or email to share with" 
                            maxLength="320" 
                            value={email}
                            onChange={handleEmailChange}
                            />
                    </div>
                    <button
                      onClick={() => props.addCollaborator(email)}
                    >
                      <i className="fa fa-check" aria-hidden="true"></i>
                    </button>
                  </div>
                </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </Modal>
  );
}
