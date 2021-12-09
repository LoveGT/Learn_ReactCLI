import React, { Component } from "react";
import "./index.css";

export default class Footer extends Component {
  handleCheckAll = (e) => {
    this.props.checkAllTodo(e.target.checked);
  };
  handleClearAllDone = () => {
    this.props.clearAllDone(true)
  }

  render() {
    const { todos } = this.props;
    // 已完成任务的个数
    const doneCount = todos.reduce((pre, todo) => {
      return pre + (todo.done ? 1 : 0);
    }, 0);

    return (
      <div className="todo-footer">
        <label htmlFor="">
          <input
            type="checkbox"
            onChange={this.handleCheckAll}
            checked={
              doneCount === todos.length && todos.length !== 0 ? true : false
            }
          />
        </label>
        <span>
          今天任务已完成{doneCount}/全部{todos.length}
        </span>
        <button onClick={this.handleClearAllDone}>清除已完成的任务</button>
      </div>
    );
  }
}
