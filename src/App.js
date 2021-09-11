import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact to="/" component={HomePage} />
      </Switch>
    </Router>
  )
}

export default App
