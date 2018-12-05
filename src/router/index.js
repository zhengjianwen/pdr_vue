import React, {Component} from 'react'

import {Router, Route, Switch, Link} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

import Home from '../container/Home'
import Main from '../container/Main'
import Add from '../container/Add'
import Login from '../container/Login'
import Info from '../container/Info'
import SetInfo from '../container/SetInfo'
import Note from '../container/Note'

let history = createBrowserHistory()
export default class RouterMap extends Component {
  render() {
    return (
      <Router history={history}>
      <div className="wrap">
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/main' component={Main}/>
            <Route path='/add' component={Add}/>
            <Route path='/login' component={Login}/>
            <Route path='/info' component={Info}/>
            <Route path='/setInfo' component={SetInfo}/>
            <Route path='/note' component={Note}/>

        </Switch>
        </div>  
      </Router>
    )
  }
}