import React from 'react'
import Boxmodel from '../../components/Boxmodel/Boxmodel'
import LoginForm from '../../components/LoginForm/LoginForm'
const LoginPage = () => {
  const [state, setstate] = React.useState(false)
  const toggle = () => {
    setstate(!state)
  }
  return (
    <Boxmodel>
      <LoginForm toggleState={toggle} />
    </Boxmodel>
  )
}

export default LoginPage
