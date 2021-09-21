import { connect } from 'react-redux'
import saveGames from './redux/actions/rawgActions'
import { useEffect } from 'react'
import { Route, Switch } from 'react-router'
import './CSS/App.css'
import Nav from './react/components/Nav'

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
      <Nav
        authenticated={authenticated}
        user={user}
        handleLogOut={handleLogOut}
      />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signin" component={(props) => <SignIn {...props} />} />
          <Route path="/register" component={Register} />
          {user && authenticated && (
            <ProtectedRoute
              authenticated={authenticated}
              user={user}
              path="/newsfeed"
              component={newsFeed}
            />
          )}
        </Switch>
      </main>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
