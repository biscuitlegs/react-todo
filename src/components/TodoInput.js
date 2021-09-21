import React from "react";

class TodoInput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <input type="text" onChange={this.props.handleChange} />
        <input type="submit" value="Add Item" />
      </form>
    );
  }
}

export default TodoInput;
