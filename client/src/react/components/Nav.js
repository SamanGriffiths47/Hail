import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Search from '../components/Search'

const mapStateToProps = ({ localState }) => {
  return {
    localState
  }
}

function Nav(props) {
  function authorized() {
    if (props.localState.authorized) {
      return (
        <div className="home-user">
          <Search />
          <Link to="/" id="navHome">
            Home
          </Link>
          <Link to="/" id="userPage">
            User Page
          </Link>
        </div>
      )
    } else {
      return (
        <div className="home-news">
          <Search />
          <Link to="/" id="navHome">
            Home
          </Link>
          <Link to="/newsfeed" id="newsfeed">
            Newsfeed
          </Link>
        </div>
      )
    }
  }

  return <nav>{authorized()}</nav>
}

export default connect(mapStateToProps)(Nav)
