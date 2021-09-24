import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import logo from '../../a-img/hail_app_logo.png'

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
    <div className="homeContainer flexRow">
      <img className="homeLogo" src={logo} alt="Hail Brand Logo" />
      <button id="homebutton" onClick={handleClick}>
        Let's Go!
      </button>
    </div>
  )
}

export default connect(mapStateToProps)(Home)
