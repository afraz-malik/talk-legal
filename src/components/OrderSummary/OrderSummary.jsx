import React from 'react'
import { withRouter } from 'react-router'
import CheckoutPlans from '../CheckoutPlans/CheckoutPlans'
import Logo from '../NavBar/Logo'
import HardCopy from '../QuestionairesForm/HardCopy'
import OrderCss from './OrderSummary.module.scss'
const OrderSummary = ({ location }) => {
  console.log(location)
  return (
    <div className={OrderCss.container}>
      <div className={OrderCss.logo}>
        <Logo />
      </div>
      <h1 className={OrderCss.h1}>Order Summary</h1>
      <div
        className={OrderCss.hardCopy}
        style={{ backgroundImage: 'url(images/TLTM.png)' }}
      >
        <div className={OrderCss.content}>
          <HardCopy />
        </div>
      </div>
      {location.plan ? <CheckoutPlans /> : null}
      <div className={OrderCss.price}>
        <p className={OrderCss.p} style={{ fontWeight: 'bold' }}>
          {location.plan ? '' : 'Single'} Document Purchase
        </p>
      </div>
      <div className={OrderCss.price}>
        <p className={OrderCss.p}>Legal Forms</p>
        <p className={OrderCss.p}>$9.80</p>
      </div>
      <div className={OrderCss.price}>
        <p className={OrderCss.p}>Mutual Non-Disclosure Agreement</p>
        <p className={OrderCss.p}>$16.80</p>
      </div>
      <div className={OrderCss.price}>
        <p className={OrderCss.p}>Shipping Cost</p>
        <p className={OrderCss.p}>$1.80</p>
      </div>
      <div
        className={OrderCss.price}
        style={{ borderBottom: '2px dashed black' }}
      >
        <p className={OrderCss.p}>Tax</p>
        <p className={OrderCss.p}>$9.80</p>
      </div>
      <div className={OrderCss.price}>
        <p className={OrderCss.p} style={{ fontWeight: 'bold' }}>
          Total
        </p>
        <p
          className={OrderCss.p}
          style={{ fontWeight: 'bold', color: '#7854F7' }}
        >
          $48.80
        </p>
      </div>
    </div>
  )
}

export default withRouter(OrderSummary)