import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import Logo from '../../components/NavBar/Logo'
import PaymentPlanCards from '../../components/PaymentPlanCards/PaymentPlanCards'
import PaymentPlansCss from './PaymentPlans.module.scss'
const PaymentPlans = () => {
  const history = useHistory()

  const handleSubmit = (val) => {
    history.push({ pathname: '/checkout', plan: val })
  }
  return (
    <div className={PaymentPlansCss.container}>
      <Logo />
      <div className={PaymentPlansCss.body}>
        <h1>
          Your Mutual Non-Disclosure <br />
          Agreement agreement is ready.
        </h1>
        <p>Select a membership to save money and access multiple documents.</p>
        <PaymentPlanCards handleSubmit={handleSubmit} />
        <div className={PaymentPlansCss.single}>
          <Link to="/checkout">
            Skip this membership step to purchase a single document ›
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PaymentPlans
