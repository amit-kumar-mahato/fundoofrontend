import React, { useState, useRef,useEffect } from "react";
import { Modal, InputGroup, Button, FormControl } from "react-bootstrap";
import MaterialIcon from "react-google-material-icons";
export default function AddLabel(props) {
  const [show, setShow] = useState({ model: false, editIcon: "label" });
  const inRef = useRef(null);
  const [ic, setIc] = useState("add");
  const [labels, setLables] = useState(props.labelList);
  const [error, setError] = useState("");

  useEffect(()=>{
    setLables(props.labelList);
  },[props]);

  const focusInput = () => {
    if (ic === "add") {
      inRef.current.focus();
      inRef.current.classList.remove("border-bottom-0", "outline-none");
      setIc("close");
    } else {
      inRef.current.classList.add("border-bottom-0");
      setIc("add");
    }
  };

  const editLabel = labelName => {
    const newLabelList = labels.map(label => {
      if (label === labelName) {
        return document.getElementById(labelName).value;
      }
      return label;
    });
    setLables(newLabelList);
  };

  const showDelete = id => {
    document.getElementById(id).getElementsByTagName("i")[0].innerText =
      "delete";
  };
  
  const hideDelete = id => {
    document.getElementById(id).getElementsByTagName("i")[0].innerText =
      "label";
  };

  const deleteLabel = id => {
    if (window.confirm("Are you sure? label will be permanently deleted")) {
      const newLabelList = labels.filter(label => {
        return label !== id;
      });
      setLables(newLabelList);
    }
  };
  return (
    <Modal size="sm" show={props.show} onHide={props.hide} centered>
      <InputGroup className="p-2">
        <Button
          className="navBtn"
          size="sm"
          variant={"light"}
          onClick={focusInput}
        >
          <MaterialIcon icon={ic} size={20} />
        </Button>
        <FormControl
          className="border-top-0 border-left-0 border-right-0 border-bottom-0 mx-1"
          ref={inRef}
          placeholder={"Create new label"}
          onFocus={focusInput}
        />
        <Button
        id="lname"
          className="navBtn"
          size="sm"
          variant={"light"}
          onClick={()=>props.setLabels(inRef.current.value)}
        >
          <MaterialIcon icon={"check"} size={20} />
        </Button>
      </InputGroup>
      {labels.map(label => (
        <div
          key={label.labelId}
          onMouseOver={() => showDelete(label + "icon")}
          onMouseLeave={() => hideDelete(label + "icon")}
        >
          <InputGroup className="p-2">
            <Button
              id={label + "icon"}
              className="navBtn"
              size="sm"
              variant={"light"}
              onClick={() => deleteLabel(label)}
            >
              <MaterialIcon icon={"label"} size={20} />
            </Button>
            <FormControl
              id={label}
              className="border-top-0 border-left-0 border-right-0 border-bottom-0 mx-1"
              defaultValue={label.name}
            />
            <Button
              name={label}
              className="navBtn"
              size="sm"
              variant={"light"}
              onClick={() => editLabel(label)}
            >
              <MaterialIcon icon={"edit"} size={20} />
            </Button>
          </InputGroup>
        </div>
      ))}
      <div className="text-right p-2">
        <Button variant={"light"} onClick={props.hide}>
          Done
        </Button>
      </div>
    </Modal>
  );
}
