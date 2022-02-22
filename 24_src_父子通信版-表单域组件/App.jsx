import React, { Component } from "react";
import Field from "./components/Field";

// 受控組件模式
export default class App extends Component {
  state = {
    userName: localStorage.getItem("username"),
    password: localStorage.getItem("password"),
  };
  handleLogin = () => {
    console.log(this.state.userName);
    console.log(this.state.password);
  };
  handleCancel = () => {
    this.setState({ userName: "", password: "" });
  };
  render() {
    return (
      <div>
        <h3>登录页面</h3>
        <Field
          label="用户名"
          type="text"
          value={this.state.userName}
          handleChange={(value) => {
            this.setState({ userName: value });
          }}
        ></Field>
        <Field
          label="密码"
          type="password"
          value={this.state.password}
          handleChange={(value) => {
            this.setState({ password: value });
          }}
        ></Field>

        <button onClick={this.handleLogin}>登录</button>
        <button onClick={this.handleCancel}>取消</button>
      </div>
    );
  }
}
