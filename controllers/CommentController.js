const { Comment } = require('../models')

const CreateComment = async (req, res) => {
  try {
    let ownerId = parseInt(req.params.user_Id)
    let commentBody = {
      ownerId,
      ...req.body
    }
    let comment = await Comment.create(commentBody)
    res.send(comment)
  } catch (error) {}
}

const FindComments = async (req, res) => {
  try {
    const comments = await Comment.findAll()
    res.send(comments)
  } catch (error) {
    throw error
  }
}

const FindCommentById = async (req, res) => {
  try {
    const comment = await Comment.findByPk(req.params.comment_Id)
    res.send(comment)
  } catch (error) {
    throw error
  }
}

const UpdateComments = async (req, res) => {
  try {
    let commentId = parseInt(req.params.comment_Id)
    let updateComment = await Comment.update(req.body, {
      where: { id: commentId },
      returning: true
    })
    res.send(updateComment)
  } catch (error) {}
}

const DeleteComment = async (req, res) => {
  try {
    let commentId = parseInt(req.params.comment_Id)
    await Comment.destroy({ where: { id: commentId } })
    res.send({ message: `Deleted comment with an id of ${commentId}` })
  } catch (error) {}
}

module.exports = {
  CreateComment,
  FindComments,
  FindCommentById,
  UpdateComments,
  DeleteComment
}
