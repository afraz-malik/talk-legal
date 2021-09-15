import React from 'react'
import HomePlansCss from './HomePlans.module.scss'
const HomePlans = () => {
  const [state, setstate] = React.useState({
    card: '2',
  })
  const setCard = (value) => {
    console.log(value)
    setstate({
      card: value,
    })
  }
  console.log(state.card)
  return (
    <div className={HomePlansCss.container}>
      <h2>
        Our <span>Plans</span>
      </h2>
      <div className={HomePlansCss.title}>
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
                  state.card === '1' ? HomePlansCss.active : HomePlansCss.card
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
                  state.card === '2' ? HomePlansCss.active : HomePlansCss.card
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
                  state.card === '3' ? HomePlansCss.active : HomePlansCss.card
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
      <div className={HomePlansCss.cards}></div>
    </div>
  )
}

export default HomePlans
