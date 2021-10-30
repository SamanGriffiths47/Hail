import { connect } from 'react-redux'
import { useEffect, useState } from 'react'
import './css/App.css'
import Nav from './react/components/Nav'
import { Route, Switch } from 'react-router'
import ProtectedRoute from './react/components/ProtectedRoute'
import Signin from './react/pages/Signin'
import Newsfeed from './react/pages/Newsfeed'
import Register from './react/pages/Register'
import Home from './react/pages/Home'
import {
  authToggle,
  boolSwitch,
  getPosts,
  postCreate,
  setUser
} from './redux/actions/localActions'
import PostDetail from './react/pages/PostDetail'
import storeGames from './redux/actions/rawgActions'

const mapStateToProps = ({ rawgState, localState }) => {
  return {
    rawgState,
    localState
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    userSet: () => dispatch(setUser()),
    toggleAuth: (boolean) => dispatch(authToggle(boolean)),
    fetchPosts: () => dispatch(getPosts()),
    storePosts: (user) => dispatch(storeGames(user)),
    creation: (game) => dispatch(postCreate(game)),
    swap: (boolean) => dispatch(boolSwitch(boolean))
  }
}

function App(props) {
  const [checked, togglechecked] = useState(true)
  function checkedToggle() {
    checked ? togglechecked(false) : togglechecked(true)
  }
  const { newPosts } = props.localState
  const { games } = props.rawgState
  const token = localStorage.getItem('token')
  const authenticated = props.localState.authenticated
  const user = props.localState.user
  const checkToken = async () => {
    await props.toggleAuth(true)
    await props.userSet()
    togglechecked()
  }

  useEffect(() => {
    if (token) {
      checkToken()
    }
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
          {user && (
            <ProtectedRoute
              path="/newsfeed"
              user={user}
              authenticated={authenticated}
              component={Newsfeed}
            />
          )}
        </Switch>
      </main>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
