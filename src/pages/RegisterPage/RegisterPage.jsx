import React from 'react'
import { withRouter } from 'react-router'
import Boxmodel from '../../components/Boxmodel/Boxmodel'
import RegisterForm from '../../components/RegisterForm/RegisterForm'
const RegisterPage = () => {
  return (
    <Boxmodel>
      <RegisterForm />
    </Boxmodel>
  )
}

export default withRouter(RegisterPage)
