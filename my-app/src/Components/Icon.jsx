import React from "react";

export default function Icon() {
  return (
    <div className="d-flex icon-div" style={{ cursor: "pointer" }}>
      <div className="icon-div-content">
        <i
          className="fa fa-bell"
          title="Remind me"
          aria-hidden="true"
          //onClick={this.handleClick}
        ></i>
      </div>
      <div className="icon-div-content">
        <i
          className="fa fa-user-plus"
          title="Collaborator"
          aria-hidden="true"
          //onClick={this.handleCollaborator}
        ></i>
      </div>
      <div className="icon-div-content">
        <i className="fa fa-print" title="Change Color" aria-hidden="true"></i>
      </div>
      <div className="icon-div-content">
        <i
          className="fa fa-file-image-o"
          title="Add image"
          aria-hidden="true"
        ></i>
      </div>
      <div className="icon-div-content">
        <i
          className="fa fa-archive"
          title="Archive"
          aria-hidden="true"
          //onClick={this.handleArchive}
        ></i>
      </div>
      <div className="icon-div-content">
        <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
      </div>
    </div>
  );
}
