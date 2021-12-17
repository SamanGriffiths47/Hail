import Client from './api'
import { grabDescription } from './rawgServices'

export async function grabGamePosts() {
  try {
    return Client.get('/gameposts/all')
  } catch (error) {
    return { data: [] }
  }
}
// export async function grabGamePosts() {
//   try {
//     const res = await Client.get('/gameposts/all')
//     return res.data
//   } catch (error) {
//     throw error
//   }
// }

export function gamePostsByName(name) {
  try {
    return Client.get(`/gameposts/${name}`)
  } catch (error) {
    return { data: ['error'] }
  }
}
// export async function gamePostsByName(name) {
//   try {
//     const res = await Client.get(`/gameposts/${name}`)
//     return res.data
//   } catch (error) {
//     throw error
//   }
// }

export async function gameSearch(query) {
  try {
    return Client.get(`/gameposts/search/${query}`)
  } catch (error) {
    return false
  }
}
// export async function gameSearch(query) {
//   try {
//     const res = await Client.get(`/gameposts/search/${query}`)
//     return res.data
//   } catch (error) {
//     throw error
//   }
// }

export async function grabCommentByPostId(postid) {
  return Client.get(`/comments/view/${postid}`)
}

export async function postComment(body) {
  return Client.post(`/comments/create`, body)
}

export function postById(post_id) {
  try {
    return Client.get(`/gameposts/byid/${post_id}`)
  } catch (error) {
    return { data: 'Post Not Found' }
  }
}

export function createPost(body) {
  try {
    return Client.post('/gameposts/create', body)
  } catch (error) {
    return false
  }
}
// export async function createPost(body) {
//   try {
//     const res = await Client.post('/gameposts/create', body)
//     return res.data
//   } catch (error) {
//     throw error
//   }
// }

export async function delComment(id) {
  try {
    return Client.delete(`/comments/del/${id}`)
  } catch (error) {
    return false
  }
}
// export async function delComment(id) {
//   try {
//     const res = await Client.delete(`/comments/del/${id}`)
//     return res
//   } catch (error) {
//     throw error
//   }
// }

export async function getUser(id) {
  try {
    const res = await Client.get(`/users/${id}`)
    return res.data
  } catch (error) {
    throw error
  }
}
