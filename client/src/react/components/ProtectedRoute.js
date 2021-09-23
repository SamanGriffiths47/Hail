import React, { useEffect } from 'react'
import { Redirect, Route } from 'react-router'
import { connect } from 'react-redux'
import Newsfeed from '../pages/Newsfeed'

<<<<<<< HEAD
export default function ProtectedRoute({
  user,
  authenticated,
  component: Component,
  ...rest
}) {
=======
const mapStateToProps = ({ rawgState, localState }) => {
  return {
    rawgState,
    localState
  }
}

function ProtectedRoute(props) {
  console.log(props)
  let user = props.localState.user
  let authenticated = props.localState.authenticated
>>>>>>> d96d958bffb829af4008d23d415b6cc40bd28fba
  return (
    <Route
      render={() =>
        user && authenticated ? <Newsfeed /> : <Redirect to="/login" />
      }
    />
  )
}
export default connect(mapStateToProps)(ProtectedRoute)
