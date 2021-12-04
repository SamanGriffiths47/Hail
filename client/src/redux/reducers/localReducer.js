import {
  SET_USER_STATE,
  TOGGLE_AUTH,
  GET_POSTS,
  GET_COMMENTS,
  CHANGE_FORM
} from '../types'

const iState = {
  authenticated: false,
  user: null,
  gamePosts: [],
  comments: [],
  form: {
    city_state: '',
    country: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  }
}

export default function localReducer(state = iState, action) {
  switch (action.type) {
    case TOGGLE_AUTH:
      return { ...state, authenticated: action.payload }
    case SET_USER_STATE:
      return { ...state, user: action.payload }
    case GET_POSTS:
      return { ...state, gamePosts: action.payload }
    case GET_COMMENTS:
      return { ...state, comments: action.payload }
    case CHANGE_FORM:
      return { ...state, form: action.payload }
    default:
      return { ...state }
  }
}
