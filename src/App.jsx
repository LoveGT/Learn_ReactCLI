import React, { Component } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import List from "./components/List";

export default class App extends Component {
  state = {
    todoList: [
      { id: 1, name: "吃饭", done: true },
      { id: 2, name: "睡觉", done: false },
      { id: 3, name: "打豆豆", done: true },
      { id: 4, name: "逛街", done: true },
    ],
  };
  render() {
    const { todoList } = this.state;
    return (
      <div>
        <div className="todo-container">
          <div className="todo-wrap">
            <Header a={1} todos={todoList} />
            <List b={2} todos={todoList} />
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}
