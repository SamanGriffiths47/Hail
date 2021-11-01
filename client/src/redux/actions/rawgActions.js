import { gamePostsByName } from '../../services/localServices'
import { grabDescription, grabGames } from '../../services/rawgServices'
import { GET_GAMES } from '../types'

export default function storeGames() {
  return async (dispatch) => {
    try {
      const games = []

      // async function additions(game, id) {
      //   const deets = await grabDescription(id)
      //   game.description = deets.description_raw
      //   return game
      // }

      const grab = await grabGames()

      async function byName(game) {
        try {
          const get = await gamePostsByName(game.name)
          function sort(result) {
            if (result.length >= 1) {
              return games
            } else {
              games.push(game)
              return games
            }
          }
          sort(get)
        } catch (error) {
          throw error
        }
      }

      grab.map((game) => {
        // additions(game, game.id)
        return byName(game)
      })

      dispatch({ type: GET_GAMES, payload: games })
    } catch (error) {
      throw error
    }
  }
}
