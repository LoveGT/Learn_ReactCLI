import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div className="todo-footer">
        <label htmlFor="">
          <input type="checkbox" />
        </label>
        <span>今天任务已完成0/全部4</span>
        <button>清除已完成的任务</button>
      </div>
    );
  }
}
