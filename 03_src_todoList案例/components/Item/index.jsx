import React, { Component } from "react";
import "./index.css";
export default class Item extends Component {
  state = {
    mouse: false,
  };

  //高阶函数的写法
  handleMouse = (flag) => {
    return () => {
      this.setState({
        mouse: flag,
      });
    };
  };
  // 不用高阶函数的写法
  handleCheck = (id) => {
    return (e) => {
      this.props.updateTodo(id, e.target.checked);
    };
  };
  // 不用高阶函数的写法
  handleDelete = (id) => {
    if (window.confirm("确定删除吗")) {
      this.props.deleteTodo(id);
    }
  };
  
  render() {
    const { id, name, done } = this.props;
    const { mouse } = this.state;
    return (
      <li
        onMouseLeave={this.handleMouse(false)}
        onMouseEnter={this.handleMouse(true)}
        style={{ backgroundColor: mouse ? "springgreen" : "" }}
      >
        <label htmlFor="">
          <input
            type="checkbox"
            checked={done}
            onChange={this.handleCheck(id)}
          />
          <span>{name}</span>
          <button
            onClick={() => this.handleDelete(id)}
            style={{ display: mouse ? "inline-block" : "none" }}
          >
            删除
          </button>
        </label>
      </li>
    );
  }
}
