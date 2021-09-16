import React from 'react'
import { Link } from 'react-router-dom'
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
          Forget password?{' '}
          <Link to="/forget">
            <span>Reset Password</span>
          </Link>
        </h5>
        <div>
          <input type="checkbox" /> Keep Loggged in
        </div>
        <div>
          <input type="submit" value="Sign In" />
        </div>
        <h5>
          Don't have an account?{' '}
          <Link to="/register">
            <span>Sign Up</span>
          </Link>
        </h5>
        <img alt="" src="images/line.png" className={LoginFormCss.line} />
        <img alt="" src="images/1.png" className={LoginFormCss.computer} />
      </form>
    </div>
  )
}

export default LoginForm
