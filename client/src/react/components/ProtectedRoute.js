import React, { useEffect } from 'react'
import { Redirect, Route } from 'react-router'

// const mapStateToProps = ({ rawgState, localState }) => {
//   return {
//     rawgState,
//     localState
//   }
// }
// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchGames: () => dispatch(saveGames()),
//     userSet: () => dispatch(setUser()),
//     toggleAuth: (boolean) => dispatch(authToggle(boolean))
//   }
// }

export default function ProtectedRoute({
  user,
  authenticated,
  component: Component,
  ...rest
}) {
  // useEffect(() => {
  //   checkToken()
  // }, [])

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
