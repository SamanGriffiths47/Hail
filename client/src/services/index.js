import Axios from 'axios'

//Database Auth
export const DB_URL = 'http://localhost:3001'
export const dbClient = Axios.create({ baseURL: DB_URL })

dbClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers['authorization'] = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

//RAWG Auth
export const RAWG_URL = `https://api.rawg.io/api/genres?key=${process.env.REACT_APP_KEY}`
