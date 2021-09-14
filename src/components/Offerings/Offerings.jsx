import React from 'react'
import OfferingsCss from './Offerings.module.scss'

const Offerings = () => {
  return (
    <div className={OfferingsCss.container}>
      <h2>
        Our <span>Promise</span>
      </h2>
      <div className={OfferingsCss.body}>
        <div className={OfferingsCss.left}>
          <div className={OfferingsCss.images}>
            <img alt="" className={OfferingsCss.dots} src="images/dots.svg" />

            <img alt="" className={OfferingsCss.girl} src="images/girl.png" />
          </div>
        </div>
        <div className={OfferingsCss.right}>
          <ul>
            <li>
              Our legal platform was made with you in mind – it’s so simple and
              easy to use you’ll be wondering “is this real?”, Still
              brainstorming this one, not sure yet….
            </li>
            <li>“Avoid expensive attorney fees”.</li>
            <li>
              “Save time – our user-friendly platform will produce documents
              within minutes”.
            </li>
            <li>
              “Avoid free online templates – many are not drafted by real
              lawyers”.
            </li>
            <li>
              “We provide quality legal tools that were created by, and
              peer-reviewed, by real lawyers”.
            </li>
            <li>
              “Let us handle the legal stuff so you can focus on building your
              business”.
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Offerings
