import { RAWG_URL } from './api'

export default function grabGames() {
  try {
    const res = await axios.get(
      `https://api.rawg.io/api/genres?key=${process.env.REACT_APP_KEY}`
    )
    return res.data.results
  } catch (error) {
    throw error
  }
}
