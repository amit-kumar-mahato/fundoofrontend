import React, { Component } from "react";
import "../sidedrawer.css";
import AddLabel from "./addLabel";
import MaterialIcon from "react-google-material-icons";
class SideDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      labels: props.labels
    };
  }
  handleEditLabel = () => {
    this.setState({ editLabel: !this.state.editLabel });
  };
  handleClose = () => this.setState({ show: false });
  handleShow = () => this.setState({ show: !this.state.show });
  render() {
    return (
      <nav className="side-drawer">
        <ul>
          <li className="active">
            <div className="side-drawer-header">
              <i
                className="fa fa-sticky-note"
                aria-hidden="true"
                style={{ color: "gray", fontSize: "18px" }}
              ></i>
              <div
                className="side-drawer-content"
                onClick={this.props.onClickActive}
              >
                Note
              </div>
            </div>
          </li>
          <li>
            <div className="side-drawer-header">
              <i
                className="fa fa-bell-o"
                aria-hidden="true"
                style={{ color: "gray", fontSize: "18px" }}
              ></i>
              <div
                className="side-drawer-content"
                onClick={this.props.onClickReminder}
              >
                Reminders
              </div>
            </div>
          </li>
          <hr style={{ backgroundColor: "#e9ecef" }} />
          <p style={{ color: "gray" }}>LABELS</p>
          {this.props.labels.map(lbl => {
            return (
              <li>
                <div className="side-drawer-header">
                  <MaterialIcon icon={"label"} size={20}/>
                  <div
                    style={{marginLeft:'25px'}}
                    onClick={this.handleShow}
                  >
                    {lbl}
                  </div>
                </div>
              </li>
            );
          })}
          <li>
            <div className="side-drawer-header">
              <i
                className="fa fa-pencil-square-o"
                aria-hidden="true"
                style={{ color: "gray", fontSize: "18px" }}
              ></i>
              <div className="side-drawer-content" onClick={this.handleShow}>
                Edit labels
              </div>
            </div>
          </li>
          <hr style={{ backgroundColor: "#e9ecef" }} />
          <li>
            <div className="side-drawer-header">
              <i
                className="fa fa-archive"
                aria-hidden="true"
                style={{ color: "gray", fontSize: "18px" }}
              ></i>
              <div
                className="side-drawer-content"
                onClick={this.props.onClickArchive}
              >
                Archive
              </div>
            </div>
          </li>
          <li>
            <div className="side-drawer-header">
              <i
                className="fa fa-trash-o"
                aria-hidden="true"
                style={{ color: "gray", fontSize: "18px" }}
              ></i>
              <div
                className="side-drawer-content"
                onClick={this.props.onClickTrash}
              >
                Trash
              </div>
            </div>
          </li>
        </ul>
        {this.state.show ? (
          <AddLabel
            hide={this.handleShow}
            show={this.state.show}
            labelList={this.props.labels}
          />
        ) : (
          <div />
        )}
      </nav>
    );
  }
}
export default SideDrawer;
