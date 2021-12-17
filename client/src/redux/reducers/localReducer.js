import {
  SET_USER_STATE,
  TOGGLE_AUTH,
  GET_POSTS,
  GET_COMMENTS,
  CHANGE_FORM,
  UPDATE_COMMENTS,
  UPDATE_QUERY,
  UPDATE_SEARCH,
  SEARCH_RETURN
} from '../types'

const iState = {
  authenticated: false,
  user: null,
  gamePosts: [],
  comments: [],
  searchReturn: [],
  search: '',
  query: '',
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
    case UPDATE_COMMENTS:
      state.gamePosts[action.payload.index].post_comments =
        action.payload.comments
      return { ...state }
    case SEARCH_RETURN:
      return { ...state, searchReturn: action.payload }
    case UPDATE_SEARCH:
      return { ...state, search: action.payload }
    case UPDATE_QUERY:
      return { ...state, query: action.payload }
    default:
      return { ...state }
  }
}
