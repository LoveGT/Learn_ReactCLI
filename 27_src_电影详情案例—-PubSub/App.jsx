import React, { Component } from "react";
import axios from "axios";

import FilmItem from "./components/FilmItem";
import FilmDetail from "./components/FilmDetail";

import "./App.css";
// var bus = {
//   list: [],
//   // 订阅
//   subscribe(callback) {
//     this.list.push(callback);
//   },
//   // 发布
//   publish() {
//     this.list.forEach((callback) => callback && callback());
//   },
// };

// // 订阅者
// bus.subscribe(() => {
//   console.log(1111);
// });
// // 订阅者
// bus.subscribe(() => {
//   console.log(22222);
// });

// //发布者
// bus.publish();

export default class App extends Component {
  state = {
    FilmList: []
  }
  componentDidMount() {
    axios.get("http://localhost:3000/filmList.json").then((res) => {
      this.setState({
        FilmList: res.data.data.films,
      });
    });
  }
  
  render() {
    return (
      <div>
        {
          this.state.FilmList.map((item) => {
            return <FilmItem {...item} key={item.filmId}></FilmItem>;
          })
        }

        <FilmDetail></FilmDetail>
      </div>
    );
  }
}
