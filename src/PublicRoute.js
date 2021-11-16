import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Redirect, useLocation } from 'react-router-dom'
import { currentUserSelector } from './redux/user/user.selector'

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  const currentUser = useSelector((state) => currentUserSelector(state))
  const location = useLocation()
  const redirect = location.search ? location.search.split('=')[1] : null
  return (
    <Route
      {...rest}
      render={(props) =>
        currentUser && restricted ? (
          <Redirect to={redirect ? `/${redirect}` : '/dashboard'} />
        ) : (
          <Component {...props} />
        )
      }
    />
  )
}

export default PublicRoute
