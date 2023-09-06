import React from "react";

class ClearFiltersBtn extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <button disabled={this.props.disabled}>Clear filters</button>;
  }
}
export default ClearFiltersBtn;
