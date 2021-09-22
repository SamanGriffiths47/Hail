import axios from 'axios'
<<<<<<< HEAD

import Client from './api.js'
async function grabGamePosts() {
=======
import Client from './api'

export async function grabGamePosts() {
>>>>>>> af1a5d523b355c082e8a861b9cd19c58e267b93f
  try {
    const res = await Client.get('/gameposts')
    console.log(res.data)
    return res.data
  } catch (error) {
    throw error
  }
}

export default grabGamePosts
