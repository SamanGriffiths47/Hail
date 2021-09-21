import axios from 'axios'
import Client from './api'

export async function grabGamePosts() {
  try {
    const res = await Client.get('/gameposts')
    console.log(res)
    return res
  } catch (error) {
    throw error
  }
}
