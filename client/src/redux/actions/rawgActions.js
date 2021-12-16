import {
  grabGames,
  grabDescription,
  gameQuery
} from '../../services/rawgServices'
import { createPost, gamePostsByName } from '../../services/localServices'

export default async function requestGames() {
  const grab = await grabGames()
  grab.forEach(async (game) => {
    const search = await gamePostsByName(game.name)
    if (search.length === 0) {
      const deets = await grabDescription(game.id)
      game.description = deets.description_raw
      await createPost(game)
    }
  })
}
export async function searchGames(query) {
  const grab = await gameQuery(query)
  grab.forEach(async (game) => {
    const search = await gamePostsByName(game.name)
    if (search.length === 0) {
      const deets = await grabDescription(game.id)
      game.description = deets.description_raw
      await createPost(game)
      console.log('GAME', game.name)
    }
  })
}
