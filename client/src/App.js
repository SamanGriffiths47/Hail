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
import { createPost, gamePostsByName } from './services/localServices'
import { grabDescription } from './services/rawgServices'

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
    storeGames: async () => dispatch(await requestGames())
  }
}

function App(props) {
  const games = props.rawgState.games
  const authenticated = props.localState.authenticated
  const user = props.localState.user
  const history = useHistory()
  const token = localStorage.getItem('token')

  async function gameGetter() {
    if (games.length === 0) {
      await props.storeGames()
    }
  }

  const checkToken = async () => {
    if (token) {
      await props.userSet()
      await props.toggleAuth(true)
    } else {
      if (!['/signin', '/register', '/'].includes(history.location.pathname)) {
        history.push('/')
      }
    }
  }

  async function gamePostEngine() {
    if (games.length > 0) {
      games.forEach(async (game) => {
        const search = await gamePostsByName(game.name)
        if (search.length === 0) {
          const deets = await grabDescription(game.id)
          game.description = deets.description_raw
          await createPost(game)
        }
      })
      await props.fetchPosts()
    } else {
      await props.fetchPosts()
    }
  }

  useEffect(() => {
    checkToken()
  }, [token])

  useEffect(() => {
    gameGetter()
  }, [authenticated])

  useEffect(() => {
    gamePostEngine()
  }, [games])

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
          <Route path="/newsfeed" component={Newsfeed} />
        </Switch>
      </main>
    </div>
  )
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
