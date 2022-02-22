import React, { Component } from "react";
import "./App.css"

import Cinema from "./components/cinema";
import Film from "./components/Film";
import Mine from "./components/Mine";
import TabBar from "./components/TabBar";
import NavBar from "./components/NavBar";

export default class App extends Component {
  state ={
    currentIndex: 1,
    list: [
      {
        id: 1,
        text: "电影",
      },
      {
        id: 2,
        text: "影院",
      },
      {
        id: 3,
        text: "我的",
      },
    ],
  }
  // TabBar切换
  handleChange =(index) => {
      this.setState({
        currentIndex: index
      })
  }

  // TabBar切换
  handleToMine = (index) => {
    this.setState({
      currentIndex: index
    })
  }
  render() {
    return (
      <div>
        <NavBar handleToMine={this.handleToMine}></NavBar>
        {this.state.currentIndex===1 ? <Film></Film> : this.state.currentIndex === 2 ? <Cinema></Cinema> : <Mine></Mine>}
        <TabBar currentIndex={this.state.currentIndex} list={this.state.list} handleChange={this.handleChange}></TabBar>
      </div>
    );
  }
}
