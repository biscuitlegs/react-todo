import React from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import uniqid from "uniqid";
import Bootstrap from "bootstrap/dist/css/bootstrap.min.css";

class TodoManager extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.sortById = this.sortById.bind(this);
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

  sortById(todoItems) {
    return todoItems.sort((a, b) => (a.id > b.id ? 1 : -1));
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
      todoItems: this.sortById(newTodoItems),
    });
  }

  handleEdit(id) {
    const { todoItems } = this.state;
    const editingItem = { ...todoItems.find((item) => item.id === id) };
    const newTodoItems = todoItems.filter((item) => item.id !== id);
    editingItem.editing = !editingItem.editing;
    this.setState({
      todoItems: this.sortById([...newTodoItems, editingItem]),
    });
  }

  handleUpdate(id, newTitle) {
    const { todoItems } = this.state;
    const updatingItem = { ...todoItems.find((item) => item.id === id) };
    const newTodoItems = todoItems.filter((item) => item.id !== id);
    updatingItem.editing = !updatingItem.editing;
    updatingItem.title = newTitle;
    this.setState({
      todoItems: this.sortById([...newTodoItems, updatingItem]),
    });
  }

  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <h1 className="text-center my-3">Todo List</h1>
          <TodoInput
            handleChange={this.handleChange}
            onSubmit={this.onSubmit}
          />
          <TodoList
            todoItems={this.state.todoItems}
            handleDelete={this.handleDelete}
            handleEdit={this.handleEdit}
            handleUpdate={this.handleUpdate}
          />
        </div>
      </div>
    );
  }
}

export default TodoManager;
