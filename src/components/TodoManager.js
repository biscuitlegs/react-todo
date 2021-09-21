import React from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import uniqid from "uniqid";

class TodoManager extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.state = {
      todoItems: [
        {
          id: uniqid(),
          title: "Walk dog",
          editing: false,
        },
        { id: uniqid(), title: "Mow lawn", editing: false },
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
    e.target.reset();
  }

  handleDelete(id) {
    const { todoItems } = this.state;
    const newTodoItems = todoItems.filter((item) => item.id !== id);
    this.setState({
      todoItems: newTodoItems,
    });
  }

  handleEdit(id) {
    const { todoItems } = this.state;
    const editingItem = { ...todoItems.find((item) => item.id === id) };
    const newTodoItems = todoItems.filter((item) => item.id !== id);
    editingItem.editing = !editingItem.editing;
    this.setState({
      todoItems: [...newTodoItems, editingItem],
    });
  }

  handleUpdate(id, newTitle) {
    const { todoItems } = this.state;
    const updatingItem = { ...todoItems.find((item) => item.id === id) };
    const newTodoItems = todoItems.filter((item) => item.id !== id);
    updatingItem.editing = !updatingItem.editing;
    updatingItem.title = newTitle;
    this.setState({
      todoItems: [...newTodoItems, updatingItem],
    });
  }

  render() {
    return (
      <div>
        <TodoInput handleChange={this.handleChange} onSubmit={this.onSubmit} />
        <TodoList
          todoItems={this.state.todoItems}
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}
          handleUpdate={this.handleUpdate}
        />
      </div>
    );
  }
}

export default TodoManager;
