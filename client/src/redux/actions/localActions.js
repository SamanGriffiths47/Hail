import { CheckSession } from '../../services/auth'
import {
  grabGamePosts,
  grabCommentByPostId
} from '../../services/localServices'
import { GET_POSTS, SET_USER_STATE, TOGGLE_AUTH, GET_COMMENTS } from '../types'

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

export default getPosts

export function getComments(postid) {
  return async (dispatch) => {
    try {
      const comment = await grabCommentByPostId(postid)
      console.log(comment)
      dispatch({ type: GET_COMMENTS, payload: comment })
    } catch (error) {
      throw error
    }
  }
}
//export default authToggle(setUser)
