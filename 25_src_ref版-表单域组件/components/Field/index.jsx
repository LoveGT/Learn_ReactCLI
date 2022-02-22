import React, { Component } from 'react'

export default class Field extends Component {

  state = {
    value:""
  }

  clearValueFn = () => {
    this.setState({
      value: ""
    })
  }
  setValueFn = (value) => {
    this.setState({
      value: value
    })
  }

  render() {
    const {label, type } = this.props
    return (
      <div className='field'>
        <label htmlFor="">{label}</label>
        <input type={type} value={this.state.value}  onChange={(evt) => this.setState({value: evt.target.value})}/>
      </div>
    )
  }
}
