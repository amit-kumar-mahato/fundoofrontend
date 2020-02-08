import React, { Component } from "react";
import ReactDOM from "react-dom";

import "../incorp.css";

class IncorporationForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      shareholders: [{ name: "" }],
      show: false,
      close:false
    };
  }


  handleShareholderNameChange = idx => evt => {
    const newShareholders = this.state.shareholders.map((shareholder, sidx) => {
      if (idx !== sidx) return shareholder;
      return { ...shareholder, name: evt.target.value };
    });

    this.setState({ shareholders: newShareholders });
    this.setState({show : true});
  };

  handleSubmit = evt => {
    const { name, shareholders } = this.state;
    alert(`Incorporated: ${name} with ${shareholders.length} shareholders`);
  };

  handleAddShareholder = () => {
    this.setState({
      shareholders: this.state.shareholders.concat([{ name: "" }])
    });
    this.setState({close: true});
  };

  handleRemoveShareholder = idx => () => {
    this.setState({
      shareholders: this.state.shareholders.filter((s, sidx) => idx !== sidx)
    });
    this.setState({show:false});
    this.setState({close:true});
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        
        <h4>Shareholders</h4>

        {this.state.shareholders.map((shareholder, idx) => (
          <div className="shareholder">
            <input
              type="text"
              placeholder={`Shareholder #${idx + 1} name`}
              value={shareholder.name}
              onChange={this.handleShareholderNameChange(idx)}
            />
            {this.state.close ?
            <button
              type="button"
              onClick={this.handleRemoveShareholder(idx)}
              className="small"
            >
             <i class="fa fa-times" aria-hidden="true"></i>
            </button>
            : ""}
          </div>
        ))}
        {this.state.show ? 
            <button
                type="button"
                onClick={this.handleAddShareholder}
                className="small"
                >
                <i class="fa fa-check" aria-hidden="true"></i>
            </button>
            : ""}
      </form>
    );
  }
}
export default IncorporationForm;
