import { CheckSession } from '../../services/auth'
import {
  grabGamePosts,
  grabCommentByPostId,
  gameSearch
} from '../../services/localServices'
import {
  GET_POSTS,
  SET_USER_STATE,
  TOGGLE_AUTH,
  CHANGE_FORM,
  UPDATE_COMMENTS,
  UPDATE_QUERY,
  UPDATE_SEARCH
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
export function userLogout() {
  return async (dispatch) => {
    try {
      dispatch({ type: SET_USER_STATE, payload: null })
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
export function emptyPosts() {
  return async (dispatch) => {
    try {
      const posts = {}
      dispatch({ type: GET_POSTS, payload: posts })
    } catch (error) {
      throw error
    }
  }
}

export function queryPosts(query) {
  return async (dispatch) => {
    try {
      const posts = await gameSearch(query)
      dispatch({ type: GET_POSTS, payload: posts })
    } catch (error) {
      throw error
    }
  }
}

export function updateQuery(query) {
  return async (dispatch) => {
    try {
      dispatch({ type: UPDATE_QUERY, payload: query })
    } catch (error) {
      throw error
    }
  }
}
export function updateSearch(query) {
  return async (dispatch) => {
    try {
      dispatch({ type: UPDATE_SEARCH, payload: query })
    } catch (error) {
      throw error
    }
  }
}

export function getComments(postid, index) {
  return async (dispatch) => {
    try {
      const comments = await grabCommentByPostId(postid)
      dispatch({
        type: UPDATE_COMMENTS,
        payload: { comments: comments, index: index }
      })
    } catch (error) {
      throw error
    }
  }
}
