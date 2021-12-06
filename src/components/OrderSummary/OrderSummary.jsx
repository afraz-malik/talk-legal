import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { withRouter } from 'react-router'
import { cartSelector } from '../../redux/data/data.selector'
import { currentUserSelector } from '../../redux/user/user.selector'
import CheckoutPlans from '../CheckoutPlans/CheckoutPlans'
import Logo from '../NavBar/Logo'
import HardCopy from '../LegalForm/HardCopy'
import OrderCss from './OrderSummary.module.scss'
import OrderSummaryGen from './OrderSummaryGen'
import { InsideSpinner } from '../Spinner/Spinner'
const OrderSummary = ({ handleCheckout, location }) => {
  const cart = useSelector((state) => cartSelector(state))
  const currentUser = useSelector((state) => currentUserSelector(state))

  const [planBill, setPlanBill] = useState({
    plan: '',
    adOns: '',
    form: 0,
  })

  let totalValue =
    Number(planBill.plan ? planBill.plan.membership_cost : 0) +
    Number(planBill.adOns ? planBill.adOns.price : 0) +
    planBill.form

  useEffect(() => {
    handleCheckout({
      ...planBill,
      totalValue: totalValue,
    })
    // eslint-disable-next-line
  }, [planBill])
  useEffect(() => {
    if (cart.form) setPlanBill({ ...planBill, form: 325 })
    // eslint-disable-next-line
  }, [])
  const handlePlan = (state) => {
    setPlanBill({ ...planBill, plan: state.plan, adOns: state.adOns })
  }
  return (
    <div className={OrderCss.container}>
      <div className={OrderCss.logo}>
        <Logo />
      </div>
      <h1 className={OrderCss.h1}>Order Summary</h1>
      {cart.form ? (
        <div
          className={OrderCss.hardCopy}
          style={{ backgroundImage: 'url(images/TLTM.png)' }}
        >
          <div className={`${OrderCss.content} preview`}>
            <HardCopy
              currentForm={cart.form.legal_form_detail}
              values={cart.form.legal_form_detail}
            />
            {/* <InsideSpinner /> */}
          </div>
        </div>
      ) : null}

      {currentUser.subscription_plan ? null : location.state &&
        location.state.form === 'single' ? null : (
        <CheckoutPlans handlePlan={handlePlan} />
      )}
      <br />
      <br />
      <div className={OrderCss.price}>
        <p className={OrderCss.p} style={{ fontWeight: 'bold' }}>
          {cart.form
            ? location.state && location.state.form === 'single'
              ? 'Singal Document Purchase'
              : 'Document Purchase'
            : ''}
        </p>
      </div>

      <OrderSummaryGen planBill={planBill} form={cart.form} />
      <div className={OrderCss.price} style={{ borderTop: '2px dashed black' }}>
        <p className={OrderCss.p} style={{ fontWeight: 'bold' }}>
          Total
        </p>
        <p
          className={OrderCss.p}
          style={{ fontWeight: 'bold', color: '#7854F7' }}
        >
          ${totalValue}
        </p>
      </div>
    </div>
  )
}

export default withRouter(OrderSummary)
