import React, { Component } from 'react'
import "./index.css"
export default class FilmDetail extends Component {
  render() {
    const { filmDetails } = this.props
    return (
      <div className='film-detail'>{filmDetails}</div>
    )
  }
}
