import React from 'react'
import LoginBoxmodel from '../../components/LoginBoxmodel/LoginBoxmodel'
import LoginForm from '../../components/LoginForm/LoginForm'
const LoginPage = () => {
  const [state, setstate] = React.useState(false)
  const toggle = () => {
    setstate(!state)
  }
  return (
    <LoginBoxmodel>
      <LoginForm toggleState={toggle} />
    </LoginBoxmodel>
  )
}

export default LoginPage
