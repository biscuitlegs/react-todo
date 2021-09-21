import React from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import uniqid from "uniqid";

class TodoManager extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      todoItems: [
        {
          id: uniqid(),
          title: "Walk dog",
        },
        { id: uniqid(), title: "Mow lawn" },
      ],
      newTodoItem: { id: uniqid(), title: "" },
    };
  }

  handleChange(e) {
    this.setState({
      newTodoItem: { id: uniqid(), title: e.target.value },
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const { todoItems, newTodoItem } = this.state;
    this.setState({
      todoItems: [...todoItems, newTodoItem],
      newTodoItem: { id: uniqid(), title: "" },
    });
  }

  render() {
    return (
      <div>
        <TodoInput onChange={this.handleChange} onSubmit={this.onSubmit} />
        <TodoList todoItems={this.state.todoItems} />
      </div>
    );
  }
}

export default TodoManager;
