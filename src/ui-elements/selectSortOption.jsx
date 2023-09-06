import React from "react";

class sortOption extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    <option
      data-sort-type={this.props.sortType}
      data-sort-direction={this.props.sortDirection}
    >
      {this.props.label}
    </option>;
  }
}
export default sortOption;
