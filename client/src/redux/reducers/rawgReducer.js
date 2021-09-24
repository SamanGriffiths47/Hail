const { GET_GAMES } = require('../types')

const iState = {
  games: []
}

export default function rawgReducer(state = iState, action) {
  switch (action.type) {
    case GET_GAMES:
      return { ...state, games: action.payload }
    default:
      return { ...state }
  }
}
