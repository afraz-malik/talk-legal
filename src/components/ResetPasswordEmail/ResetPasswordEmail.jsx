import React from 'react'
import { useHistory } from 'react-router'
import ResetPasswordEmailCss from './ResetPasswordEmail.module.scss'
const ResetPasswordEmail = () => {
  const history = useHistory()
  return (
    <div className={ResetPasswordEmailCss.form}>
      <form>
        <h3>Reset Your Password!</h3>
        <p>
          For the purpose of industry regulation, your details are required.
        </p>
        <label>Email address*</label>
        <input type="email" placeholder="Enter email address" />

        <input
          type="submit"
          value="Reset Password"
          onClick={() => history.push('/changepassword')}
        />

        <div>
          <img alt="" src="images/lock.png" /> Your info is safely secured
        </div>
      </form>
    </div>
  )
}

export default ResetPasswordEmail
