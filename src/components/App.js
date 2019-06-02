import React, { Component } from "react";
import Header from "./Header";
import Todo from "./Todo";

class App extends Component {
  state = {
    todo: {}
  };

  addTodoItem = todoInput => {
    this.setState({ todo: todoInput });
    console.log("addTodoItem[App.js] Push", this.state.todo);
  };

  render() {
    console.log("this.state[App.js]", this.state);
    return (
      <>
        <Header addTodoItem={this.addTodoItem} />

        <Todo todo={this.state.todo} />
      </>
    );
  }
}

export default App;
