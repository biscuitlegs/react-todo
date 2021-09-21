import React from "react";

class TodoInput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <input
          className="form-control text-center"
          type="text"
          placeholder="New item..."
          onChange={this.props.handleChange}
        />
        <input
          className="btn btn-success w-100 mb-4"
          type="submit"
          value="Add Item"
        />
      </form>
    );
  }
}

export default TodoInput;
