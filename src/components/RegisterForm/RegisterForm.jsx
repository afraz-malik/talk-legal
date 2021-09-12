import React from 'react'
import RegisterFormCss from './RegisterForm.module.scss'
const RegisterForm = () => {
  return (
    <div className={RegisterFormCss.form}>
      <form>
        <h3>Register Your Account!</h3>
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
          Have an account? <span>Sign in</span>
        </div>
      </form>
    </div>
  )
}

export default RegisterForm
