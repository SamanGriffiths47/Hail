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
import { CheckSession } from './services/auth'

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

  const checkToken = async () => {
    const session = await CheckSession()
    console.log(session)
    await props.toggleAuth(true)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
    props.fetchGames()
    props.userSet()
    props.fetchGames()
    checkToken()
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
<<<<<<< HEAD
          {token && (
            <ProtectedRoute
              path="/newsfeed"
              user={user}
              authenticated={authenticated}
              component={Newsfeed}
            />
          )}
=======
          {/* <Route exact path="/" component={Home} />
          <Route path="/signin" component={Signin} />
          <Route path="/register" component={Register} />
          <Route path="/gamepost/:post_Id" component={() => <PostDetail />} /> */}
          {user && (
              <ProtectedRoute
                path="/newsfeed"
                user={user}
                authenticated={authenticated}
                component={Newsfeed}
              />
            ) && <ProtectedRoute />}
>>>>>>> d96d958bffb829af4008d23d415b6cc40bd28fba
        </Switch>
      </main>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
