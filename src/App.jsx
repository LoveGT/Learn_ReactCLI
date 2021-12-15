import React, { Component } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";

import About from "./components/About";
import Home from "./components/Home";

export default class App extends Component {
  render() {
    return (
      <div className="page-box">
        <div className="page-header">
          <h2>React Router Demo</h2>
        </div>
        <div className="content">
          <div className="list-group">
            <NavLink to="/about">ABOUT</NavLink>
            <NavLink to="/home">HOME</NavLink>
          </div>
          <div className="content-text">
            <Routes>
              <Route path="/about" element={<About />} />
              <Route path="/home" element={<Home />} />
            </Routes>
          </div>
        </div>
      </div>
    );
  }
}
