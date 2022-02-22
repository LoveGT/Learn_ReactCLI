import React, { Component } from 'react'
import "./index.css"
export default class FilmDetail extends Component {
  render() {
    const { filmDetails } = this.props
    return (
      <div className='film-detail'>{filmDetails?  filmDetails : "暂无内容"}</div>
    )
  }
}
