import React, { useEffect } from 'react'
import { Redirect, Route } from 'react-router'
import { connect } from 'react-redux'
import Newsfeed from '../pages/Newsfeed'

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
  return (
    //<Newsfeed />
    <Route
      render={() =>
        user && authenticated ? <Newsfeed /> : <Redirect to="/login" />
      }
    />
  )
}
export default connect(mapStateToProps)(ProtectedRoute)
