import grabGames from '../../services/rawgServices'

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
