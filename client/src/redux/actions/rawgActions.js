import { connect } from 'react-redux'
import grabGamePosts, { createPost } from '../../services/localServices'
import grabGames, {
  grabDescription,
  grabTrailers
} from '../../services/rawgServices'
import { GET_GAMES } from '../types'

export default function saveGames(user) {
  return async (dispatch) => {
    try {
      const games = []
      async function additions(game, id) {
        const deets = await grabDescription(id)
        game.description = deets.description_raw
        return game
      }

      const grab = await grabGames()

      async function postCreate(game) {
        console.log(await createPost(game))
      }
      console.log(user)
      grab.map((game) => {
        additions(game, game.id)
        const gamepost = {
          image: game.background_image,
          description: game.description,
          title: game.name,
          user_Id: user.id
        }
        return postCreate(gamepost)
      })

      grabGamePosts()

      dispatch({ type: GET_GAMES, payload: games })
    } catch (error) {
      throw error
    }
  }
}
