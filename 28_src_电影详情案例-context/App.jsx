import React, { Component } from "react";
import axios from "axios";

import FilmItem from "./components/FilmItem";
import FilmDetail from "./components/FilmDetail";
import { GlobalContext } from "./context/globalContext";
import "./App.css";
export default class App extends Component {
  state = {
    FilmList: [],
    details: ""
  };
  componentDidMount() {
    axios.get("http://localhost:3000/filmList.json").then((res) => {
      this.setState({
        FilmList: res.data.data.films,
      });
    });
  }

  render() {
    return (
      <GlobalContext.Provider value={{
        details:this.state.details,
        changeDetail:(details)=> {
          console.log(details, 'app')
          this.setState({
            details
          })
        }
      }}>
        <div>
          {this.state.FilmList.map((item) => {
            return <FilmItem {...item} key={item.filmId}></FilmItem>;
          })}

          <FilmDetail></FilmDetail>
        </div>
      </GlobalContext.Provider>
    );
  }
}
