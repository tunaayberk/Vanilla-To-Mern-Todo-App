import React, { Component } from "react";
import Item from "./Item";

export default class Todo extends Component {
  toggleTodoItem = itemId => {
    const newTodos = (this.props.todos.find(
      item => item.id === itemId
    ).status = !this.props.todos.find(item => item.id === itemId).status);
    this.setState({ todos: newTodos });
  };

  deleteTodoItem = itemId => {
    const delTodos = this.props.todos.filter(item => item.id !== itemId);
    console.log("sad", delTodos);
    this.setState({ todos: delTodos });
    console.log("state after", this.state);
  };

  render() {
    const { todos } = this.props;
    return (
      <div className="container">
        <ul className="todo" id="todo">
          {todos.map(todo => {
            const { id, text, status } = todo;
            if (status) {
              return (
                <>
                  <Item
                    id={id}
                    text={text}
                    status={status}
                    toggleTodoItem={this.toggleTodoItem}
                    deleteTodoItem={this.deleteTodoItem}
                  />
                </>
              );
            }
          })}
        </ul>
        <ul className="todo" id="completed">
          {todos.map(todo => {
            const { id, text, status } = todo;
            if (!status) {
              return (
                <>
                  <Item
                    id={id}
                    text={text}
                    status={status}
                    toggleTodoItem={this.toggleTodoItem}
                    deleteTodoItem={this.deleteTodoItem}
                  />
                </>
              );
            }
          })}
        </ul>
      </div>
    );
  }
}
