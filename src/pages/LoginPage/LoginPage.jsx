import React from 'react'
import Boxmodel from '../../components/Boxmodel/Boxmodel'
import LoginForm from '../../components/LoginForm/LoginForm'
import ResetPasswordEmail from '../../components/ResetPasswordEmail/ResetPasswordEmail'
const LoginPage = () => {
  const [state, setstate] = React.useState(false)
  const toggle = () => {
    setstate(!state)
  }
  return (
    <Boxmodel>
      {state ? (
        <ResetPasswordEmail toggleState={toggle} />
      ) : (
        <LoginForm toggleState={toggle} />
      )}
    </Boxmodel>
  )
}

export default LoginPage
