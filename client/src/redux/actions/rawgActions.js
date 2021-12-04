import { grabGames } from '../../services/rawgServices'
import { GET_GAMES } from '../types'

export default function requestGames() {
  return async function (dispatch) {
    const grab = await grabGames()
    dispatch({ type: GET_GAMES, payload: grab })
  }
}
