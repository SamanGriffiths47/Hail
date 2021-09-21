import React from 'react'
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
          <Link id="home">Home</Link>
          <Link id="userPage">User Page</Link>
          <Link id="newsfeed">Newsfeed</Link>
        </div>
      )
    } else {
      return (
        <div>
          <Link id="home">Home</Link>
          <Link id="authForm">Register/Signin</Link>
        </div>
      )
    }
  }

  return <nav>{authorized()}</nav>
}

export default connect(mapStateToProps)(Nav)
