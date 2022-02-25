import React, { Component } from "react";
import { GlobalContext } from "../../context/globalContext";

import "./index.css";
export default class FilmItem extends Component {
  handleClick2 = (details,value) => {
    value.changeDetail(details)
  };

  render() {
    const { name, poster, actors, grade, region, time, details } = this.props;
    return (
      <GlobalContext.Consumer>
        {(value) => {
          return (
            <div
              className="filmItem"
              onClick={() => this.handleClick2(details,value)}
            >
              <img src={poster} alt={poster} />
              <div className="film-info">
                <h4>{name}</h4>
                <div className="grade item">观众评分：{grade}</div>
                <div className="actors item">
                  主演：
                  {actors.map((actor, index) => (
                    <span key={index}>{actor.name}</span>
                  ))}
                </div>
                <div className="region item">
                  {region} | {time}分钟
                </div>
              </div>
            </div>
          );
        }}
      </GlobalContext.Consumer>
    );
  }
}
