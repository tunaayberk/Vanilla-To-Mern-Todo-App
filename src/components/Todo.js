import React, { Component } from "react";
import Item from "./Item";

export default class Todo extends Component {
  state = {
    todos: []
  };

  componentWillReceiveProps() {
    console.log("props[Todo.js]", this.props);
    let stateTodos = this.state.todos;
    stateTodos.push(this.props.todo);
    this.setState({ todos: stateTodos });
  }

  toggleTodoItem = itemId => {
    let { todos } = this.state;
    const toogleTodo = todos.map(todo => {
      if (todo.id == itemId) {
        todo.status = !todo.status;
        return todo;
      } else {
        return todo;
      }
    });

    this.setState({ todos: toogleTodo });
  };

  deleteTodoItem = itemId => {
    const delTodos = this.state.todos.filter(({ id }) => id !== itemId);
    this.setState({ todos: delTodos });
  };

  render() {
    const { todos } = this.state;
    return (
      <div className="container">
        <ul className="todo" id="todo">
          {todos.map(({ id, text, status }) => {
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
          {todos.map(({ id, text, status }) => {
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
