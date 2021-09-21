import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const mapStateToProps = ({ localState }) => {
  return {
    localState
  }
}

function Nav(props) {
  function authorized() {
    if (props.localState.authorized) {
      return (
        <div>
          <Link id="navHome">Home</Link>
          <Link id="userPage">User Page</Link>
          <Link id="newsfeed">Newsfeed</Link>
        </div>
      )
    } else {
      return (
        <div>
          <Link id="navHome">Home</Link>
          <Link id="navRegister">Register</Link>
          <Link id="navSignin">Signin</Link>
        </div>
      )
    }
  }

  return <nav>{authorized()}</nav>
}

export default connect(mapStateToProps)(Nav)
