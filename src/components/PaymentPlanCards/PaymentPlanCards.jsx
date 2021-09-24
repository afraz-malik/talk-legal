import React from 'react'

import PPCardsCss from './PaymentPlanCards.module.scss'
const PaymentPlanCards = ({ handleSubmit }) => {
  // const [state, setstate] = React.useState(2)
  // const setCard = (value) => {
  //   setstate(value)
  // }
  return (
    <div className={PPCardsCss.cards}>
      <div className={`${PPCardsCss.card} `}>
        <div className={PPCardsCss.top}>
          <div className={PPCardsCss.left}>
            <h2>Silver</h2>
          </div>
          <div className={PPCardsCss.right}>
            <h2>$110</h2>
            <span>Membership</span>
          </div>
        </div>
        <div className={PPCardsCss.middle}>
          <h4>Plans Includes:</h4>
          <div className={PPCardsCss.point}>
            <img alt="" src="images/tick.svg" />
            <p>4 numbers of Documents.</p>
          </div>
          <div className={PPCardsCss.point}>
            <img alt="" src="images/tick.svg" />
            <p>You can to purchase separate add-on</p>
          </div>
          <div className={PPCardsCss.point}>
            <img alt="" src="images/tick.svg" />
            <p>$110 Membership (You can save up to $105)</p>
          </div>
          <div className={PPCardsCss.button}>
            <button onClick={() => handleSubmit('silver')}>Get Started</button>
          </div>
        </div>
      </div>
      <div className={`${PPCardsCss.card} `}>
        <div className={PPCardsCss.top}>
          <div className={PPCardsCss.left}>
            <h2>Gold</h2>
          </div>
          <div className={PPCardsCss.right}>
            <h2>$200</h2>
            <span>Membership</span>
          </div>
        </div>
        <div className={PPCardsCss.middle}>
          <h4>Plans Includes:</h4>
          <div className={PPCardsCss.point}>
            <img alt="" src="images/tick.svg" />
            <p>8 numbers of Documents.</p>
          </div>
          <div className={PPCardsCss.point}>
            <img alt="" src="images/tick.svg" />
            <p>You can to purchase separate add-on</p>
          </div>
          <div className={PPCardsCss.point}>
            <img alt="" src="images/tick.svg" />
            <p>$200 Membership (You can save up to $175)</p>
          </div>
          <div className={PPCardsCss.button}>
            <button onClick={() => handleSubmit('gold')}>Get Started</button>
          </div>
        </div>
      </div>
      <div className={`${PPCardsCss.card} `}>
        <div className={PPCardsCss.top}>
          <div className={PPCardsCss.left}>
            <h2>Platinum</h2>
          </div>
          <div className={PPCardsCss.right}>
            <h2>$500</h2>
            <span>Membership</span>
          </div>
        </div>
        <div className={PPCardsCss.middle}>
          <h4>Plans Includes:</h4>
          <div className={PPCardsCss.point}>
            <img alt="" src="images/tick.svg" />
            <p>Unlimited numbers of Document.</p>
          </div>
          <div className={PPCardsCss.point}>
            <img alt="" src="images/tick.svg" />
            <p>Unlimited consulting sessions per month</p>
          </div>
          <div className={PPCardsCss.point}>
            <img alt="" src="images/tick.svg" />
            <p>$500 Membership (You save a lot).</p>
          </div>
          <div className={PPCardsCss.button}>
            <button onClick={() => handleSubmit('platinum')}>
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentPlanCards
