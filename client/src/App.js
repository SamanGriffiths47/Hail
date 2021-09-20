import { connect } from 'react-redux'
import saveGames from './redux/actions/rawgActions'
import { useEffect } from 'react'
import './css/App.css'

const mapStateToProps = ({ rawgState }) => {
  return {
    rawgState
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
      <header className="App-header"></header>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
