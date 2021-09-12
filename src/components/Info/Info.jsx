import React from 'react'
import InfoCss from './Info.module.scss'
const Info = () => {
  return (
    <div className={InfoCss.container}>
      <h3>
        How <span>We Help</span>
      </h3>
      <div className={InfoCss.centered}>
        <ul>
          <li>1. Choose your business type.</li>
          <li>2. Answer few questions.</li>
          <li>3. We'll complete and fill your Paperwork.</li>
        </ul>
        <div className={InfoCss.right}>
          <div>
            <img src="images/Mask Group.png" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info
