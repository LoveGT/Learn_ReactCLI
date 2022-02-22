import React, { Component } from "react";
import Field from "./components/Field";

// ref方案
export default class App extends Component {
  userNameRef = React.createRef()
  passwordRef = React.createRef()

  // 登录逻辑
  handleLogin = () => {
    console.log(this.userNameRef.current.state.value, 'ref')
    console.log(this.passwordRef.current.state.value, 'passwordRef')
  };
  // 重置逻辑
  handleCancel = () => {
    this.userNameRef.current.clearValueFn()
    this.passwordRef.current.clearValueFn()
  };
  render() {
    return (
      <div>
        <h3>登录页面</h3>
        <Field
          ref={this.userNameRef}
          label="用户名"
          type="text"
        ></Field>
        <Field ref={this.passwordRef} label="密码" type="password"></Field>

        <button onClick={this.handleLogin}>登录</button>
        <button onClick={this.handleCancel}>取消</button>
      </div>
    );
  }
}
