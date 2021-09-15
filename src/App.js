import React from 'react'
import './App.css'
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import BusinessOpPage from './pages/BusinessOpPage/BusinessOpPage'
import RegisterPage from './pages/RegisterPage/RegisterPage'
import LoginPage from './pages/LoginPage/LoginPage'
import ResetPasswordPage from './pages/ResetPasswordPage/ResetPasswordPage'
import Questionaires from './pages/Questionaires/Questionaires'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/business" component={BusinessOpPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/changepassword" component={ResetPasswordPage} />
        <Route path="/questions" component={Questionaires} />
      </Switch>
    </Router>
  )
}

export default App

{
  /* <div className="App">
  Pages:
  <ul>
    <li>
      <Link to="/">HomePage </Link>
    </li>
    <li>
      <Link to="/business">BusinessOpPage</Link>
    </li>
    <li>
      <Link to="/login">LoginPage</Link>
    </li>
    <li>
      <Link to="/register">RegisterPage</Link>
    </li>
    <li>
      <Link to="/changepassword">PasswordResetPage1</Link>
    </li>
  </ul>
</div> */
}
