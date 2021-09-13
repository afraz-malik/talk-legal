import React from 'react'
import { Link } from 'react-router-dom'
import NavBarCss from './NavBar.module.scss'
const NavBar = () => {
  const [state, setstate] = React.useState(false)
  const toggle = () => {
    setstate(!state)
  }
  return (
    <div className={NavBarCss.navbar}>
      <div className={NavBarCss.inside_nav}>
        <div className={NavBarCss.left}>
          <Link to="/">
            <h3>TalkLegal</h3>
          </Link>
        </div>
        <div className={NavBarCss.center}>
          <ul>
            <li>Pricing</li>
            <li>Documents</li>
            <li>About Us</li>
            <li>Dashboard</li>
            <li>Profile</li>
          </ul>
        </div>
        <div className={NavBarCss.right}>
          <ul>
            <Link to="/login">
              <li>Login</li>
            </Link>
            <Link to="/register">
              <li className={NavBarCss.button}>Get Started</li>
            </Link>
          </ul>
        </div>
      </div>
      <div className={NavBarCss.outer}>
        <i className="fa fa-bars" onClick={() => toggle()}></i>
        <ul style={{ display: state ? 'flex' : 'none' }}>
          <li>Pricing</li>
          <li>Documents</li>
          <li>About Us</li>
          <li>Dashboard</li>
          <li>Profile</li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar
