import React from "react";
import makeid from "../custom-fn/idGenerator";

// Create random Id if that does not have any id
const fallbackId = makeid(5);

class InputFilterCheckbox extends React.Component {
  constructor(props) {
    super(props);
    this.elemId = this.props.elementId || fallbackId;
    this.tagName = this.props.tagName || "No tag name";
  }

  render() {
    return (
      // Weird html warning, this is to pick up pagebuilder check/radio btns
      <div className="pms-tag-ctr">
        <input
          className="nbf_customcheckbox"
          id={this.elementId}
          type="checkbox"
        />
        <label id={"label-" + this.elementId} for={this.elementId}>
          <span className="checkbox"></span>
          <span className="pms-tag-name--checkbox">{this.tagName}</span>
        </label>
      </div>
    );
  }
}
export default InputFilterCheckbox;
