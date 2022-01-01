import Client from '../../services/api'
import { CheckSession } from '../../services/auth'
import {
  grabGamePosts,
  grabCommentByPostId,
  gameSearch,
  postById
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
import requestGames, { searchGames } from './rawgActions'

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
    const session = await Client.get('/auth/session')
    dispatch({ type: SET_USER_STATE, payload: session })
  }
}

export function userLogout() {
  return (dispatch) => {
    dispatch({ type: SET_USER_STATE, payload: null })
  }
}

export function getPosts() {
  return async (dispatch) => {
    const posts = await grabGamePosts()
    dispatch({ type: GET_POSTS, payload: posts })
  }
}

export function emptyPosts() {
  return async (dispatch) => {
    try {
      const posts = {}
      await dispatch({ type: GET_POSTS, payload: posts })
    } catch (error) {
      throw error
    }
  }
}

export function queryPosts(query) {
  return async (dispatch) => {
    try {
      const posts = await gameSearch(query)
      await dispatch({ type: GET_POSTS, payload: posts })
    } catch (error) {
      throw error
    }
  }
}

export function updateQuery(query) {
  return async (dispatch) => {
    try {
      await dispatch({ type: UPDATE_QUERY, payload: query })
    } catch (error) {
      throw error
    }
  }
}
export function updateSearch(query) {
  return async (dispatch) => {
    try {
      await dispatch({ type: UPDATE_SEARCH, payload: query })
    } catch (error) {
      throw error
    }
  }
}

export function getComments(postid, index) {
  return async (dispatch) => {
    return new Promise((resolve) => {
      grabCommentByPostId(postid).then((comments) => {
        dispatch({
          type: UPDATE_COMMENTS,
          payload: { comments: comments.data, index: index }
        })
        resolve(comments.data)
      })
    })
  }
}

// Thunk Chains
export function authChain(boolean) {
  return async (dispatch) => {
    return new Promise(async (resolve) => {
      await CheckSession().then((res) => {
        if (res.data) {
          dispatch({
            type: SET_USER_STATE,
            payload: res.data
          })
          dispatch({
            type: TOGGLE_AUTH,
            payload: boolean
          })
          resolve(true)
        } else {
          resolve(false)
        }
      })
    })
  }
}

export function newsfeedChain(gameList) {
  return async (dispatch) => {
    return new Promise(async (resolve) => {
      await requestGames(gameList).then(async (_) => {
        if (_) {
          grabGamePosts().then((posts) => {
            dispatch({ type: GET_POSTS, payload: posts.data })
            resolve(posts.data)
          })
        } else {
          resolve([])
        }
      })
    })
  }
}

export function searchFeedChain(query, gameList) {
  return async (dispatch) => {
    return new Promise(async (resolve) => {
      if (/^(?!.*_.*)[\w]+$/.test(query)) {
        await searchGames(query, gameList).then((_) => {
          if (_) {
            gameSearch(query)
              .then((posts) => {
                dispatch({ type: GET_POSTS, payload: posts.data })
                resolve(posts.data)
              })
              .catch((_) => resolve([]))
          } else {
            resolve([])
          }
        })
      } else {
        resolve(null)
      }
    })
  }
}

export function searchChain(query) {
  return async (dispatch) => {
    return new Promise((resolve) => {
      dispatch({ type: UPDATE_SEARCH, payload: '' })
      resolve(query)
    })
  }
}

export function byIdChain(post_Id) {
  return async (dispatch) => {
    return new Promise((resolve) => {
      postById(post_Id).then((post) => {
        dispatch({ type: GET_POSTS, payload: [post.data] })
        resolve(post.data)
      })
    })
  }
}
