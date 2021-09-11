import React from 'react'
import HeaderCss from './Header.module.scss'

const Header = () => {
  return (
    <div
      className={HeaderCss.header}
      style={{
        background: `linear-gradient(0deg, rgba(120, 84, 247, 0.2), rgba(120, 84, 247, 0.2)), url(images/header.png)`,
      }}
    >
      <div className={HeaderCss.container}>
        <h2>Entrepreneurship starts here.</h2>
        <p>
          Affordable and accessible legal tools to help build your business. Get
          the legal help you need from lawyers without the expensive fees.
        </p>
        <div className={HeaderCss.link}>
          <a href="#d" alt="">
            Sign Up For Free
          </a>
          or <span>Discover more </span>
        </div>
      </div>
    </div>
  )
}
export default Header
