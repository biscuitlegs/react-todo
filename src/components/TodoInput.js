import React from "react";

class TodoInput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form>
        <h2>Add Item</h2>
        <input type="text" />
      </form>
    );
  }
}

export default TodoInput;
