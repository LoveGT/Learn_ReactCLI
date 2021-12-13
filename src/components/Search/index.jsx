import React, { Component } from "react";
import Pubsub from 'pubsub-js'
import axios from "axios";
export default class Search extends Component {
  search = () => {
    const searchVal = this.input2.value
    axios
      .get(`https://api.github.com/search/users?q=${searchVal}`)
      .then((res) => {
        console.log(res.data);
        Pubsub.publish('atguigu',{users: res.data.items})
        // this.props.saveUsers(res.data.items);
      }); 
  };
  render() {
    return (
      <div>
        <input ref={(c) => (this.input2 = c)} type="text" />
        <button onClick={this.search}>点我搜索</button>
      </div>
    );
  }
}
