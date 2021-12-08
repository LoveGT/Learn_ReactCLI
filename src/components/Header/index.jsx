import React, { Component } from "react";

export default class Header extends Component {
  handleKeyUp = (e) => {
    console.log(e.target.value, "value");
    if (e.keyCode != 13) return;
  };
  render() {
    console.log(this.props.a);
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
