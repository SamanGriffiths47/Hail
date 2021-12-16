import { connect } from 'react-redux'
import { useEffect } from 'react'
import './css/App.css'
import Nav from './react/components/Nav'
import { Route, Switch, useHistory } from 'react-router'
import Signin from './react/pages/Signin'
import Newsfeed from './react/pages/Newsfeed'
import Register from './react/pages/Register'
import Home from './react/pages/Home'
import { authToggle, getPosts, setUser } from './redux/actions/localActions'
import PostDetail from './react/pages/PostDetail'
import requestGames from './redux/actions/rawgActions'
import SearchFeed from './react/pages/SearchFeed'
import UserPage from './react/pages/UserPage'

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
    fetchPosts: () => dispatch(getPosts())
  }
}

function App(props) {
  const games = props.localState.gamePosts
  const history = useHistory()
  const token = localStorage.getItem('token')

  
  useEffect(() => {
    async function checkToken () {
      if (token) {
        await props.userSet()
        await props.toggleAuth(true)
        await requestGames()
        await props.fetchPosts()
      } else {
        if (!['/signin', '/register', '/'].includes(history.location.pathname)) {
          history.push('/')
        }
      }
    }
    checkToken()
  }, [token])

  return (
    <div className="App">
      <Nav history={history} {...props}/>

      <main>
        <Switch>
          <Route exact path="/" render={(props) => <Home {...props} />} />
          <Route path="/signin" render={(props) => <Signin {...props} />} />
          <Route path="/register" render={(props) => <Register {...props} />} />
          <Route path="/search/:query" render={(props) => <SearchFeed {...props} />} />
          <Route path="/userpage" render={(props) => <UserPage {...props} />} />
          {games.length && <Route
            path="/gamepost/:post_Id"
            render={(props) => <PostDetail {...props} />}
          />}
          <Route path="/newsfeed" render={(props) => <Newsfeed {...props} />} />
        </Switch>
      </main>
    </div>
  )
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
