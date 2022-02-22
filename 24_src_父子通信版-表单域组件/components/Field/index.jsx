import React, { Component } from 'react'

export default class Field extends Component {
  render() {
    const {label, type, value, handleChange } = this.props
    return (
      <div className='field'>
        <label htmlFor="">{label}</label>
        <input type={type} value={value} onChange={(evt) => handleChange(evt.target.value)}/>
      </div>
    )
  }
}
