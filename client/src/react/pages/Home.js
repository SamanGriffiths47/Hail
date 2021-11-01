import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import logo from '../../a-img/hail_app_logo.png'
import { boolSwitch, getPosts } from '../../redux/actions/localActions'
import storeGames from '../../redux/actions/rawgActions'
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
    storeGames: (user) => dispatch(storeGames(user))
  }
}

function Home(props) {
  function handleClick() {
    if (props.localState.authenticated && props.localState.user) {
      props.history.push('/newsfeed')
    }
    props.history.push('/register')
  }
  function gameGetter() {
    if (props.localState.authenticated) {
      if (props.rawgState.games.length === 0) {
        props.storeGames()
      }
      // if (props.rawgState.games.length > 0) {
      //   props.rawgState.games.map(async (game) => {
      //     await createPost(game)
      //   })
      //   props.fetchPosts()
      // }
    }
  }
  // useEffect(() => {
  // if (props.localState.gameposts.length === 0) {
  // }
  // }, [])
  gameGetter()

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
