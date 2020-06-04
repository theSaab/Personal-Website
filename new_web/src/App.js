import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
// Components
import NavBar from './components/navbar'
//Pages
import home from './pages/home'
import login from './pages/login'
import signup from './pages/sign_up'


class App extends Component {
  render() {
    return (
      <div className='App'>
        <Router>
          <NavBar></NavBar>
          <Switch>
            <Router path='/' component={home} />
            <Router path='/login' component={login} />
            <Router path='/signup' component={signup} />
          </Switch>
        </Router>
        <h1>hello</h1>
      </div >
    )
  }
}

export default App