import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import BusinessOpPage from './pages/BusinessOpPage/BusinessOpPage'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/business" component={BusinessOpPage} />
      </Switch>
    </Router>
  )
}

export default App
