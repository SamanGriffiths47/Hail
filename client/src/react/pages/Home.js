import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = ({ localState }) => {
  return {
    localState
  }
}

function Home(props) {
  if (props.authenticated && props.user) {
    function handleChange() {
      props.history.push('/newsfeed')
    }
  }
  function handleChange() {
    props.history.push('/register')
  }
  return (
    <div className="homeContainer">
      <button>
        <Link to={handleChange}>Let's Go!</Link>
      </button>
    </div>
  )
}

export default connect(mapStateToProps)(Home)
