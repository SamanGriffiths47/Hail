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

export async function postComment(body) {
  try {
    const res = await Client.post(`/comments/create`, body, {
      headers: { 'Content-Type': 'application/json' }
    })
    console.log(res)
    return res.data
  } catch (error) {
    throw error
  }
}

export async function delComment(id) {
  try {
    console.log('send')
    const res = await Client.delete(`/comments/del/${id}`)
    console.log(res)

    return res.data
  } catch (error) {
    throw error
  }
}
