import React, { Component } from 'react'
import "./index.css"

import PubSub from 'pubsub-js'

export default class FilmDetail extends Component {
  state = {
    details: ""
  }
  componentDidMount() {
    PubSub.subscribe("details",(_,{details}) => {
      this.setState({
        details
      })
    })
  }
  render() {
    return (
      <div className='film-detail'> {this.state.details?this.state.details:"暂无内容"}</div>
    )
  }
}
