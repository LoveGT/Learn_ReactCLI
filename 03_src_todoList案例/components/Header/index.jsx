import React, { Component } from "react";
import PropTypes from 'prop-types'

import { nanoid } from "nanoid";

import "./index.css";

export default class Header extends Component {
  // 对props进行验证
  static propTypes = {
    addTodo: PropTypes.func.isRequired
  }
  
  handleKeyUp = (e) => {
    if (e.keyCode !== 13) return;
    // 准备好一个todo对象
    // 对象非空的判断
    if(e.target.value.trim() === '') {
      alert('输入不能为空')
      return
    }
    const todoObj = { id: nanoid(), name: e.target.value, done: false };
    this.props.addTodo(todoObj);
    e.target.value = ""
  };

  render() {
    return (
      <div className="todo-header">
        <input
          onKeyUp={this.handleKeyUp}
          type="text"
          placeholder="请输入搜索信息，按回车确认"
        />
      </div>
    );
  }
}
