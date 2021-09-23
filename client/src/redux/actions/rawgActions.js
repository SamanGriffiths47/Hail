import grabGames, {
  grabDescription,
  grabTrailers
} from '../../services/rawgServices'
import { GET_GAMES } from '../types'

export default function saveGames() {
  return async (dispatch) => {
    try {
      const games = []
      async function additions(game, id) {
        const deets = await grabDescription(id)
        game.description = deets.description_raw
        return game
      }

      const grab = await grabGames()

      grab.map((game) => {
        additions(game, game.id)
        games.push(game)
        return games
      })
      console.log('games', games)

      dispatch({ type: GET_GAMES, payload: games })
    } catch (error) {
      throw error
    }
  }
}
