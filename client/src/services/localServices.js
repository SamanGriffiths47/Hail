import axios from 'axios'
import { connect } from 'react-redux'

const mapStateToProps = ({ localState }) => {
  return {
    localState
  }
}

function toggleFunc(props) {
  try {
    let auth = false
    props.localState ? (auth = false) : (auth = true)
    return auth
  } catch (error) {
    throw error
  }
}

export default connect(mapStateToProps)(toggleFunc)
