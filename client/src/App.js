import { connect } from 'react-redux'
import saveGames from './redux/actions/rawgActions'
import { useEffect } from 'react'
import './css/App.css'
import Nav from './react/components/Nav'
import { Redirect, Route, Switch } from 'react-router'
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
  const authenticated = props.localState.authenticated
  const user = props.localState.user
  const token = localStorage.getItem('token')

  const checkToken = async () => {
    if (token) {
      await props.userSet()
      await props.toggleAuth(true)
      return true
    }
    return true
  }

  useEffect(() => {
    props.fetchGames()
  }, [])
  return (
    <div className="App">
      <Nav />

      <main>
        <Switch>
          <Route exact path="/" render={(props) => <Home {...props} />} />
          <Route path="/signin" render={(props) => <Signin {...props} />} />
          <Route path="/register" render={(props) => <Register {...props} />} />
          <Route
            path="/gamepost/:post_Id"
            render={(props) => <PostDetail {...props} />}
          />
          {token && (
              <ProtectedRoute
                path="/newsfeed"
                user={user}
                authenticated={authenticated}
                component={Newsfeed}
              />
            ) && <ProtectedRoute />}
        </Switch>
      </main>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
