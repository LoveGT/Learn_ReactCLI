import React, { Component } from "react";
import axios from "axios";

import FilmItem from "./components/FilmItem";
import FilmDetail from "./components/FilmDetail";

import "./App.css"

export default class App extends Component {
  state = {
    FilmList: [],
  };
  componentDidMount() {
    axios.get("http://localhost:3000/filmList.json").then((res) => {
      console.log(res.data.data.films);
      this.setState({
        FilmList: res.data.data.films,
        filmDetails: ""
      });
    });
  }
  handleClick = (value) => {
    return () => {
      this.setState({
        filmDetails: value
      })

    }
  }
  render() {
    return (
      <div>
        {this.state.FilmList.map((item) => {
          return <FilmItem {...item } key={item.filmId} handleClick={this.handleClick}></FilmItem>;
        })}
        <FilmDetail filmDetails={this.state.filmDetails}></FilmDetail>
      </div>
    );
  }
}
