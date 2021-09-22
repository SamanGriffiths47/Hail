import { SET_USER_STATE, TOGGLE_AUTH, GET_POSTS } from '../types'

const iState = {
  authenticated: false,
  user: null,
  gameposts: []
}

export default function localReducer(state = iState, action) {
  switch (action.type) {
    case TOGGLE_AUTH:
      return { ...state, authenticated: action.payload }
    case SET_USER_STATE:
      return { ...state, user: action.payload }
    case GET_POSTS:
      return { ...state, gameposts: action.payload }
    default:
      return { ...state }
  }
}
