import {
  SET_USER_STATE,
  TOGGLE_AUTH,
  GET_POSTS,
  GET_COMMENTS,
  POST_COMMENTS,
  CREATE_POST,
  SWAP
} from '../types'

const iState = {
  authenticated: false,
  user: null,
  gameposts: [],
  comments: [],
  newPosts: false,
  postsCreated: false
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
    case SWAP:
      return { ...state, newPosts: action.payload }
    case CREATE_POST:
      return { ...state, postsCreated: action.payload }
    default:
      return { ...state }
  }
}
