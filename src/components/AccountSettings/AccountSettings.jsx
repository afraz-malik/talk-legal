import React from 'react'
import AccountSettingsCss from './AccountSettings.module.scss'
const AccountSettings = () => {
  const [state, setstate] = React.useState({ plans: '', adOns: '' })

  const togglePassword = (val) => {
    var x = document.getElementById(`${val}`)
    if (x.type === 'password') {
      x.type = 'text'
    } else {
      x.type = 'password'
    }
  }
  return (
    <div className={AccountSettingsCss.container}>
      <div className={AccountSettingsCss.top}>
        <h4>Profile Setting</h4>
        <h5>Edit Account › </h5>
      </div>
      <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do.</p>
      <form>
        <div className={AccountSettingsCss.row}>
          <div className={AccountSettingsCss.col}>
            <label>First Name</label>
            <input
              type="text"
              placeholder="Enter First Name"
              defaultValue="John"
            />
          </div>
          <div className={AccountSettingsCss.col}>
            <label>Last Name</label>
            <input
              type="text"
              placeholder="Enter First Name"
              defaultValue="Doe"
            />
          </div>{' '}
          <div className={AccountSettingsCss.col}>
            <label>Phone Number</label>
            <input
              type="text"
              placeholder="Enter Pone Number"
              defaultValue="(808) 555-0111"
            />
          </div>
        </div>
        <hr />
        <h5>Password Setting</h5>
        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do.</p>
        <div className={AccountSettingsCss.col}>
          <label>Current Password</label>
          <input
            type="password"
            placeholder="Enter Current Password"
            defaultValue="Johnfuckingdoe"
            id="cp"
          />
          <img
            alt=""
            src="images/Group 1000001848.svg"
            onClick={() => togglePassword('cp')}
          />
        </div>
        <div className={AccountSettingsCss.col}>
          <label>New Password</label>
          <input type="password" placeholder="Enter New Password" id="np" />
          <img
            alt=""
            src="images/Group 1000001848.svg"
            onClick={() => togglePassword('np')}
          />
        </div>
        <div className={AccountSettingsCss.col}>
          <label>Re-enter Password</label>
          <input
            type="password"
            placeholder="Enter New Password again"
            id="rp"
          />
          <img
            alt=""
            src="images/Group 1000001848.svg"
            onClick={() => togglePassword('rp')}
          />
        </div>
        <div className={AccountSettingsCss.col}>
          <input type="submit" value="Change Password" />
        </div>
        <hr />
        <div className={AccountSettingsCss.top}>
          <h4>Payment Setting</h4>
          <h5>Edit Account › </h5>
        </div>
        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do.</p>
        <div className={AccountSettingsCss.ad_ons}>
          <div className={AccountSettingsCss.ad_on}>
            <div
              className={`${AccountSettingsCss.card} ${
                state.plans === 'silver' ? AccountSettingsCss.activeCard : null
              }`}
              onClick={() => setstate({ ...state, plans: 'silver' })}
            >
              <label className={AccountSettingsCss.container2}>
                <input
                  type="radio"
                  name="plans"
                  value="silver"
                  checked={state.plans === 'silver'}
                  onChange={(e) =>
                    setstate({ ...state, plans: e.target.value })
                  }
                />
                <span className={AccountSettingsCss.checkmark}></span>
              </label>
              <div className={AccountSettingsCss.top}>
                <h2>
                  4756 &#8226;&#8226;&#8226;&#8226; &#8226;&#8226;&#8226;&#8226;
                  3847
                </h2>
                <img alt="" src="images/path3789.svg" />
              </div>
            </div>
            <div
              className={`${AccountSettingsCss.card} ${
                state.plans === 'gold' ? AccountSettingsCss.activeCard : null
              }`}
              onClick={() => setstate({ ...state, plans: 'gold' })}
            >
              <label className={AccountSettingsCss.container2}>
                <input
                  type="radio"
                  name="plans"
                  value="gold"
                  checked={state.plans === 'gold'}
                  onChange={(e) =>
                    setstate({ ...state, plans: e.target.value })
                  }
                />
                <span className={AccountSettingsCss.checkmark}></span>
              </label>
              <div className={AccountSettingsCss.top}>
                <h2>
                  4756 &#8226;&#8226;&#8226;&#8226; &#8226;&#8226;&#8226;&#8226;
                  3847
                </h2>
                <img alt="" src="images/Group 1000001865.svg" />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default AccountSettings
