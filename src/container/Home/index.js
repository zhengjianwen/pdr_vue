import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import List from "../List";

export default class Home extends Component {
  render() {
    return (<div>
      <List/>
      <div className="bomNav">
          <span><Link to='/'>HOME</Link></span>
          <span><Link to='/add'>+</Link></span>
          <span><Link to='/main'>我的</Link></span>
        </div>
    </div>
    )
  }
}