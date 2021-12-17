import { RAWG_KEY, RAWG_URL } from './api'
import axios from 'axios'
import { createPost, gamePostsByName } from './localServices'

export function grabGames() {
  try {
    return axios.get(`${RAWG_URL}/games?key=${RAWG_KEY}`)
  } catch (error) {
    return false
  }
}
// export async function grabGames() {
//   try {
//     const res = await axios.get(`${RAWG_URL}/games?key=${RAWG_KEY}`)
//     return res.data.results
//   } catch (error) {
//     throw error
//   }
// }

export function grabDescription(id) {
  try {
    return axios.get(`${RAWG_URL}/games/${id}?key=${RAWG_KEY}`)
  } catch (error) {
    return { data: '' }
  }
}
// export async function grabDescription(id) {
//   try {
//     const res = await axios.get(`${RAWG_URL}/games/${id}?key=${RAWG_KEY}`)
//     return res.data
//   } catch (error) {
//     throw error
//   }
// }

export async function gameQuery(query) {
  try {
    return axios.get(`${RAWG_URL}/games?key=${RAWG_KEY}&search=${query}`)
  } catch (error) {
    return false
  }
}
