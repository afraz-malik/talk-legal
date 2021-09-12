import React from 'react'
import './App.css'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import BusinessOpPage from './pages/BusinessOpPage/BusinessOpPage'
import LoginPage from './pages/LoginPage/LoginPage'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/business" component={BusinessOpPage} />
        <Route path="/login" component={LoginPage} />
      </Switch>
    </Router>
  )
}

export default App
