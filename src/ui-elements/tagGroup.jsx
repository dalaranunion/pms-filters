import React from "react";
import makeid from "../custom-fn/idGenerator";
import InputFilterCheckbox from "./inputFilter__checkbox";

// Create random Id if that does not have any id
const fallbackId = makeid(5);

class TagGroup extends React.Component {
  constructor(props) {
    super(props);
    this.elemId = this.props.elementId || fallbackId;
    this.tagGroupId = this.props.tagGroupId || "no-taggroup-id";
    this.tagGroupName = this.props.tagGroupName || "No tag group title";
    this.tags = this.props.tagsNames || ["One", "Two", "Three"];
  }

  render() {
    return (
      // Weird html warning, this is to pick up pagebuilder check/radio btns
      <div data-tag-group-id={this.tagGroupId} className="pms-taggroup-ctr">
        <div className="tag-group-header">{this.tagGroupName}</div>
        {["one", "two", "thre"].forEach((elem, iteration) => {
          <InputFilterCheckbox elementId="" tagName="elem" />;
        })}
      </div>
    );
  }
}
export default TagGroup;
