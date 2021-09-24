import { gamePostsByName } from '../../services/localServices'
import { grabDescription, grabGames } from '../../services/rawgServices'
import { GET_GAMES } from '../types'

export default function storeGames(userId) {
  if (userId !== null && userId !== undefined) {
    return async (dispatch) => {
      try {
        const games = []

        function additions(game, id) {
          const deets = grabDescription(id)
          game.description = deets.description_raw
          game.user_Id = userId
          return game
        }

        const grab = await grabGames()
        function byName(game) {
          try {
            const get = gamePostsByName(game.name)
            get.then(function (result) {
              console.log(result.length)
              if (result.length >= 1) {
                return games
              } else {
                games.push(game)
                return games
              }
            })
          } catch (error) {
            throw error
          }
        }

        grab.map((game) => {
          try {
            additions(game, game.id)

            return byName(game)
          } catch (error) {
            throw error
          }
        })

        dispatch({ type: GET_GAMES, payload: games })
      } catch (error) {
        throw error
      }
    }
  }
}
