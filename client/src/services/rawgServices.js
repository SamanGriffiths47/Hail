import { RAWG_KEY, RAWG_URL } from './api'
import axios from 'axios'

async function grabGames() {
  try {
    const res = await axios.get(`${RAWG_URL}/games?key=${RAWG_KEY}`)
    return res.data.results
  } catch (error) {
    throw error
  }
}

async function grabDescription(id) {}

export default grabGames(grabDescription)
