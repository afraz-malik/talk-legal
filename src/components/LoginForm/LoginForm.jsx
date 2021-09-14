import React from 'react'
import LoginFormCss from './LoginForm.module.scss'
const LoginForm = () => {
  return (
    <div className={LoginFormCss.form}>
      <form>
        <h2>Get Started now</h2>
        <label>Enter Email*</label>
        <input type="email" placeholder="Enter Email Address" />
        <label>Enter Password*</label>
        <input type="email" placeholder="Enter Password" />
        <h5>
          Forget password? <span>Reset Password</span>
        </h5>
        <div>
          <input type="checkbox" /> Keep Loggged in
        </div>
        <input type="submit" value="Sign In" />
      </form>
    </div>
  )
}

export default LoginForm
