import React from 'react'
import OurPlansCss from './OurPlans.module.scss'
const OurPlans = () => {
  const [state, setstate] = React.useState({
    card: '2',
  })
  const setCard = (value) => {
    setstate({
      card: value,
    })
  }
  return (
    <div className={OurPlansCss.container}>
      <h2>
        Our <span>Plans</span>
      </h2>
      <div className={OurPlansCss.title}>
        <h4>Simple, transparent pricing</h4>
        <p>No contracts. No surprise fees.</p>
      </div>
      <table>
        <thead>
          <tr>
            <td width="300px"></td>
            <td>
              <div
                className={
                  state.card === '1' ? OurPlansCss.active : OurPlansCss.card
                }
              >
                <h3>Silver</h3>
                <h1>$110</h1>
                <span>Membership</span>
                <p>
                  Velit officia consequat duis enim velit mollit. Exercitation
                  veniam consequat sunt nostrud amet.
                </p>
                <button onClick={() => setCard('1')}>Select</button>
              </div>
            </td>
            <td>
              <div
                className={
                  state.card === '2' ? OurPlansCss.active : OurPlansCss.card
                }
              >
                <h3>Gold</h3>
                <h1>$200</h1>
                <span>Membership</span>
                <p>
                  Velit officia consequat duis enim velit mollit. Exercitation
                  veniam consequat sunt nostrud amet.
                </p>
                <button onClick={() => setCard('2')}>Select</button>
              </div>
            </td>
            <td>
              <div
                className={
                  state.card === '3' ? OurPlansCss.active : OurPlansCss.card
                }
              >
                <h3>Platinum</h3>
                <h1>$500</h1>
                <span>Membership</span>
                <p>
                  Velit officia consequat duis enim velit mollit. Exercitation
                  veniam consequat sunt nostrud amet.
                </p>
                <button onClick={() => setCard('3')}>Select</button>
              </div>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Number of Documents</td>
            <td>4</td>
            <td>8</td>
            <td>Unlimited</td>
          </tr>
          <tr>
            <td>Add-on attorney consulting service?</td>
            <td>
              <img alt="" src="images/Shape.png" />
            </td>
            <td>
              <img alt="" src="images/Shape.png" />
            </td>
            <td></td>
          </tr>
          <tr>
            <td>Cost</td>
            <td>save up to $105</td>
            <td>save up to $175</td>
            <td>Save alot</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default OurPlans
