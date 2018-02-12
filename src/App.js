import React, { Component } from 'react';
import Routes from './routes'
import { withRouter } from 'react-router'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Routes/ >
      </div>
    )
  }
}

export default withRouter(App)
