import React from 'react'
import { withRouter } from 'react-router'
import OrderCss from './OrderSummary.module.scss'
const OrderSummary = ({ planBill, form }) => {
  return (
    <>
      {planBill.plan ? (
        <div className={OrderCss.price}>
          <p className={OrderCss.p}>{planBill.plan.title} TLTM Membership</p>
          <p className={`${OrderCss.p}`}>${planBill.plan.membership_cost}</p>
        </div>
      ) : null}
      {planBill.adOns ? (
        <div className={OrderCss.price}>
          <p className={OrderCss.p}>{planBill.adOns.title} addon</p>
          <p className={OrderCss.p}>${planBill.adOns.price}</p>
        </div>
      ) : null}
      {form ? (
        <>
          <div className={OrderCss.price}>
            <p className={OrderCss.p}>Legal Forms</p>
            <p className={OrderCss.p}>${planBill.form}</p>
          </div>
          {/* <div className={OrderCss.price}>
            <p className={OrderCss.p}>Mutual Non-Disclosure Agreement</p>
            <p className={OrderCss.p}>$16.80</p>
          </div> */}
        </>
      ) : null}
    </>
  )
}

export default withRouter(OrderSummary)
