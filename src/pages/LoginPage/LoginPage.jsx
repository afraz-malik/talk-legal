import React from 'react'
import Boxmodel from '../../components/Boxmodel/Boxmodel'
import LoginForm from '../../components/LoginForm/LoginForm'
import ResetPasswordEmail from '../../components/ResetPasswordEmail/ResetPasswordEmail'
const LoginPage = () => {
  return (
    <Boxmodel>
      {/* <ResetPasswordEmail /> */}
      <LoginForm />
    </Boxmodel>
  )
}

export default LoginPage
