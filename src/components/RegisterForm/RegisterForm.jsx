import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import RegisterFormCss from './RegisterForm.module.scss'
const RegisterForm = ({ history }) => {
  return (
    <div className={RegisterFormCss.form}>
      <form>
        {history.location.form ? (
          <h3>Almost there! Create an account to save your document.</h3>
        ) : (
          <h3>Register Your Account!</h3>
        )}
        <p>
          For the purpose of industry regulation, your details are required.
        </p>
        <label>Your full name*</label>
        <input type="text" placeholder="Enter your full name" />

        <label>Email address*</label>
        <input type="email" placeholder="Enter email address" />

        <label>Create password*</label>
        <input type="password" placeholder="Enter password" />
        <div>
          <input type="checkbox" /> i agree to terms & conditions{' '}
        </div>
        <input type="submit" value="Register Account" />
        <span className={RegisterFormCss.or}>Or</span>
        <div className={RegisterFormCss.google}>
          <img alt="" src="images/google.png" />
          Register With Google
        </div>
        <div className={RegisterFormCss.signin}>
          {' '}
          Have an account?{' '}
          <Link to="/login">
            {' '}
            <span>Sign in</span>{' '}
          </Link>
        </div>
      </form>
    </div>
  )
}

export default withRouter(RegisterForm)
