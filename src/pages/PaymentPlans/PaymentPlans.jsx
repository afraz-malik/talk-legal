import React from 'react'
import { Link, useHistory, withRouter } from 'react-router-dom'
import Logo from '../../components/NavBar/Logo'
import PaymentPlanCards from '../../components/PaymentPlanCards/PaymentPlanCards'
import PaymentPlansCss from './PaymentPlans.module.scss'
const PaymentPlans = ({ location }) => {
  const history = useHistory()
  const form = location.search ? location.search.split('=')[1] : null
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const handleSubmit = (val) => {
    history.push({ pathname: '/checkout', plan: val })
  }
  return (
    <div className={PaymentPlansCss.container}>
      <Logo />
      {form ? (
        <div className={PaymentPlansCss.body}>
          <h1>
            Your Mutual Non-Disclosure <br />
            Agreement agreement is ready.
          </h1>
          <p>
            Select a membership to save money and access multiple documents.
          </p>
          <PaymentPlanCards handleSubmit={handleSubmit} />
          <div className={PaymentPlansCss.single}>
            <Link
              to={{
                pathname: '/checkout',
                state: {
                  form: 'single',
                },
              }}
            >
              Skip this membership step to purchase a single document ›
            </Link>
          </div>
        </div>
      ) : (
        <div className={PaymentPlansCss.body}>
          <h1>Your Agreement, Our responsibilty</h1>
          <p>
            Select a membership to save money and access multiple documents.
          </p>
          <PaymentPlanCards handleSubmit={handleSubmit} />
        </div>
      )}
    </div>
  )
}

export default withRouter(PaymentPlans)
