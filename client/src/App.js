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
import { setUser, authToggle } from './redux/actions/localActions'
import PostDetail from './react/pages/PostDetail'

const mapStateToProps = ({ rawgState, localState }) => {
  return {
    rawgState,
    localState
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchGames: () => dispatch(saveGames()),
    userSet: () => dispatch(setUser()),
    toggleAuth: (boolean) => dispatch(authToggle(boolean))
  }
}

function App(props) {
  const checkToken = async () => {
    const token = localStorage.getItem('token')
    if (token) {
      props.userSet()
      props.toggleAuth(true)
    }
  }

  useEffect(() => {
    props.fetchGames()
  }, [])
  return (
    <div className="App">
      <Nav />

      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signin" component={Signin} />
          <Route path="/register" component={Register} />
          <Route
            path="/gamepost/:post_Id"
            component={(routerProps) => <PostDetail {...routerProps} />}
          />
          {/* <Route path="/newsfeed" component={Newsfeed} /> */}

          {props.localState.user && props.localState.authenticated && (
            <ProtectedRoute
              path="/newsfeed"
              user={props.localState.user}
              authenticated={props.localState.authenticated}
              component={Newsfeed}
            />
          )}
        </Switch>
      </main>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
