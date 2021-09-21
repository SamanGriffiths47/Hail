import axios from 'axios'
import axios from 'axios'

import Client from './'
export default async function grabGamePosts() {
  try {
    const res = await Client.get('/gameposts')
    console.log(res)
    return res
  } catch (error) {
    throw error
  }
}
