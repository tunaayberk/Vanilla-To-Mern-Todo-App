import React, { Component } from "react";
import uuid from "uuid/v4";

class Header extends Component {
  state = {
    todoInput: {}
  };

  updateTodoInput = event => {
    const tempObj = {
      id: uuid(),
      text: event.target.value,
      status: true
    };
    this.setState({
      todoInput: tempObj
    });
  };

  handleKeyPress = event => {
    if (event.key === "Enter") {
      this.addTodoItem();
    }
  };

  addTodoItem = () => {
    this.props.addTodoItem(this.state.todoInput);
  };

  render() {
    return (
      <>
        <header>
          <input
            onChange={this.updateTodoInput}
            onKeyPress={this.handleKeyPress}
            placeholder="Enter a task"
            id="item"
          />
          <button id="add" onClick={this.addTodoItem}>
            <i class="material-icons">add</i>
          </button>
        </header>
      </>
    );
  }
}

export default Header;
