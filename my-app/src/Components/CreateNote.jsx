import React, { Component } from "react";
import "../App.css";
import { Card } from "react-bootstrap";
import Icon from "./Icon";

class CreateNote extends Component {
  render() {
    const {
      title,
      description,
      onChangeTitle,
      onChangeDescription,
      onClose,
      handleClickOpen,
      openNote
    } = this.props;
    return (
      <div>
        <div style={{ margin: "0px 22%" }}>
          {!openNote ? (
            <Card style={{ borderRadius: "8px" }}>
              <input
                spellCheck={true}
                placeholder="Take a note...."
                onClick={handleClickOpen}
                style={{
                  height: "48px",
                  borderRadius: "8px",
                  outline: "none",
                  border: "none",
                  fontSize: "18px",
                  paddingLeft: "8px"
                }}
              />
            </Card>
          ) : (
            <Card>
              <input
                name="title"
                className=""
                style={{
                  height: "48px",
                  borderRadius: "8px",
                  outline: "none",
                  border: "none",
                  fontSize: "20px",
                  paddingLeft: "8px"
                }}
                placeholder="Tittle...."
                value={title}
                onChange={onChangeTitle}
              />
              <input
                name="description"
                className=""
                style={{
                  height: "48px",
                  borderRadius: "8px",
                  outline: "none",
                  border: "none",
                  fontSize: "18px",
                  paddingLeft: "8px"
                }}
                multiline
                placeholder="Take a note...."
                value={description}
                onChange={onChangeDescription}
              />

              <div>
                <div className="button-icon">
                  <Icon />
                  <button
                    className="float-right"
                    variant="light"
                    onClick={onClose}
                    style={{
                      background: "none",
                      fontWeight: "bold",
                      outline: "none",
                      border: "none"
                    }}
                  >
                    Close
                  </button>
                </div>
              </div>
            </Card>
          )}
        </div>
      </div>
    );
  }
}
export default CreateNote;
