import React from "react";
import TodoItem from "./TodoItem";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        {this.props.todoItems.map(({ id, title }) => {
          return <TodoItem title={title} key={id} />;
        })}
      </ul>
    );
  }
}

export default TodoList;
