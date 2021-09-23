import {
  SET_USER_STATE,
  TOGGLE_AUTH,
  GET_POSTS,
  GET_COMMENTS,
  POST_COMMENTS
} from '../types'

const iState = {
  authenticated: false,
  user: null,
  gameposts: [],
  comments: []
}

export default function localReducer(state = iState, action) {
  switch (action.type) {
    case TOGGLE_AUTH:
      return { ...state, authenticated: action.payload }
    case SET_USER_STATE:
      return { ...state, user: action.payload }
    case GET_POSTS:
      return { ...state, gameposts: action.payload }
    case GET_COMMENTS:
      return { ...state, comments: action.payload }
    case POST_COMMENTS:
      return { ...state }
    default:
      return { ...state }
  }
}
