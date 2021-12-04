import { CheckSession } from '../../services/auth'
import {
  grabGamePosts,
  grabCommentByPostId
} from '../../services/localServices'
import {
  GET_POSTS,
  SET_USER_STATE,
  TOGGLE_AUTH,
  GET_COMMENTS,
  CHANGE_FORM
} from '../types'

export function authToggle(boolean) {
  return (dispatch) => {
    dispatch({ type: TOGGLE_AUTH, payload: boolean })
  }
}

export function changeForm(formValues) {
  return (dispatch) => {
    dispatch({ type: CHANGE_FORM, payload: formValues })
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

export function getComments(postid) {
  return async (dispatch) => {
    try {
      const comment = await grabCommentByPostId(postid)
      dispatch({ type: GET_COMMENTS, payload: comment })
    } catch (error) {
      throw error
    }
  }
}
