import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../components/NavBar/Logo'
import PaymentPlansCss from './PaymentPlans.module.scss'
const PaymentPlans = () => {
  const [state, setstate] = React.useState(2)
  const setCard = (value) => {
    setstate(value)
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
        <div className={PaymentPlansCss.cards}>
          <div
            className={`${PaymentPlansCss.card} ${
              state === 1 ? PaymentPlansCss.active : null
            }`}
          >
            <div className={PaymentPlansCss.top}>
              <div className={PaymentPlansCss.left}>
                <h2>Silver</h2>
              </div>
              <div className={PaymentPlansCss.right}>
                <h2>$110</h2>
                <span>Membership</span>
              </div>
            </div>
            <div className={PaymentPlansCss.middle}>
              <h4>Plans Includes:</h4>
              <div className={PaymentPlansCss.point}>
                <img alt="" src="images/tick.svg" />
                <p>4 numbers of Documents.</p>
              </div>
              <div className={PaymentPlansCss.point}>
                <img alt="" src="images/tick.svg" />
                <p>You can to purchase separate add-on</p>
              </div>
              <div className={PaymentPlansCss.point}>
                <img alt="" src="images/tick.svg" />
                <p>$110 Membership (You can save up to $105)</p>
              </div>
              <button onClick={() => setCard(1)}>Get Started</button>
            </div>
          </div>
          <div
            className={`${PaymentPlansCss.card} ${
              state === 2 ? PaymentPlansCss.active : null
            }`}
          >
            <div className={PaymentPlansCss.top}>
              <div className={PaymentPlansCss.left}>
                <h2>Gold</h2>
              </div>
              <div className={PaymentPlansCss.right}>
                <h2>$200</h2>
                <span>Membership</span>
              </div>
            </div>
            <div className={PaymentPlansCss.middle}>
              <h4>Plans Includes:</h4>
              <div className={PaymentPlansCss.point}>
                <img alt="" src="images/tick.svg" />
                <p>8 numbers of Documents.</p>
              </div>
              <div className={PaymentPlansCss.point}>
                <img alt="" src="images/tick.svg" />
                <p>You can to purchase separate add-on</p>
              </div>
              <div className={PaymentPlansCss.point}>
                <img alt="" src="images/tick.svg" />
                <p>$200 Membership (You can save up to $175)</p>
              </div>
              <button onClick={() => setCard(2)}>Get Started</button>
            </div>
          </div>
          <div
            className={`${PaymentPlansCss.card} ${
              state === 3 ? PaymentPlansCss.active : null
            }`}
          >
            <div className={PaymentPlansCss.top}>
              <div className={PaymentPlansCss.left}>
                <h2>Platinum</h2>
              </div>
              <div className={PaymentPlansCss.right}>
                <h2>$500</h2>
                <span>Membership</span>
              </div>
            </div>
            <div className={PaymentPlansCss.middle}>
              <h4>Plans Includes:</h4>
              <div className={PaymentPlansCss.point}>
                <img alt="" src="images/tick.svg" />
                <p>Unlimited numbers of Document.</p>
              </div>
              <div className={PaymentPlansCss.point}>
                <img alt="" src="images/tick.svg" />
                <p>Unlimited consulting sessions per month</p>
              </div>
              <div className={PaymentPlansCss.point}>
                <img alt="" src="images/tick.svg" />
                <p>$500 Membership (You save a lot).</p>
              </div>
              <button onClick={() => setCard(3)}>Get Started</button>
            </div>
          </div>
        </div>
        <div className={PaymentPlansCss.single}>
          <Link>Skip this membership step to purchase a single document ›</Link>
        </div>
      </div>
    </div>
  )
}

export default PaymentPlans
