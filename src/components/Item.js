import React, { Component } from "react";

export default class Item extends Component {
  toggleTodoItem = () => {
    this.props.toggleTodoItem(this.props.id);
  };

  deleteTodoItem = () => {
    this.props.deleteTodoItem(this.props.id);
  };

  render() {
    const { id, text } = this.props;
    return (
      <>
        <li key={id}>
          {text}
          <div className="buttons">
            <button className="remove">
              <i className="material-icons" onClick={this.deleteTodoItem}>
                delete
              </i>
            </button>
            <button className="complete" onClick={this.toggleTodoItem}>
              <i class="material-icons">check</i>
            </button>
          </div>
        </li>
      </>
    );
  }
}
