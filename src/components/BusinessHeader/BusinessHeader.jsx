import React from 'react'
import BHeaderCss from './BusinessHeader.module.scss'

const BusinessHeader = () => {
  return (
    <div className={BHeaderCss.container}>
      <div className={BHeaderCss.row}>
        <div className={BHeaderCss.col}>
          <h2>
            Make your <span>business official.</span>
          </h2>
          <p>
            Affordable and accessible legal tools to help build your business.
            Get the legal help you need from lawyers without the expensive fees.
          </p>
        </div>
        <div className={BHeaderCss.col}>
          <img src="images/Group1000001452.png" alt="" />
          <img src="images/Capa 1.png" className={BHeaderCss.capa} alt="" />
        </div>
      </div>
    </div>
  )
}

export default BusinessHeader
