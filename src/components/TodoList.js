import React from "react";
import TodoItem from "./TodoItem";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        {this.props.todoItems.map(({ id, title, editing }) => {
          return (
            <TodoItem
              key={id}
              id={id}
              title={title}
              editing={editing}
              handleDelete={this.props.handleDelete}
              handleEdit={this.props.handleEdit}
              handleUpdate={this.props.handleUpdate}
            />
          );
        })}
      </ul>
    );
  }
}

export default TodoList;
