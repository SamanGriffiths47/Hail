import React from 'react'
import { Redirect, Route } from 'react-router'

export default function ProtectedRoute({
  user,
  authenticated,
  component: Component,
  ...rest
}) {
  console.log('user', user)
  return (
    <Route
      {...rest}
      render={(props) =>
        user && authenticated ? (
          <Component {...props} /> // Render our chosen component if a user exists and they are authenticated
        ) : (
          <Redirect to="/register" /> // Otherwise, use the Redirect component to return the user to the sign in screen
        )
      }
    />
  )
}
