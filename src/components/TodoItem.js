import React from "react";

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    );
  }
}

export default TodoItem;
