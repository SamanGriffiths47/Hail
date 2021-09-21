import { connect } from 'react-redux'
import saveGames from './redux/actions/rawgActions'
import { useEffect } from 'react'
import './css/App.css'
import Nav from './react/components/Nav'
import { Route, Switch } from 'react-router'
import ProtectedRoute from './react/components/ProtectedRoute'
import Signin from './react/pages/Signin'
import Newsfeed from './react/pages/Newsfeed'
import Register from './react/pages/Register'
import Home from './react/pages/Home'

const mapStateToProps = ({ rawgState, localState }) => {
  return {
    rawgState,
    localState
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchGames: () => dispatch(saveGames())
  }
}

function App(props) {
  function getGames() {
    props.fetchGames()
  }

  useEffect(() => {
    getGames()
  }, [])
  return (
    <div className="App">
      <Nav />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signin" component={Signin} />
          <Route path="/register" component={Register} />
          {/* {props.localState.user && props.localState.authenticated && ( */}
          {/* <Protected */}
          <Route path="/newsfeed" component={Newsfeed} />
          {/* )} */}
        </Switch>
      </main>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
