import React, { Component } from "react";
import { removeSVG, completeSVG } from "./icons";
import Item from "./Item";

export default class Todo extends Component {
  toggleTodoItem = itemId => {
    const newTodos = (this.props.todos.find(
      item => item.id === itemId
    ).status = !this.props.todos.find(item => item.id === itemId).status);
    this.setState({ todos: newTodos });
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
