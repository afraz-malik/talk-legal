import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useHistory, withRouter } from 'react-router-dom'
import Logo from '../../components/NavBar/Logo'
import PaymentPlanCards from '../../components/PaymentPlanCards/PaymentPlanCards'
import { currentUserSelector } from '../../redux/user/user.selector'
import PaymentPlansCss from './PaymentPlans.module.scss'
const PaymentPlans = ({ location, nologo }) => {
  const history = useHistory()
  const form = location.search ? location.search.split('=')[1] : null
  const currentUser = useSelector((state) => currentUserSelector(state))
  React.useEffect(() => {
    // if (currentUser.subscription_plan) {
    //   console.log(currentUser)
    //   history.push('/dashboard')
    // }
    window.scrollTo(0, 0)
  }, [])
  const handleSubmit = (val) => {
    history.push({ pathname: '/checkout', plan: val })
  }
  return (
    <div className={PaymentPlansCss.container}>
      {nologo ? null : <Logo />}
      <div className={PaymentPlansCss.body}>
        {form ? (
          <h1>
            Your Mutual Non-Disclosure <br />
            Agreement agreement is ready.
          </h1>
        ) : (
          <h1>Your Agreement, Our responsibilty</h1>
        )}

        <p>
          {currentUser && currentUser.subscription_plan
            ? 'Upgrade your membership to be served better'
            : 'Select a membership to save money and access multiple documents.'}
        </p>
        <PaymentPlanCards handleSubmit={handleSubmit} />
        {form ? (
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
        ) : null}
      </div>
      {/* <div className={PaymentPlansCss.body}>
        <p>Select a membership to save money and access multiple documents.</p>
        <PaymentPlanCards handleSubmit={handleSubmit} />
      </div> */}
    </div>
  )
}

export default withRouter(PaymentPlans)
