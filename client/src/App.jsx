import { connect } from 'react-redux'
import { useEffect } from 'react'
import './css/App.css'
import Nav from './react/components/Nav'
import { Route, Switch, useHistory } from 'react-router'
import Signin from './react/pages/Signin'
import Newsfeed from './react/pages/Newsfeed'
import Register from './react/pages/Register'
import Home from './react/pages/Home'
import { authChain, authToggle, getPosts, newsfeedChain, setUser } from './redux/actions/localActions'
import PostDetail from './react/pages/PostDetail'
import requestGames from './redux/actions/rawgActions'
import SearchFeed from './react/pages/SearchFeed'
import UserPage from './react/pages/UserPage'
import { CheckSession } from './services/auth'
import { grabGamePosts } from './services/localServices'
import { grabGames } from './services/rawgServices'

const mapStateToProps = (state) => {
  return {
    ...state
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    authChain: (boolean) => dispatch(authChain(boolean)),
    newsfeedChain: () => dispatch(newsfeedChain()),
    userSet: () => dispatch(setUser()),
    toggleAuth: (boolean) => dispatch(authToggle(boolean)),
    fetchPosts: () => dispatch(getPosts())
  }
}

function App(props) {
  const games = props.gamePosts
  const history = useHistory()
  const token = localStorage.getItem('token')

  
  useEffect(() => {
    function checkToken () {
      if (token) {
        props.authChain(true).then(tokenIs => {
          if(tokenIs){
            // if(/^\/gamepost\/.+$/m.test(history.location.pathname)){
            //   const gameList = []
            //   props.gamePosts.forEach(game => gameList.push(game.title))
            //   console.log(gameList)
            //   props.newsfeedChain(gameList)
            // }
          }else{
            if (!['/signin', '/register', '/'].includes(history.location.pathname)) {
              history.push('/')
            }
          }
        })
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
          <Route path="/gamepost/:post_Id" render={(props) => <PostDetail {...props} />} />
          <Route path="/newsfeed" render={(props) => <Newsfeed {...props} />} />
        </Switch>
      </main>
    </div>
  )
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
