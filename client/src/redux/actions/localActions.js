import { connect } from 'react-redux'
import toggleFunc from '../../services/localServices'
import { TOGGLE_AUTH } from '../types'

const mapStateToProps = ({ localState }) => {
  return {
    localState
  }
}

function toggleAuth(props) {
  return async (dispatch) => {
    try {
      const auth = await toggleFunc(props)
      dispatch({ type: TOGGLE_AUTH, payload: auth })
    } catch (error) {
      throw error
    }
  }
}

export default connect(mapStateToProps)(toggleAuth)
