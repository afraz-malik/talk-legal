import React from 'react'
import { withRouter } from 'react-router'
import LoginBoxmodel from '../../components/LoginBoxmodel/LoginBoxmodel'
import RegisterForm from '../../components/RegisterForm/RegisterForm'
const RegisterPage = () => {
  return (
    <LoginBoxmodel>
      <RegisterForm />
    </LoginBoxmodel>
  )
}

export default withRouter(RegisterPage)
