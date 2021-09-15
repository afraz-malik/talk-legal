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
            <h3>
              <img alt="" src="images/Full-Trans 2.svg" />
            </h3>
          </Link>
        </div>
        <div className={NavBarCss.center}>
          <ul>
            <li>
              <Link to="/" className={NavBarCss.selected}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/">Pricing</Link>
            </li>
            <li>
              <Link to="/">Documents</Link>
            </li>
            <li>
              <Link to="/">About Us</Link>
            </li>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="/">Profile</Link>
            </li>
          </ul>
        </div>
        <div className={NavBarCss.right}>
          <ul>
            <li>
              <Link to="/register">Get Started</Link>
            </li>
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
