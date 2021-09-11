import React from 'react'
import NavBarCss from './NavBar.module.scss'
const NavBar = () => {
  return (
    <div className={NavBarCss.navbar}>
      <div className={NavBarCss.inside_nav}>
        <div className={NavBarCss.left}>
          <h3>TalkLegal</h3>
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
            <li>Login</li>
            <li className={NavBarCss.button}>Get Started</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default NavBar
