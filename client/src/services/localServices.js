import axios from 'axios'
import Client from './api'

export async function grabGamePosts() {
  try {
    const res = await Client.get('/gameposts')
    return res.data
  } catch (error) {
    throw error
  }
}

export async function grabCommentByPostId(postid) {
  try {
    const res = await Client.get(`/comments/view/${postid}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export default grabGamePosts
