import { RAWG_KEY, RAWG_URL } from './api'
import axios from 'axios'

export async function grabGames() {
  try {
    const res = await axios.get(`${RAWG_URL}/games?key=${RAWG_KEY}`)
    return res.data.results
  } catch (error) {
    throw error
  }
}

export async function grabDescription(id) {
  try {
    const res = await axios.get(`${RAWG_URL}/games/${id}?key=${RAWG_KEY}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export async function gameQuery(query) {
  try {
    const res = await axios.get(
      `${RAWG_URL}/games?key=${RAWG_KEY}&search=${query}`
    )
    return res.data.results
  } catch (error) {
    throw error
  }
}
