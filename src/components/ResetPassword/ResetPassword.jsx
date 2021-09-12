import React from 'react'
import ResetPasswordCss from './ResetPassword.module.scss'
const ResetPassword = () => {
  return (
    <div className={ResetPasswordCss.form}>
      <form>
        <h3>Reset Password</h3>
        <p>
          For the purpose of industry regulation, your details are required.
        </p>
        <label>New Password*</label>
        <input type="password" placeholder="Enter Password" />
        <label>New Password*</label>
        <input type="password" placeholder="Enter Password" />
        <input type="submit" value="Reset Password" />
      </form>
    </div>
  )
}

export default ResetPassword
