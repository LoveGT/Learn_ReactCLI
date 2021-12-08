import React, { Component } from "react";

export default class Item extends Component {
  render() {
    // console.log(this.props, "item");
    const { id,name,done } = this.props;
    console.log(name, 'name')
    return (
      <li>
        <label htmlFor="">
          <input type="checkbox" defaultChecked={done}/>
          <span>{name}</span>
          <button>删除</button>
        </label>
      </li>
    );
  }
}
