import React from "react";

class DisplayingItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { id, title, handleEdit, handleDelete } = this.props;
    return (
      <div>
        <h3>{title}</h3>
        <button onClick={() => handleEdit(id)}>Edit</button>
        <button onClick={() => handleDelete(id)}>Delete</button>
      </div>
    );
  }
}

class EditingItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      inputValue: this.props.title,
    };
  }

  handleChange(e) {
    this.setState({
      inputValue: e.target.value,
    });
  }

  render() {
    const { id, title, handleUpdate, handleDelete } = this.props;
    const { inputValue } = this.state;
    return (
      <div>
        <input type="text" defaultValue={title} onChange={this.handleChange} />
        <button onClick={() => handleUpdate(id, inputValue)}>
          Confirm Edit
        </button>
        <button onClick={() => handleDelete(id)}>Delete</button>
      </div>
    );
  }
}

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { id, title, editing, handleEdit, handleDelete, handleUpdate } =
      this.props;
    if (editing) {
      return (
        <EditingItem
          id={id}
          title={title}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
        />
      );
    } else {
      return (
        <DisplayingItem
          id={id}
          title={title}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      );
    }
  }
}

export default TodoItem;
