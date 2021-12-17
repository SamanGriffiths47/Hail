import { setUser } from '../redux/actions/localActions'
import Client from './api'

export const SignInUser = async (data) => {
  try {
    // Set the current signed in users token to localstorage
    return Client.post('/auth/login', data)
  } catch (error) {
    return null
  }
}

export const RegisterUser = async (data) => {
  try {
    const res = await Client.post('/auth/register', data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const CheckSession = () => {
  return Client.get('/auth/session').catch((error) => {
    return { data: false }
  })
}
// export const CheckSession = async () => {
//   try {
//     const res = await Client.get('/auth/session')
//     return res.data
//   } catch (error) {
//     return false
//   }
// }
