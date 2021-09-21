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
    console.log(props.localState.authenticated)
    if (props.localState.authenticated) {
      return (
        <div>
          <Link to="/" id="navHome">
            Home
          </Link>
          <Link to="/" id="userPage">
            User Page
          </Link>
          <Link to="/newsfeed" id="newsfeed">
            Newsfeed
          </Link>
        </div>
      )
    } else {
      return (
        <div>
          <Link to="/" id="navHome">
            Home
          </Link>
        </div>
      )
    }
  }

  return <nav>{authorized()}</nav>
}

export default connect(mapStateToProps)(Nav)
