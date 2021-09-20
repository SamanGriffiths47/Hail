import grabGames from '../../services/rawgServices'
import { GET_GAMES } from '../types'

export default function saveGames() {
  return async (dispatch) => {
    try {
      const games = await grabGames()
      dispatch({ type: GET_GAMES, payload: games })
    } catch (error) {
      throw error
    }
  }
}
