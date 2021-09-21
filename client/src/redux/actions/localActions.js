import { connect } from 'react-redux'
import { CheckSession } from '../../services/auth'
import { toggleFunc, grabGamePosts } from '../../services/localServices'
import { GET_POSTS, SET_USER_STATE, TOGGLE_AUTH } from '../types'

function authToggle(boolean) {
  return async (dispatch) => {
    try {
      dispatch({ type: TOGGLE_AUTH, payload: boolean })
    } catch (error) {
      throw error
    }
  }
}

function setUser() {
  return async (dispatch) => {
    try {
      const session = await CheckSession()
      dispatch({ type: SET_USER_STATE, payload: session })
    } catch (error) {
      throw error
    }
  }
}

function getPosts() {
  return async (dispatch) => {
    try {
      const posts = await grabGamePosts()
      dispatch({ type: GET_POSTS, payload: posts })
    } catch (error) {
      throw error
    }
  }
}
export default getPosts
export default authToggle(setUser)
