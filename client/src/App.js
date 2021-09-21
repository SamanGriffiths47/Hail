import { connect } from 'react-redux'
import saveGames from './redux/actions/rawgActions'
import { useEffect } from 'react'
import './css/App.css'
import Nav from './react/components/Nav'

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
      <Nav />
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
