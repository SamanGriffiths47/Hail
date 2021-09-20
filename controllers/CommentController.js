const { Comment } = require('../models')

const createComment = async (req, res) => {
  try {
    let ownerId = parseInt(req.params.user_id)
    let commentBody = {
      ownerId,
      ...req.body
    }
    const comment = await Comment.create()
    res.send(comment)
  } catch (error) {}
}

const findComments = async (req, res) => {
  try {
    const comments = await Comment.findAll()
    res.send(comments)
  } catch (error) {
    throw error
  }
}

const findCommentbyId = async (req, res) => {
  try {
    const comment = await Comment.findByPk(req.params.comment_id)
    res.send(comment)
  } catch (error) {
    throw error
  }
}

const updateComments = async (req, res) => {
  try {
  } catch (error) {}
}

module.exports = {
  findComments,
  findCommentbyId
}
