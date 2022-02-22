import React, { Component } from "react";

import "./index.css";
export default class TabBar extends Component {
  state = {
    
  };

  handleClick = (item) => {
    this.props.handleChange(item.id)
  }

  render() {
    const { currentIndex , list} = this.props;
    return (
      <ul className="tab-bar">
        {list.map((item) => {
          return (
            <li
              key={item.id}
              className={currentIndex === item.id ? "active" : ""}
              onClick= {() => this.handleClick(item)}
            >
              {item.text}
            </li>
          );
        })}
      </ul>
    );
  }
}
