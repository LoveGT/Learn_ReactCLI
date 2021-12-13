import React, { Component } from "react";

import axios from "axios";
export default class search extends Component {
  handleSearch = () => {
    const searchVal = this.input1.value
    axios
      .get(`https://api.github.com/search/users?q=${searchVal}`)
      .then((res) => {
        console.log(res.data)
        this.props.saveUsers(res.data.items)
      });
  };
  render() {
    return (
      <div>
        <input ref={(c) => (this.input1 = c)} placeholder="请输入用户名称" />
        <button onClick={this.handleSearch}>点我搜索</button>
      </div>
    );
  }
}
