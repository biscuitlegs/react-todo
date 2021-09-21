import React from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import uniqid from "uniqid";

const todoItems = [
  {
    id: uniqid(),
    title: "Walk dog",
  },
  { id: uniqid(), title: "Mow lawn" },
];

class TodoManager extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <TodoInput />
        <TodoList todoItems={todoItems} />
      </div>
    );
  }
}

export default TodoManager;
