import React, { Component } from "react";
import PubSub from 'pubsub-js'
export default class List extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    this.token = PubSub.subscribe('atguigu', (_,stateObj) => {
      console.log(stateObj,'sub')
      this.setState({
        users: stateObj.users
      })
    })
  }

  componentWillUnmount() {
    PubSub.unsubscribe(this.token)
  }

  render() {
    const { users } = this.state;
    return (
      <div>
        {users.map((user) => {
          return (
            <div key={user.id} className="card" style={{border:'1px solid red'}}>
              <a href={user.html_url} target="_blank" rel="noreferer">
                <img src={user.avatar_url} alt="" />
              </a>
              <p className="card-text">{user.login}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
