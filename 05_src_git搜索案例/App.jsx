import React, { Component } from "react";
import Search from "./components/Search";
import List from "./components/List";

export default class App extends Component {
  state = {
    users: [],
  };

  saveUsers = (users) => {
    this.setState({ users });
  };
  render() {
    return (
      <div className="bg-green-500">
        <Search saveUsers={this.saveUsers}/>
        <List users={this.state.users}/>
      </div>
    );
  }
}
