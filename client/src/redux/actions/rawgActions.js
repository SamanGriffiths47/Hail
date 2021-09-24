import { useEffect } from 'react'
import { createPost, gamePostsByName } from '../../services/localServices'
import { grabGames } from '../../services/rawgServices'
import { GET_GAMES } from '../types'

export default function storeGames(userId) {
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
          if (game.id === 3498) {
            const get = await gamePostsByName(game.name)
            console.log(get)
            return get
          }
        } catch (error) {
          throw error
          // if (get.length === 0) {
          //   const gamepost = {
          //     image: game.background_image,
          //     description: game.deqscription,
          //     title: game.name,
          //     user_Id: userId
          //   }
          //   postCreate(gamepost)
          // games.push(game)
          // console.log(games)
          // return games
          // }
          // } catch (error) {
          //   throw error
        }
      }

      async function postCreate(game) {
        try {
          const create = await createPost(game)
          return create
        } catch (error) {
          throw error
        }
      }

      grab.map((game) => {
        return byName(game)
      })

      dispatch({ type: GET_GAMES, payload: games })
    } catch (error) {
      throw error
    }
  }
}
