import Client from './api'

export async function grabGamePosts() {
  try {
    const res = await Client.get('/gameposts/all')
    return res.data
  } catch (error) {
    throw error
  }
}

export async function gamePostsByName(name) {
  try {
    const res = await Client.get(`/gameposts/${name}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export async function gameSearch(query) {
  try {
    const res = await Client.get(`/gameposts/search/${query}`)
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

export async function postComment(body) {
  try {
    const res = await Client.post(`/comments/create`, body)
    return res.data
  } catch (error) {
    throw error
  }
}

export async function createPost(body) {
  try {
    const res = await Client.post('/gameposts/create', body)
    return res.data
  } catch (error) {
    throw error
  }
}

export async function delComment(id) {
  try {
    const res = await Client.delete(`/comments/del/${id}`)
    return res
  } catch (error) {
    throw error
  }
}

export async function getUser(id) {
  try {
    const res = await Client.get(`/users/${id}`)
    return res.data
  } catch (error) {
    throw error
  }
}
