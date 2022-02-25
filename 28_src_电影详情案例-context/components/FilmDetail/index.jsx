import React, { Component } from "react";
import { GlobalContext } from "../../context/globalContext";

import "./index.css";

export default class FilmDetail extends Component {
  componentDidMount() {}
  render() {
    return (
      <GlobalContext.Consumer>
        {(value) => {
          return <div className="film-detail">{value.details}</div>;
        }}
      </GlobalContext.Consumer>
    );
  }
}
