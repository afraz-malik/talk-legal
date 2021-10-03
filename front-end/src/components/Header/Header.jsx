import React from 'react'
import { Link } from 'react-router-dom'
import HeaderCss from './Header.module.scss'

const Header = () => {
  return (
    <div
      className={HeaderCss.header}
      style={{
        background: `linear-gradient(0deg, rgba(120, 84, 247, 0), rgba(120, 84, 247, 0)), url(images/header.png) center`,
        backgroundSize: 'cover',
      }}
    >
      <div className={HeaderCss.container}>
        {/* <h2>Entrepreneurship starts here.</h2> */}
        <h2>
          {' '}
          We provide affordable and accessible legal tools to help build your
          business.
        </h2>
        <p>
          Affordable and accessible legal tools to help build your business. Get
          the legal help you need from lawyers without the expensive fees.
        </p>
        <div className={HeaderCss.link}>
          <Link to="/register" className={HeaderCss.a}>
            Sign Up For Free
          </Link>
          or{' '}
          <span>
            <Link to="/business">Discover more &#x3e;</Link>
          </span>
        </div>
      </div>
    </div>
  )
}
export default Header
