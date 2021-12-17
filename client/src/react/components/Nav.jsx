import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Search from '../components/Search'

const mapStateToProps = (localState) => {
  return {
    localState
  }
}

function Nav(props) {
  return (
      <nav>
        {
        props.localState.authenticated ?
            <nav className="navBar flexRow">
        <Link to="/" id="navHome">
          Home
        </Link>
        <Link to='/userpage' id="userPage">
          User Page
        </Link>
        <Link to="/newsfeed" id="newsfeed">
          Newsfeed
        </Link>
        <Search {...props} /> 
        </nav> :
        <nav className="navBar flexRow">
        <Link to="/" id="navHome">
          Home
        </Link>
        </nav>
            }
      </nav>
  )
}

export default connect(mapStateToProps)(Nav)
