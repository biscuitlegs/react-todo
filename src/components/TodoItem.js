import React from "react";

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { id, title, handleDelete } = this.props;
    return (
      <div>
        <h3>{title}</h3>
        <button>Edit</button>
        <button onClick={() => handleDelete(id)}>Delete</button>
      </div>
    );
  }
}

export default TodoItem;
