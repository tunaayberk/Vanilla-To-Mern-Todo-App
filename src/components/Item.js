import React, { Component } from "react";

export default class Item extends Component {
  toggleTodoItem = () => {
    this.props.toggleTodoItem(this.props.id);
  };

  render() {
    const { id, text } = this.props;
    return (
      <>
        <li key={id}>
          {text}
          <div className="buttons">
            <button className="remove" />
            <button className="complete" onClick={this.toggleTodoItem} />
          </div>
        </li>
      </>
    );
  }
}
