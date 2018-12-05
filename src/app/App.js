import React, { Component } from 'react';
import './App.scss';
import RouterMap from '../router'
import {
  Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {
  componentDidMount(){
    localStorage.removeItem("phone")
  }
  render() {
    return (
      <div className="App">
        <RouterMap/>
        {/* <div class="bomNav">
          <Router>
            <Link to='/'><span>HOME</span></Link>
            <Link to='/add'><span>+</span></Link>
            <Link to='/main'><span>我的</span></Link>
          </Router> 
        </div> */}
      </div>
    );
  }
}

export default App;
