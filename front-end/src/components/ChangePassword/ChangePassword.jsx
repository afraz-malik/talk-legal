import React from 'react'
import { useHistory } from 'react-router'
import ChangePasswordCss from './ChangePassword.module.scss'
const ChangePassword = () => {
  const history = useHistory()
  return (
    <div className={ChangePasswordCss.form}>
      <form>
        <h3>Reset Password</h3>
        <p>
          For the purpose of industry regulation, your details are required.
        </p>
        <label>New Password*</label>
        <input type="password" placeholder="Enter Password" />
        <label>New Password*</label>
        <input type="password" placeholder="Enter Password" />
        <input
          type="submit"
          value="Reset Password"
          onClick={() => {
            alert('Change Successfully')
            history.push('/')
          }}
        />
      </form>
    </div>
  )
}

export default ChangePassword
