import React, { Component } from "react";
import Header from "./Header";
import Todo from "./Todo";

class App extends Component {
  state = {
    todos: []
  };

  addTodoItem = todoInput => {
    const { todos } = this.state;
    let tempArr = [...todos];
    tempArr.push(todoInput);
    this.setState({ todos: tempArr });
  };

  render() {
    console.log(this.state);
    return (
      <>
        <Header addTodoItem={this.addTodoItem} />

        <Todo todos={this.state.todos} />
      </>
    );
  }
}

export default App;
