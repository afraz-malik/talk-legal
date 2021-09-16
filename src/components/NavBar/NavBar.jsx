import React from 'react'
import { Link } from 'react-router-dom'
import NavBarCss from './NavBar.module.scss'

const NavBar = () => {
  React.useEffect(() => {
    if (document.documentElement.clientWidth < 914) {
      setstate(false)
      window.addEventListener('mouseup', clickEvent)
    }
    window.addEventListener('resize', resizeEvent)
    return () => {
      window.removeEventListener('mouseup', clickEvent)
      console.log('removed Navbar mouse event lister')
      window.removeEventListener('resize', resizeEvent)
      console.log('removed Navbar resize event lister')
    }
  }, [])
  const [state, setstate] = React.useState(true)

  const toggle = () => {
    setstate(!state)
  }
  const resizeEvent = () => {
    console.log('resize started')
    const scrolled = document.documentElement.clientWidth
    if (scrolled > 930) {
      window.removeEventListener('mouseup', clickEvent)
      console.log('click disabled')
      setstate(true)
    } else if (scrolled <= 930) {
      window.addEventListener('mouseup', clickEvent)
      setstate(false)
    }
  }
  const clickEvent = (e) => {
    console.log('click started')
    var container = document.getElementById('ul')
    if (!container.contains(e.target)) {
      if (document.documentElement.clientWidth < 930) {
        setstate(false)
      }
    }
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
          <i className="fa fa-bars" onClick={() => toggle()}></i>
          <ul style={{ display: state ? 'flex' : 'none' }} id="ul">
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
            <Link to="/register">
              <li>Get Started</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default NavBar
