import React from 'react'
import LoginBoxmodel from '../../components/LoginBoxmodel/LoginBoxmodel'
import VerificationCss from './Verification.module.scss'
const Verification = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <LoginBoxmodel>
      <div className={VerificationCss.verify}>
        <img src="images/Group 1000001982.png" alt="" />
        <h3>Please Verify Your Email Address!</h3>
        <p>
          An email has been sent to imgoogle@gmail.com with a link to verify
          your account. After receiving the email click the link provided to
          complete your registration.
        </p>
        <input
          type="submit"
          value="Reset Password"
          // onClick={() => {
          //   alert('Change Successfully')
          //   history.push('/')
          // }}
        />
      </div>
    </LoginBoxmodel>
  )
}

export default Verification
