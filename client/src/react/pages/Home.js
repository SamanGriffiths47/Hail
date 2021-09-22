import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const mapStateToProps = ({ localState }) => {
  return {
    localState
  }
}

function Home(props) {
  function handleClick() {
    if (props.localState.authenticated && props.localState.user) {
      props.history.push('/newsfeed')
    }
    props.history.push('/register')
  }
  return (
    <div className="homeContainer">
      <button onClick={handleClick}>Let's Go!</button>
    </div>
  )
}

export default connect(mapStateToProps)(Home)
