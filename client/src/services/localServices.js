import axios from 'axios'

import Client from './api.js'
async function grabGamePosts() {
  try {
    const res = await Client.get('/gameposts')
    console.log(res.data)
    return res.data
  } catch (error) {
    throw error
  }
}

export default grabGamePosts
