import React from 'react'
import { Link } from 'react-router-dom'
import NavBarCss from './NavBar.module.scss'

const Logo = () => {
  return (
    <div className={NavBarCss.logo}>
      <Link to="/">
        <img alt="" src="images/Full-Trans 1.png" />
      </Link>
    </div>
  )
}

export default Logo
