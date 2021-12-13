import React, { Component } from "react";
import axios from 'axios'
export default class App extends Component {
  getStudentData = () => {
    console.log(11111);
    axios.get().then(res=> {

    })
  };
  render() {
    return (
      <div>
        <button onClick={this.getStudentData}>点我获取学生数据</button>
      </div>
    );
  }
}
