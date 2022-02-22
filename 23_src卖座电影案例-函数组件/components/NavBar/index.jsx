import React, { Component } from 'react'
import "./index.css"
export default class NavBar extends Component {

  turnToMine =(index) => {
    return  () => {
      this.props.handleToMine(index)
    }
  }

  render() {
    return (
      <div className='nav-bar'>
        <button>back</button>
        <span>卖座电影</span>
        <button onClick={this.turnToMine(3)}>我的</button>
      </div>
    )
  }
}
