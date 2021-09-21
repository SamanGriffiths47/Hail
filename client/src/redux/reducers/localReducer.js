import { TOGGLE_AUTH } from '../types'

const iState = {
  authorized: false
}

export default function localReducer(state = iState, action) {
  switch (action.type) {
    case TOGGLE_AUTH:
      return { ...state, authorized: action.payload }
    default:
      return { ...state }
  }
}
