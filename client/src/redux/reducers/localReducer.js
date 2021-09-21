import { SET_USER_STATE, TOGGLE_AUTH } from '../types'

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
    default:
      return { ...state }
  }
}
