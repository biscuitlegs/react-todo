import React from "react";

class DisplayingItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { id, title, handleEdit, handleDelete } = this.props;
    return (
      <div className="border text-center p-4">
        <h3>{title}</h3>
        <button className="btn btn-primary mx-1" onClick={() => handleEdit(id)}>
          Edit
        </button>
        <button
          className="btn btn-danger mx-1"
          onClick={() => handleDelete(id)}
        >
          Delete
        </button>
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
      <form
        className="border text-center p-3"
        onSubmit={(e) => {
          e.preventDefault();
          handleUpdate(id, inputValue);
        }}
      >
        <input
          className="form-control text-center my-3"
          type="text"
          defaultValue={title}
          onChange={this.handleChange}
        />
        <input
          className="btn btn-success mx-1"
          type="submit"
          value="Confirm Edit"
        />
        <button
          className="btn btn-danger mx-1"
          onClick={() => handleDelete(id)}
        >
          Delete
        </button>
      </form>
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
