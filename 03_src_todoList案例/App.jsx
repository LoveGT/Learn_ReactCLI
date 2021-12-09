import React, { Component } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import List from "./components/List";

import "./App.css";

export default class App extends Component {
  state = {
    todoList: [
      { id: 1, name: "吃饭", done: true },
      { id: 2, name: "睡觉", done: false },
      { id: 3, name: "打豆豆", done: true },
      { id: 4, name: "逛街", done: true },
    ],
  };
  
  addTodo = (todoObj) => {
    // 获取原todoList
    const { todoList } = this.state;
    //追加一个todo
    const newTodoList = [todoObj, ...todoList];
    // 更新状态
    this.setState({
      todoList: newTodoList,
    });
  };
  updateTodo = (id, done) => {
    // 获取原todoList
    const { todoList } = this.state;
    // p匹配数据
    const newTodoList = todoList.map((todoObj) => {
      if (todoObj.id === id) {
        return { ...todoObj, done: done };
      } else {
        return todoObj;
      }
    });
    this.setState({
      todoList: newTodoList,
    });
  };
  deleteTodo = (id) => {
    // 获取原todoList
    const { todoList } = this.state;
    // 匹配数据
    const newTodoList = todoList.filter((todoObj) => {
      return todoObj.id !== id;
    });
    this.setState({
      todoList: newTodoList,
    });
  };
  checkAllTodo = (done) => {
    const { todoList } = this.state;
    const newTodoList = todoList.map((todoObj) => {
      return { ...todoObj, done: done };
    });
    this.setState({
      todoList: newTodoList,
    });
  };
  clearAllDone = (done) => {
    console.log(done);
    const { todoList } = this.state;
    const newTodoList = todoList.filter((todoObj) => {
      return todoObj.done === false;
    });
    this.setState({
      todoList: newTodoList,
    });
  };

  render() {
    const { todoList } = this.state;
    return (
      <div>
        <div className="todo-container">
          <div className="todo-wrap">
            <Header addTodo={this.addTodo} />
            <List
              todos={todoList}
              updateTodo={this.updateTodo}
              deleteTodo={this.deleteTodo}
            />
            <Footer
              todos={todoList}
              checkAllTodo={this.checkAllTodo}
              clearAllDone={this.clearAllDone}
            />
          </div>
        </div>
      </div>
    );
  }
}
