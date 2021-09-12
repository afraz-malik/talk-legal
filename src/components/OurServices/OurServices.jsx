import React from 'react'
import { Link } from 'react-router-dom'
import OurServicesCss from './OurServices.module.scss'
const OurServices = () => {
  return (
    <div className={OurServicesCss.container}>
      <h2>
        <span>Our</span> Services
      </h2>
      <div className={OurServicesCss.cards}>
        <div className={OurServicesCss.card1}>
          <div className={OurServicesCss.card_img}>
            <Link to="/business">
              <img className={OurServicesCss.main_img} src="images/card1.png" />
            </Link>
            <Link to="/business">
              <img
                className={OurServicesCss.left_img}
                src="images/payment.png"
              />
            </Link>
            <Link to="/business">
              <img
                className={OurServicesCss.apple_pay}
                src="images/applepay.png"
              />
            </Link>
          </div>
          <div className={OurServicesCss.card_text}>
            <div className={OurServicesCss.content}>
              <Link to="/business">
                <h3> Startups & Entrepreneurship</h3>
              </Link>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consut.
              </p>
              <Link to="/business">Learn More</Link>
            </div>
          </div>
        </div>
        <div className={OurServicesCss.card2}>
          <div className={OurServicesCss.card_img}>
            <img className={OurServicesCss.main_img} src="images/card2.png" />
            <img
              className={OurServicesCss.sqaure_img}
              src="images/square.png"
            />
            <img className={OurServicesCss.monkey} src="images/monkey.png" />
            <img className={OurServicesCss.fb} src="images/fb.png" />
            <img className={OurServicesCss.jetpack} src="images/jetpack.png" />
            <img className={OurServicesCss.aids} src="images/aids.png" />
          </div>
          <div className={OurServicesCss.card_text}>
            <div className={OurServicesCss.content}>
              <h3> Social-Media & Freelancing </h3>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consut.
              </p>
              <a href="#l" alt="">
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div className={OurServicesCss.card3}>
          <div className={OurServicesCss.card_img}>
            <img className={OurServicesCss.main_img} src="images/card3.png" />
            <img className={OurServicesCss.ft} src="images/friendstop.png" />
            <img className={OurServicesCss.finger} src="images/finger.png" />
            {/* <img className={OurServicesCss.fd} src="images/friends.png" /> */}
          </div>
          <div className={OurServicesCss.card_text}>
            <div className={OurServicesCss.content}>
              <h3> Social-Media & Freelancing </h3>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consut.
              </p>
              <a href="#l" alt="">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurServices
