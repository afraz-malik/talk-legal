import React from 'react'
import { Link } from 'react-router-dom'
import FooterCss from './Footer.module.scss'
const Footer = () => {
  return (
    <div className={FooterCss.footer}>
      <div className={FooterCss.top} id="about">
        <h3>TalkLegal</h3>
        <div className={FooterCss.links}>
          <h5>Ready to get started?</h5>
          <Link to="/register">Get Started</Link>
        </div>
      </div>
      <div className={FooterCss.body}>
        <div className={FooterCss.left}>
          {' '}
          <h3>Subscribe to our newsletter</h3>
          <div className={FooterCss.form}>
            <input type="text" placeholder="Email address" />
            <div className={FooterCss.submit}>
              <img alt="" src="images/Path.svg" />
            </div>
          </div>
        </div>
        <div className={FooterCss.right}>
          <ul>
            <li>Services</li>
            <li>Email Marketing</li>
            <li>Campaigns</li>
            <li>Branding</li>
            <li>Offline</li>
          </ul>
          <ul>
            <li>Services</li>
            <li>Email Marketing</li>
            <li>Campaigns</li>
            <li>Branding</li>
            <li>Offline</li>
          </ul>
          <ul>
            <li>About</li>
            <li>Our Store</li>
            <li>Benefits</li>
            <li>Teams</li>
            <li>Careers</li>
          </ul>
          <ul>
            <li>Help</li>
            <li>FAQs</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
      <div className={FooterCss.bottom}>
        <div className={FooterCss.terms}>
          {' '}
          <ul>
            <li>Terms & Condiditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className={FooterCss.social}>
          <ul>
            <li>
              <img alt="" src="images/F.svg" />
            </li>
            <li>
              <img alt="" src="images/T.svg" />
            </li>
            <li>
              <img alt="" src="images/insta.svg" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
