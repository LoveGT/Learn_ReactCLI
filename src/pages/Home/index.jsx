import React, { Component } from 'react'
import {Routes,Route} from 'react-router-dom'

import MyNavLink from '../../components/MyNavLink'
import Message from './Message'
import News from './News'
export default class Home extends Component {
  render() {
    return (
      <div>
        <h3>我是Home的内容</h3>
        <ul style={{display: 'flex',justifyContent:'space-around'}}>
          <li><MyNavLink to="/home/message">Message</MyNavLink></li>
          <li><MyNavLink to="/home/news">News</MyNavLink></li>
        </ul>
       
        <Routes>
          <Route path="/message" element={<Message />}></Route>
          <Route path="/news" element={<News />}></Route>
        </Routes>
      </div>
    )
  }
}
