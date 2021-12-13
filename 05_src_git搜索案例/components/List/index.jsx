import React, { Component } from "react";

import "./index.css";
export default class List extends Component {
  render() {
    const users = this.props.users;
    console.log(users, "user");
    return (
      <div className="list-box">
        {users.map((user) => {
          return (
            <div key={user.id} className="img-box">
              <img src={user.avatar_url} />
              <div className="name">{user.login? user.login :'暂无'}</div>
            </div>
          );
        })}
      </div>
    );
  }
}
