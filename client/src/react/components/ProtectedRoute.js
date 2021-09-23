import React, { useEffect } from 'react'
import { Redirect, Route } from 'react-router'

export default function ProtectedRoute({
  user,
  authenticated,
  component: Component,
  checkToken,
  ...rest
}) {
  useEffect(() => {
    checkToken()
  }, [])
  return (
    <Route
      {...rest}
      render={(props) =>
        user && authenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/register" />
        )
      }
    />
  )
}
