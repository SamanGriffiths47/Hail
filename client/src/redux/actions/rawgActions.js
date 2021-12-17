import {
  grabGames,
  grabDescription,
  gameQuery
} from '../../services/rawgServices'
import { createPost, gamePostsByName } from '../../services/localServices'

// export async function searchGames(query) {
//   const grab = await gameQuery(query)
//   grab.forEach(async (game) => {
//     const search = await gamePostsByName(game.name)
//     if (search.length === 0) {
//       const deets = await grabDescription(game.id)
//       game.description = deets.description_raw
//       await createPost(game)
//       console.log('GAME', game.name)
//     }
//   })

function gameFilter(rawgRes, resolve, gameList) {
  if (rawgRes) {
    if (rawgRes.data.results.length > 0) {
      let count = 0
      const endLoop = () => {
        count += 1
        count === rawgRes.data.results.length && resolve(true)
      }

      rawgRes.data.results.forEach((game) => {
        if (!gameList.includes(game.name)) {
          gamePostsByName(game.name).then((localRes) => {
            if (localRes.data.length === 0) {
              grabDescription(game.id).then((details) => {
                game.description = details.data.description_raw
                createPost(game)
                endLoop()
              })
            } else {
              endLoop()
            }
          })
        } else {
          endLoop()
        }
      })
    } else {
      resolve(false)
    }
  } else {
    resolve(rawgRes)
  }
}

export async function searchGames(query, gameList) {
  return new Promise(async (resolve) => {
    await gameQuery(query).then((rawgRes) => {
      gameFilter(rawgRes, resolve, gameList)
    })
  })
}

export default function requestGames(gameList) {
  return new Promise(async (resolve) => {
    await grabGames().then((rawgRes) => {
      gameFilter(rawgRes, resolve, gameList)
    })
  })
}

// export default async function requestGames() {
//   const grab = await grabGames()
//   grab.forEach(async (game) => {
//     const search = await gamePostsByName(game.name)
//     if (search.length === 0) {
//       const deets = await grabDescription(game.id)
//       game.description = deets.description_raw
//       await createPost(game)
//     }
//   })
// }
