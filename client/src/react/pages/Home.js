import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import logo from '../../a-img/hail_logo.png'
import { boolSwitch, getPosts } from '../../redux/actions/localActions'
import requestGames from '../../redux/actions/rawgActions'
import { createPost } from '../../services/localServices'

const mapStateToProps = ({ localState, rawgState }) => {
  return {
    localState,
    rawgState
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch(getPosts()),
    storeGames: () => dispatch(requestGames())
  }
}

function Home(props) {
  function handleClick() {
    props.localState.authenticated && props.localState.user
      ? props.history.push('/newsfeed')
      : props.history.push('/register')
  }

  return (
    <div className="homeContainer flexRow">
      <img className="homeLogo" src={logo} alt="Hail Brand Logo" />
      <button id="homebutton" onClick={handleClick}>
        Let's Go!
      </button>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
