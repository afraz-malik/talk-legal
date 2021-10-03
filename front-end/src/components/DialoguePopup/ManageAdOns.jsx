import React from 'react'
import DialoguePopupCss from './DialoguePopup.module.scss'

const ManageAdOns = ({ setmanageAdons }) => {
  const [state, setstate] = React.useState({ plans: '', adOns: '' })
  console.log(state)
  return (
    <div className={DialoguePopupCss.manageAdons}>
      <img alt="" src="images/people.svg" />
      <h3> Select one of the addons that suits you’re need!</h3>
      <div className={DialoguePopupCss.ad_ons}>
        <div className={DialoguePopupCss.ad_on}>
          <div
            className={`${DialoguePopupCss.card} ${
              state.plans === 'silver' ? DialoguePopupCss.activeCard : null
            }`}
            onClick={() => setstate({ ...state, plans: 'silver' })}
          >
            <label className={DialoguePopupCss.container2}>
              <input
                type="radio"
                name="plans"
                value="silver"
                checked={state.plans === 'silver'}
                onChange={(e) => setstate({ ...state, plans: e.target.value })}
              />
              <span className={DialoguePopupCss.checkmark}></span>
            </label>
            <div className={DialoguePopupCss.text}>
              <div className={DialoguePopupCss.top}>
                <h2>Unlimited sessions</h2>
                <h2>$100</h2>
              </div>
              <p>Unlimited 30-minute sessions per month.</p>
            </div>
          </div>
          <div
            className={`${DialoguePopupCss.card} ${
              state.plans === 'gold' ? DialoguePopupCss.activeCard : null
            }`}
            onClick={() => setstate({ ...state, plans: 'gold' })}
          >
            <label className={DialoguePopupCss.container2}>
              <input
                type="radio"
                name="plans"
                value="gold"
                checked={state.plans === 'gold'}
                onChange={(e) => setstate({ ...state, plans: e.target.value })}
              />
              <span className={DialoguePopupCss.checkmark}></span>
            </label>
            <div className={DialoguePopupCss.text}>
              <div className={DialoguePopupCss.top}>
                <h2>One-time session</h2>
                <h2>$80</h2>
              </div>
              <p>One-time 30 minutes session.</p>
            </div>
          </div>
        </div>
      </div>
      <div className={DialoguePopupCss.greenButtons}>
        <button onClick={() => setmanageAdons(false)}>Cancel</button>
        <button onClick={() => setmanageAdons(false)}>Select Addons</button>
      </div>
    </div>
  )
}

export default ManageAdOns
