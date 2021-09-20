import Axios from 'axios'

export const DB_URL = 'http://localhost:3001'
export const dbClient = Axios.create({ baseURL: DB_URL })
export const rawgClient = Axios.create({
  baseURL: `https://api.themoviedb.org/3`,
  headers: { Authorization: `Bearer ${process.env.REACT_APP_KEY}` }
})

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
