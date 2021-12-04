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
    if (props.localState.authenticated) {
      return (
        <nav className="home-protected flexRow">
          <Search />
          <Link to="/" id="navHome">
            Home
          </Link>
          <Link to="/" id="userPage">
            User Page
          </Link>
          <Link to="/newsfeed" id="newsfeed">
            Newsfeed
          </Link>
        </nav>
      )
    } else {
      return (
        <nav className="home-open flexRow">
          {/* <Search /> */}
          <Link to="/" id="navHome">
            Home
          </Link>
        </nav>
      )
    }
  }

  return <nav>{authorized()}</nav>
}

export default connect(mapStateToProps)(Nav)
