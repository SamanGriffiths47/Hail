import Axios from 'axios'

//Database Auth
export const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? `${window.location.origin}/api`
    : 'http://localhost:3001/api'
export const Client = Axios.create({ baseURL: BASE_URL })

// Intercepts every request axios makes
Client.interceptors.request.use(
  (config) => {
    // Reads the token in localstorage
    const token = localStorage.getItem('token')
    // if the token exists, we set the authorization header
    if (token) {
      config.headers['authorization'] = `Bearer ${token}`
    }
    return config // We return the new config if the token exists or the default config if no token exists.
    // Provides the token to each request that passes through axios
  },
  (error) => Promise.reject(error)
)
export default Client

//RAWG Auth
export const RAWG_URL = `https://api.rawg.io/api`
export const RAWG_KEY = process.env.REACT_APP_KEY
