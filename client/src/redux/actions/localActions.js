import { connect } from 'react-redux'
import { CheckSession } from '../../services/auth'
<<<<<<< HEAD
import grabGamePosts from '../../services/localServices'
=======
import { grabGamePosts } from '../../services/localServices'
>>>>>>> af1a5d523b355c082e8a861b9cd19c58e267b93f
import { GET_POSTS, SET_USER_STATE, TOGGLE_AUTH } from '../types'

export function authToggle(boolean) {
  return async (dispatch) => {
    try {
      dispatch({ type: TOGGLE_AUTH, payload: boolean })
    } catch (error) {
      throw error
    }
  }
}

export function setUser() {
  return async (dispatch) => {
    try {
      const session = await CheckSession()
      dispatch({ type: SET_USER_STATE, payload: session })
    } catch (error) {
      throw error
    }
  }
}

export function getPosts() {
  return async (dispatch) => {
    try {
      const posts = await grabGamePosts()
      dispatch({ type: GET_POSTS, payload: posts })
    } catch (error) {
      throw error
    }
  }
}
<<<<<<< HEAD
export default getPosts
//export default authToggle(setUser)
=======
>>>>>>> af1a5d523b355c082e8a861b9cd19c58e267b93f
