import { connect } from 'react-redux'
import {
  grabGamePosts,
  createPost,
  gamePostsByName
} from '../../services/localServices'
import { grabGames, grabDescription } from '../../services/rawgServices'
import { GET_GAMES } from '../types'

export function storeGames(userId) {
  return async (dispatch) => {
    try {
      const games = []

      async function additions(game, id) {
        const deets = await grabDescription(id)
        game.description = deets.description_raw
        return game
      }

      console.log('hi')

      const grab = await grabGames()
      console.log('h')
      async function byName(game) {
        const get = await gamePostsByName(game.name)
        if (get.length === 0) {
          additions(game, game.id)
          const gamepost = {
            image: game.background_image,
            description: game.deqscription,
            title: game.name,
            user_Id: userId
          }
          postCreate(gamepost)
          games.push(game)
          console.log(games)
          return games
        }
      }

      async function postCreate(game) {
        try {
          await createPost(game)
        } catch (error) {
          throw error
        }
      }

      grab.map((game) => {
        byName(game)
      })

      dispatch({ type: GET_GAMES, payload: games })
    } catch (error) {
      throw error
    }
  }
}
