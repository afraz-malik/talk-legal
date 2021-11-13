import React from 'react'
import { HashLink } from 'react-router-hash-link'

import HeaderCss from './Header.module.scss'

const Header = () => {
  return (
    <div
      className={HeaderCss.header}
      style={{
        background: `linear-gradient(0deg, rgba(120, 84, 247, 0), rgba(120, 84, 247, 0)), url(images/header.png) center`,
        backgroundRepeat: 'no-repeat',
        // backgroundSize: "top",
      }}
    >
      <div className={HeaderCss.container}>
        <h2>
          We provide affordable and accessible legal tools to help build your
          business.
        </h2>
        <p>
          Get the legal support you need from real lawyers without the expensive
          fees.
        </p>
        <div className={HeaderCss.link}>
          <HashLink to="/#Services" className={HeaderCss.a}>
            Get Started
          </HashLink>
        </div>
      </div>
    </div>
  )
}
export default Header
