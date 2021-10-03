import React from 'react'
import OurPromiseCss from './OurPromise.module.scss'

const OurPromise = () => {
  return (
    <div className={OurPromiseCss.container}>
      <h2>
        Our <span>Promise</span>
      </h2>
      <div className={OurPromiseCss.up}></div>
      <div
        className={OurPromiseCss.body}
        // style={{ backgroundImage: `url('images/Rectangle 234.svg')` }}
      >
        <div className={OurPromiseCss.topleft}>
          <div className={OurPromiseCss.imgbox}>
            <img
              alt=""
              src="images/Rectangle 236.svg"
              className={OurPromiseCss.img}
            />
            <img
              alt=""
              src="images/Rectangle 232.svg"
              className={OurPromiseCss.img_shadow}
            />
            <img
              className={OurPromiseCss.bigc}
              alt=""
              src="images/Ellipse 31.svg"
            />
            <img
              className={OurPromiseCss.smallc}
              alt=""
              src="images/Ellipse 32.svg"
            />
            <img
              className={OurPromiseCss.dots}
              alt=""
              src="images/Group 7.svg"
            />
          </div>
        </div>
        <div className={OurPromiseCss.bottomright}>
          <div className={OurPromiseCss.imgbox2}>
            <img
              alt=""
              src="images/Rectangle 233.svg"
              className={OurPromiseCss.img}
            />
            <img
              alt=""
              src="images/Rectangle 235.svg"
              className={OurPromiseCss.img_shadow}
            />
            <img
              className={OurPromiseCss.bigc}
              alt=""
              src="images/Ellipse 31.svg"
            />
            <img
              className={OurPromiseCss.smallc}
              alt=""
              src="images/Ellipse 32.svg"
            />
            <img
              className={OurPromiseCss.dots}
              alt=""
              src="images/Group 7.svg"
            />
          </div>
        </div>
        <div className={OurPromiseCss.text}>
          <h3>
            Simple <br /> and Easy to Use
          </h3>
          <p>
            Our legal platform was made with you in mind – it’s so simple and
            easy to use you’ll be wondering “is this real?”, Still brainstorming
            this one, not sure yet…. you will Save time with – our user-friendly
            platform that will produce your documents within minutes.
          </p>
        </div>
        <div className={OurPromiseCss.text2}>
          <h3>
            Let us Handle <br />
            the Legal Stuff
          </h3>
          <p>
            Let us handle the legal stuff so you can focus on building your
            business. We provide quality legal tools that were created by, and
            peer-reviewed, by real lawyers. Avoid free online templates – many
            are not drafted by real lawyers. Avoid expensive attorney fees.
          </p>
        </div>
      </div>
    </div>
  )
}

export default OurPromise
